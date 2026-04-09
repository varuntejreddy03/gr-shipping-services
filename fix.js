import fs from 'fs';
import path from 'path';

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules') {
        filelist = walkSync(filePath, filelist);
      }
    } else {
      if (filePath.endsWith('.jsx') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.html')) {
        filelist.push(filePath);
      }
    }
  });
  return filelist;
}

const files = walkSync('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // fix border typos
  content = content.replace(/border-slate-[0-9]{3}[0-9]+/g, 'border-slate-200');
  content = content.replace(/border border-slate-200 border border-slate-200/g, 'border border-slate-200');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed typos in ${file}`);
  }
});
