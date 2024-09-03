#!/usr/bin/env ts-node

import { promises as fs } from 'fs';
import path from 'path';

// Get arguments from command line
const [, , sourceFile, destinationFile] = process.argv;

if (!sourceFile || !destinationFile) {
  console.error("Please provide both source and destination file paths.");
  process.exit(1);
}

const sourcePath: string = path.resolve(process.cwd(), sourceFile);
const destinationPath: string = path.resolve(process.cwd(), destinationFile);

// Asynchronous copy using fs.promises with .then()
fs.readFile(sourcePath)
  .then((data: Buffer) => {
    return fs.writeFile(destinationPath, data);
  })
  .then(() => {
    console.log(`File copied from ${sourceFile} to ${destinationFile}`);
  })
  .catch((err: Error) => {
    console.error("Error occurred:", err.message);
    process.exit(1);
  });
