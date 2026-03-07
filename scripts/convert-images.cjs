const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directory = 'src/assets/images';

async function convertImages() {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            const inputPath = path.join(directory, file);
            const outputPath = path.join(directory, file.replace(ext, '.webp'));

            try {
                const info = await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                const originalSize = fs.statSync(inputPath).size;
                const newSize = info.size;
                const savings = ((originalSize - newSize) / 1024).toFixed(2);
                const percent = (((originalSize - newSize) / originalSize) * 100).toFixed(2);

                console.log(`Converted ${file}: ${savings} KB saved (${percent}%)`);
            } catch (error) {
                console.error(`Error converting ${file}:`, error);
            }
        }
    }
}

convertImages();
