import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootPath = path.join(__dirname, '../../');

// Define the source and destination paths
const sourceDir = path.join(rootPath, 'dist-sw');
const destDir = path.join(rootPath, 'dist');

// Check if the source directory exists before copying
if (fs.existsSync(sourceDir)) {
  // Copy the source directory to the destination
  fs.cpSync(sourceDir, destDir, { recursive: true });

  // Remove the source directory
  fs.rmSync(sourceDir, { recursive: true, force: true });

  console.log('Copy and delete operations completed.');
} else {
  console.error(`Error: Directory "${sourceDir}" does not exist.`);
}
// const rootPath = path.join(import.meta.dirname, '../');

// fs.cpSync(path.join(rootPath, 'dist-sw'), path.join(rootPath, 'dist'), { recursive: true });

// fs.rmSync(path.join(rootPath, 'dist-sw'), { recursive: true, force: true });
