const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = 'C:\\Users\\shett\\.gemini\\antigravity\\brain\\015be787-eb58-4ac0-bac5-c675d512d2c0\\graduation_cap_favicon_1773843469957.png';

const outputPaths = {
  ico: path.join(__dirname, '../src/app/favicon.ico'),
  png32: path.join(__dirname, '../public/favicon-32x32.png'),
  png16: path.join(__dirname, '../public/favicon-16x16.png'),
  apple: path.join(__dirname, '../public/apple-touch-icon.png')
};

async function generateIcons() {
  try {
    // ICO (fake ICO using 64x64 PNG format, generally works everywhere now)
    await sharp(inputFile)
      .resize(64, 64)
      .toFormat('png')
      .toFile(outputPaths.ico);
    console.log('Created favicon.ico');

    // 32x32
    await sharp(inputFile)
      .resize(32, 32)
      .toFormat('png')
      .toFile(outputPaths.png32);
    console.log('Created favicon-32x32.png');

    // 16x16
    await sharp(inputFile)
      .resize(16, 16)
      .toFormat('png')
      .toFile(outputPaths.png16);
    console.log('Created favicon-16x16.png');

    // Apple touch icon (180x180 usually, with white background if transparent)
    await sharp(inputFile)
      .resize(180, 180)
      .flatten({ background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .toFormat('png')
      .toFile(outputPaths.apple);
    console.log('Created apple-touch-icon.png');

  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
