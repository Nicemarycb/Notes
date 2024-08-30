//#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Get arguments from command line
const [,, sourceFile, destinationFile] = process.argv;

if (!sourceFile || !destinationFile) {
  console.error("Please provide both source and destination file paths.");
  process.exit(1);
}

const sourcePath = path.resolve(process.cwd(), sourceFile);
const destinationPath = path.resolve(process.cwd(), destinationFile);

const copyFile = async () => {
  try {
    const data = await fs.readFile(sourcePath);
    await fs.writeFile(destinationPath, data);
    console.log(`File copied from ${sourceFile} to ${destinationFile}`);
  } catch (err) {
    console.error("Error occurred:", err.message);
    process.exit(1);
  }
};

copyFile();



