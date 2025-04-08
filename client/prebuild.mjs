import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Function to create lowercase versions of files to handle case sensitivity issues
function createLowercaseVersions(dir, extension) {
  const fullDir = path.join(__dirname, dir);
  
  if (!fs.existsSync(fullDir)) {
    console.log(`Directory not found: ${fullDir}`);
    return;
  }
  
  const files = fs.readdirSync(fullDir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(fullDir, file.name);
    
    if (file.isDirectory()) {
      // Recursively process subdirectories
      createLowercaseVersions(path.join(dir, file.name), extension);
    } else if (file.name.endsWith(extension) && file.name !== file.name.toLowerCase()) {
      // Create lowercase version of the file
      const lowercasePath = path.join(fullDir, file.name.toLowerCase());
      console.log(`Creating lowercase version: ${file.name} -> ${file.name.toLowerCase()}`);
      
      // Copy the file content to the lowercase version
      fs.copyFileSync(fullPath, lowercasePath);
    }
  }
}

// Process all TypeScript and React files
createLowercaseVersions('./src', '.tsx');
createLowercaseVersions('./src', '.ts');

console.log('Prebuild completed: Created lowercase versions of files for case-sensitive environments.'); 