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
files.push('tailwind.config.js');
files.push('index.html');

console.log('Replacing theme classes...');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Let's replace fonts first
  if (file.endsWith('tailwind.config.js')) {
    content = content.replace(/'"Bebas Neue"', 'cursive'/g, `'"Outfit"', 'sans-serif'`);
    content = content.replace(/'"Barlow Condensed"', 'sans-serif'/g, `'"Outfit"', 'sans-serif'`);
    content = content.replace(/'"DM Sans"', 'sans-serif'/g, `'"Inter"', 'sans-serif'`);
    // Define professional modern light corporate colors
    content = content.replace(/navy: '#1B2A4A',/g, "navy: '#1E3A8A',"); // darker blue
    content = content.replace(/'navy-dark': '#0D1B2E',/g, "'navy-dark': '#0F172A',");
    content = content.replace(/'navy-mid': '#152238',/g, "'navy-mid': '#1E293B',");
    content = content.replace(/cyan: '#00C2E0',/g, "cyan: '#0284C7',"); // professional blue
    content = content.replace(/'cyan-light': '#4DD9F0',/g, "'cyan-light': '#38BDF8',");
  }

  if (file.endsWith('index.css')) {
    content = content.replace(/Bebas\+Neue/g, 'Outfit:wght@400;500;600;700;800');
    content = content.replace(/Barlow\+Condensed[^&]*/g, 'Outfit:wght@400;500;600;700;800');
    content = content.replace(/DM\+Sans[^&]*/g, 'Inter:wght@400;500;600');
    content = content.replace(/bg-navy-dark text-white/g, 'bg-slate-50 text-slate-900');
  }

  // React components
  if (file.endsWith('.jsx')) {
    // We already fixed Navbar to use bg-white and text-navy. 
    // We need to carefully switch the dark components to light.
    // background: bg-navy-dark -> bg-slate-50
    content = content.replace(/bg-navy-dark/g, 'bg-slate-50');
    // background: bg-navy -> bg-white
    content = content.replace(/bg-navy/g, 'bg-white');
    // background: bg-navy-mid -> bg-slate-100
    content = content.replace(/bg-navy-mid/g, 'bg-slate-100');
    
    // text: text-white -> text-slate-900, BUT only outside Navbar if possible, actually Navbar already uses text-navy and bg-white. Navbar's mobile menu had text-white replaced mostly. 
    // Just blindly doing text-white -> text-slate-900 everywhere:
    content = content.replace(/text-white\/([0-9]+)/g, 'text-slate-600');
    content = content.replace(/text-white/g, 'text-slate-900');
    
    // borders
    content = content.replace(/border-white\/([0-9]+)/g, 'border-slate-200');
    content = content.replace(/border-cyan\//g, 'border-slate-200');

    // gradients
    content = content.replace(/linear-gradient\(180deg, rgba\(13,27,46,0\.97\)[^\)]*\)/g, "linear-gradient(180deg, rgba(248,250,252,0.9) 0%, rgba(248,250,252,0.7) 50%, rgba(248,250,252,0.95) 100%)");

    // cards overlay
    content = content.replace(/bg-white\/[0-9]+/g, 'bg-white shadow-sm border border-slate-200');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
