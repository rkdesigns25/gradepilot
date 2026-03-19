const sharp = require("sharp");
const pngToIco = require("png-to-ico").default || require("png-to-ico");
const fs = require("fs");
const path = require("path");

const SOURCE_IMAGE = "C:\\Users\\shett\\.gemini\\antigravity\\brain\\015be787-eb58-4ac0-bac5-c675d512d2c0\\gradepilot_base_icon_1773894385105.png";
const PUBLIC_DIR = path.join(__dirname, "..", "public");

const SIZES = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
];

async function generateFavicons() {
  console.log("Starting favicon generation...");

  try {
    // 1. Delete old favicon items if they exist to start fresh
    const oldFiles = ["favicon.ico", "favicon-16x16.png", "favicon-32x32.png", "apple-touch-icon.png", "android-chrome-192x192.png", "android-chrome-512x512.png"];
    for (const file of oldFiles) {
      const p = path.join(PUBLIC_DIR, file);
      if (fs.existsSync(p)) fs.unlinkSync(p);
    }

    // 2. Generate PNG formats using Sharp
    for (const config of SIZES) {
      await sharp(SOURCE_IMAGE)
        .resize({ width: config.size, height: config.size, fit: "cover" })
        .png()
        .toFile(path.join(PUBLIC_DIR, config.name));
      console.log(`✅ Generated ${config.name}`);
    }

    // 3. Generate multi-layer favicon.ico using png-to-ico
    // We can use the 192x192 as source for png-to-ico which creates 16, 32, 48 internally
    const sourceBuffer = await sharp(SOURCE_IMAGE)
      .resize(192, 192, { fit: "cover" })
      .png()
      .toBuffer();
    
    // We write to a temporary file for pngToIco because it takes file paths
    const tempIcoSrc = path.join(PUBLIC_DIR, "temp-ico-src.png");
    fs.writeFileSync(tempIcoSrc, sourceBuffer);

    const buf = await pngToIco([tempIcoSrc]);
    fs.writeFileSync(path.join(PUBLIC_DIR, "favicon.ico"), buf);
    console.log("✅ Generated favicon.ico (multi-layer)");

    // Clean up temp
    fs.unlinkSync(tempIcoSrc);

    console.log("All favicons generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
    fs.writeFileSync(path.join(__dirname, "error.txt"), error.stack || error.toString(), "utf8");
    process.exit(1);
  }
}

generateFavicons();
