#!/usr/bin/env ts-node

import fs from 'fs';
import path from 'path';

// Get arguments from the command line
const [, , sourceFile, destinationFile] = process.argv;

if (!sourceFile || !destinationFile) {
  console.error("Please provide both source and destination file paths.");
  process.exit(1);
}

const sourcePath: string = path.resolve(process.cwd(), sourceFile);
const destinationPath: string = path.resolve(process.cwd(), destinationFile);

// Asynchronous copy using callbacks
fs.readFile(sourcePath, (readErr: NodeJS.ErrnoException | null, data: Buffer) => {
  if (readErr) {
    console.error("Error reading the source file:", readErr.message);
    process.exit(1);
  }

  fs.writeFile(destinationPath, data, (writeErr: NodeJS.ErrnoException | null) => {
    if (writeErr) {
      console.error("Error writing to the destination file:", writeErr.message);
      process.exit(1);
    }

    console.log(`File copied from ${sourceFile} to ${destinationFile}`);
  });
});
