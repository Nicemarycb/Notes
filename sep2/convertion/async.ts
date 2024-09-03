#!/usr/bin/env ts-node

import { promises as fs } from 'fs';
import path from 'path';

// Get arguments from command line
const [,, sourceFile, destinationFile] = process.argv;

if (!sourceFile || !destinationFile) {
  console.error("Please provide both source and destination file paths.");
  process.exit(1);
}

const sourcePath = path.resolve(process.cwd(), sourceFile);
const destinationPath = path.resolve(process.cwd(), destinationFile);

const copyFile = async (): Promise<void> => {
  try {
    const data = await fs.readFile(sourcePath);
    await fs.writeFile(destinationPath, data);
    console.log(`File copied from ${sourceFile} to ${destinationFile}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error occurred:", err.message);
    } else {
      console.error("An unknown error occurred.");
    }
    process.exit(1);
  }
};

copyFile();