#!/usr/bin/env node

/**
 * Image Usage Analysis Script
 * 
 * This script analyzes how images are used across the website to provide
 * more prescriptive names based on their actual section usage.
 * 
 * It examines HTML files to understand which images are used in which sections,
 * then suggests more descriptive names based on context.
 */

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, 'old_www.msg2ai.xyz');
const IMAGES_DIR = path.join(SITE_DIR, 'images');

// Analyze HTML files to understand image usage
function analyzeImageUsage() {
  console.log('🔍 Analyzing image usage across website...\n');
  
  const htmlFiles = findHtmlFiles(SITE_DIR);
  const imageUsage = {};
  
  htmlFiles.forEach(filePath => {
    const relativePath = path.relative(SITE_DIR, filePath);
    console.log(`   📄 Analyzing: ${relativePath}`);
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const images = extractImageReferences(content);
      
      images.forEach(imageRef => {
        if (!imageUsage[imageRef.src]) {
          imageUsage[imageRef.src] = [];
        }
        
        imageUsage[imageRef.src].push({
          file: relativePath,
          context: imageRef.context,
          section: detectSection(imageRef.context, content, imageRef.src)
        });
      });
    } catch (error) {
      console.log(`   ❌ Error reading ${relativePath}: ${error.message}`);
    }
  });
  
  return imageUsage;
}

function findHtmlFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.html')) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

function extractImageReferences(content) {
  const images = [];
  
  // Match img tags and background images
  const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
  const bgRegex = /background-image[^;]*url\(["']?([^"')]+)["']?\)/gi;
  const srcsetRegex = /srcset=["']([^"']+)["']/gi;
  
  let match;
  
  // Extract img src attributes
  while ((match = imgRegex.exec(content)) !== null) {
    const src = extractImageName(match[1]);
    if (src && src.startsWith('homepage_') || src.startsWith('blog_')) {
      images.push({
        src: src,
        context: match[0],
        type: 'img'
      });
    }
  }
  
  // Extract background images
  while ((match = bgRegex.exec(content)) !== null) {
    const src = extractImageName(match[1]);
    if (src && (src.startsWith('homepage_') || src.startsWith('blog_'))) {
      images.push({
        src: src,
        context: match[0],
        type: 'background'
      });
    }
  }
  
  // Extract from srcset
  while ((match = srcsetRegex.exec(content)) !== null) {
    const srcsetValue = match[1];
    const srcsetImages = srcsetValue.split(',').map(s => s.trim().split(' ')[0]);
    
    srcsetImages.forEach(srcUrl => {
      const src = extractImageName(srcUrl);
      if (src && (src.startsWith('homepage_') || src.startsWith('blog_'))) {
        images.push({
          src: src,
          context: match[0],
          type: 'srcset'
        });
      }
    });
  }
  
  return images;
}

function extractImageName(url) {
  // Extract just the filename from various URL formats
  const urlParts = url.split('/');
  const filename = urlParts[urlParts.length - 1];
  
  // Remove query parameters
  return filename.split('?')[0];
}

function detectSection(context, fullContent, imageSrc) {
  // Try to determine which section of the page this image belongs to
  const sections = {
    hero: /hero|main|banner|landing/i,
    features: /features|feature|benefits/i,
    pricing: /pricing|price|plan|tier/i,
    testimonials: /testimonial|review|client/i,
    footer: /footer|contact/i,
    header: /header|nav|menu/i,
    about: /about|team|founder/i,
    blog: /blog|post|article|news/i
  };
  
  // Look for section indicators around the image usage
  const contextIndex = fullContent.indexOf(context);
  const surroundingText = fullContent.slice(
    Math.max(0, contextIndex - 500), 
    Math.min(fullContent.length, contextIndex + 500)
  );
  
  for (const [sectionName, regex] of Object.entries(sections)) {
    if (regex.test(surroundingText)) {
      return sectionName;
    }
  }
  
  // Check if it's a blog image based on filename
  if (imageSrc.startsWith('blog_')) {
    return 'blog-hero';
  }
  
  // Default fallback
  return 'unknown';
}

function generatePrescriptiveNames(imageUsage) {
  console.log('\n📝 Generating prescriptive naming suggestions...\n');
  
  const suggestions = {};
  
  Object.entries(imageUsage).forEach(([imageName, usages]) => {
    // Skip if not a problematic French-labeled image
    if (!imageName.includes('_fr')) {
      return;
    }
    
    // Determine the most common section usage
    const sectionCounts = {};
    usages.forEach(usage => {
      sectionCounts[usage.section] = (sectionCounts[usage.section] || 0) + 1;
    });
    
    const primarySection = Object.keys(sectionCounts).reduce((a, b) => 
      sectionCounts[a] > sectionCounts[b] ? a : b
    );
    
    // Generate a descriptive name
    let suggestedName = imageName.replace('_fr', '_en');
    
    // Make it more specific based on section usage
    if (imageName.startsWith('homepage_fr_background')) {
      const backgroundNumber = imageName.match(/_(\d+)\./) ? `_${imageName.match(/_(\d+)\./)[1]}` : '';
      const extension = path.extname(imageName);
      
      switch (primarySection) {
        case 'hero':
          suggestedName = `homepage_hero_background${backgroundNumber}${extension}`;
          break;
        case 'features':
          suggestedName = `homepage_features_background${backgroundNumber}${extension}`;
          break;
        case 'pricing':
          suggestedName = `homepage_pricing_background${backgroundNumber}${extension}`;
          break;
        default:
          suggestedName = `homepage_${primarySection}_background${backgroundNumber}${extension}`;
      }
    } else if (imageName.startsWith('homepage_fr_hero')) {
      const extension = path.extname(imageName);
      suggestedName = `homepage_hero_main${extension}`;
    }
    
    suggestions[imageName] = {
      suggested: suggestedName,
      section: primarySection,
      usageCount: usages.length,
      files: usages.map(u => u.file)
    };
  });
  
  return suggestions;
}

function displayResults(imageUsage, suggestions) {
  console.log('📊 Image Usage Analysis Results\n');
  console.log('='.repeat(50));
  
  // Show usage statistics
  const totalImages = Object.keys(imageUsage).length;
  const frenchLabeled = Object.keys(imageUsage).filter(img => img.includes('_fr')).length;
  
  console.log(`\n📈 Statistics:`);
  console.log(`   Images analyzed: ${totalImages}`);
  console.log(`   French-labeled images: ${frenchLabeled}`);
  
  console.log(`\n🎯 Prescriptive Naming Suggestions:\n`);
  
  Object.entries(suggestions).forEach(([original, suggestion]) => {
    console.log(`   ${original}`);
    console.log(`   → ${suggestion.suggested}`);
    console.log(`   📍 Primary section: ${suggestion.section}`);
    console.log(`   📄 Used in ${suggestion.usageCount} place(s): ${suggestion.files.join(', ')}`);
    console.log('');
  });
  
  // Generate updated rename map for the fix script
  console.log(`\n🔧 Updated rename map for fix_image_names.js:`);
  console.log('```javascript');
  console.log('const SECTION_SPECIFIC_RENAMES = {');
  Object.entries(suggestions).forEach(([original, suggestion]) => {
    console.log(`  '${original}': '${suggestion.suggested}',`);
  });
  console.log('};');
  console.log('```');
}

function main() {
  console.log('🖼️  Image Usage Analysis');
  console.log('=' .repeat(50));
  
  if (!fs.existsSync(SITE_DIR)) {
    console.error(`❌ Site directory not found: ${SITE_DIR}`);
    process.exit(1);
  }
  
  try {
    const imageUsage = analyzeImageUsage();
    const suggestions = generatePrescriptiveNames(imageUsage);
    displayResults(imageUsage, suggestions);
    
    console.log('\n✅ Analysis completed successfully!');
    console.log('\n💡 Next steps:');
    console.log('   1. Review the prescriptive naming suggestions above');
    console.log('   2. Update the fix_image_names.js script with the new rename map');
    console.log('   3. Run the fix script to apply the changes');
    
  } catch (error) {
    console.error(`❌ Analysis failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeImageUsage,
  generatePrescriptiveNames
};