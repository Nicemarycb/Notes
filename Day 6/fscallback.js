//fs using callback

//#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get arguments from command line
const [,, sourceFile, destinationFile] = process.argv;

if (!sourceFile || !destinationFile) {
  console.error("Please provide both source and destination file paths.");
  process.exit(1);
}

const sourcePath = path.resolve(process.cwd(), sourceFile);
const destinationPath = path.resolve(process.cwd(), destinationFile);

// Asynchronous copy using callbacks
fs.readFile(sourcePath, (readErr, data) => {
  if (readErr) {
    console.error("Error reading the source file:", readErr.message);
    process.exit(1);
  }

  fs.writeFile(destinationPath, data, (writeErr) => {
    if (writeErr) {
      console.error("Error writing to the destination file:", writeErr.message);
      process.exit(1);
    }

    console.log(`File copied from ${sourceFile} to ${destinationFile}`);
  });
});








