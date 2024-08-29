#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// // Check if the correct number of arguments is provided
// if (process.argv.length !== 4) {
//     console.error('Usage: copy <source> <destination>');
//     process.exit(1);
// }

const [,, source, destination] = process.argv;

// Get absolute paths
const sourcePath = path.resolve(source);
const destinationPath = path.resolve(destination);

try {
    // Synchronously copy the file
    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
} catch (err) {
    console.error(`Error copying file: ${err.message}`);
    process.exit(1);
}
