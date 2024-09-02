#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';

// Check if the correct number of arguments is provided
if (process.argv.length !== 4) {
    console.error('Usage: copy <source> <destination>');
    process.exit(1);
}

const [,, source, destination] = process.argv;

// Validate that source and destination are strings
if (typeof source !== 'string' || typeof destination !== 'string') {
    console.error('Invalid arguments. Source and destination must be strings.');
    process.exit(1);
}

// Get absolute paths
const sourcePath = path.resolve(source);
const destinationPath = path.resolve(destination);

try {
    // Synchronously copy the file
    fs.copyFileSync(sourcePath, destinationPath);
    console.log(`File copied from ${sourcePath} to ${destinationPath}`);
} catch (err) {
    console.error(`Error copying file: ${(err as Error).message}`);
    process.exit(1);
}
