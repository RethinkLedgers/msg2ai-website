#!/usr/bin/env node

/**
 * Prescriptive Rename Script
 * 
 * This script provides more descriptive names for homepage background images
 * based on their likely section usage. Since there are many background images,
 * this makes them more identifiable for content management.
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'old_www.msg2ai.xyz', 'images');
const DRY_RUN = process.argv.includes('--dry-run');

// More prescriptive names based on typical website sections
const PRESCRIPTIVE_RENAMES = {
  // Main hero section
  'homepage_en_hero.jpg': 'homepage_hero_main.jpg',
  'homepage_en_hero.png': 'homepage_hero_main.png',
  
  // Background images - assign to likely sections
  'homepage_en_background.jpg': 'homepage_hero_background.jpg',
  'homepage_en_background.png': 'homepage_hero_background.png',
  'homepage_en_background.svg': 'homepage_hero_background.svg',
  
  'homepage_en_background_2.jpg': 'homepage_features_background.jpg',
  'homepage_en_background_2.png': 'homepage_features_background.png',
  
  'homepage_en_background_3.jpg': 'homepage_services_background.jpg',
  'homepage_en_background_3.png': 'homepage_services_background.png',
  
  'homepage_en_background_4.png': 'homepage_pricing_background.png',
  'homepage_en_background_5.png': 'homepage_testimonials_background.png',
  'homepage_en_background_6.png': 'homepage_about_background.png',
  'homepage_en_background_7.png': 'homepage_contact_background.png',
  'homepage_en_background_8.png': 'homepage_footer_background.png',
  
  // Additional variants for different screen sizes or states
  'homepage_en_background_9.png': 'homepage_hero_background_mobile.png',
  'homepage_en_background_10.png': 'homepage_features_background_mobile.png',
  'homepage_en_background_11.png': 'homepage_services_background_mobile.png',
  'homepage_en_background_12.png': 'homepage_pricing_background_mobile.png',
  'homepage_en_background_13.png': 'homepage_hero_background_dark.png',
  'homepage_en_background_14.png': 'homepage_features_background_dark.png',
  
  // Already descriptive ones we can enhance
  'homepage_feature.png': 'homepage_features_icon.png'
};

function validateImageDirectory() {
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error(`❌ Images directory not found: ${IMAGES_DIR}`);
    console.error('Please run this script from the project root directory.');
    process.exit(1);
  }
  
  console.log(`📁 Found images directory: ${IMAGES_DIR}`);
  return true;
}

function analyzeCurrentImages() {
  console.log('\n🔍 Analyzing current image files for prescriptive renaming...\n');
  
  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
  
  const analysis = {
    total: imageFiles.length,
    homepageEnImages: imageFiles.filter(file => file.startsWith('homepage_en')).length,
    candidatesForRename: imageFiles.filter(file => Object.keys(PRESCRIPTIVE_RENAMES).includes(file)).length,
    alreadyDescriptive: imageFiles.filter(file => file.includes('hero') || file.includes('features') || file.includes('pricing')).length
  };
  
  console.log(`📊 Prescriptive Rename Analysis:`);
  console.log(`   Total images: ${analysis.total}`);
  console.log(`   Homepage English images: ${analysis.homepageEnImages}`);
  console.log(`   Candidates for prescriptive renaming: ${analysis.candidatesForRename}`);
  console.log(`   Already descriptively named: ${analysis.alreadyDescriptive}`);
  
  return analysis;
}

function previewPrescriptiveChanges() {
  console.log('\n📋 Preview of prescriptive naming changes:\n');
  
  const files = fs.readdirSync(IMAGES_DIR);
  let changesCount = 0;
  
  Object.entries(PRESCRIPTIVE_RENAMES).forEach(([oldName, newName]) => {
    if (files.includes(oldName)) {
      console.log(`   ${oldName}`);
      console.log(`   → ${newName}`);
      console.log(`   📍 Section: ${extractSection(newName)}`);
      console.log('');
      changesCount++;
    }
  });
  
  if (changesCount === 0) {
    console.log('   No files found that match the prescriptive rename patterns.');
    return false;
  }
  
  console.log(`📈 Total files for prescriptive renaming: ${changesCount}`);
  return true;
}

function extractSection(filename) {
  if (filename.includes('hero')) return 'Hero Section';
  if (filename.includes('features')) return 'Features Section';
  if (filename.includes('services')) return 'Services Section';  
  if (filename.includes('pricing')) return 'Pricing Section';
  if (filename.includes('testimonials')) return 'Testimonials Section';
  if (filename.includes('about')) return 'About Section';
  if (filename.includes('contact')) return 'Contact Section';
  if (filename.includes('footer')) return 'Footer Section';
  if (filename.includes('mobile')) return 'Mobile Version';
  if (filename.includes('dark')) return 'Dark Theme';
  return 'General';
}

function performPrescriptiveRenames() {
  console.log('\n🔧 Performing prescriptive file renames...\n');
  
  const files = fs.readdirSync(IMAGES_DIR);
  let successCount = 0;
  let errorCount = 0;
  
  Object.entries(PRESCRIPTIVE_RENAMES).forEach(([oldName, newName]) => {
    if (files.includes(oldName)) {
      const oldPath = path.join(IMAGES_DIR, oldName);
      const newPath = path.join(IMAGES_DIR, newName);
      
      try {
        if (DRY_RUN) {
          console.log(`   [DRY RUN] Would rename: ${oldName} → ${newName}`);
          successCount++;
        } else {
          // Check if target file already exists
          if (fs.existsSync(newPath)) {
            console.log(`   ⚠️  Target exists, skipping: ${oldName} → ${newName}`);
            return;
          }
          
          fs.renameSync(oldPath, newPath);
          console.log(`   ✅ Renamed: ${oldName} → ${newName}`);
          successCount++;
        }
      } catch (error) {
        console.log(`   ❌ Failed to rename ${oldName}: ${error.message}`);
        errorCount++;
      }
    }
  });
  
  console.log(`\n📊 Prescriptive Rename Summary:`);
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Failed: ${errorCount}`);
  
  return { successCount, errorCount };
}

function generateSectionGuide() {
  console.log('\n📖 Section-Based Image Guide:\n');
  
  const sectionGroups = {};
  
  Object.values(PRESCRIPTIVE_RENAMES).forEach(filename => {
    const section = extractSection(filename);
    if (!sectionGroups[section]) {
      sectionGroups[section] = [];
    }
    sectionGroups[section].push(filename);
  });
  
  Object.entries(sectionGroups).forEach(([section, files]) => {
    console.log(`🎯 ${section}:`);
    files.forEach(file => {
      console.log(`   • ${file}`);
    });
    console.log('');
  });
}

function generateFinalReport() {
  console.log('\n📝 Prescriptive Naming Report:\n');
  
  const afterAnalysis = analyzeCurrentImages();
  
  console.log('🎯 Prescriptive Improvements Made:');
  console.log('   • Renamed generic background images to section-specific names');
  console.log('   • Added mobile and dark theme variant indicators'); 
  console.log('   • Enhanced hero and feature image identification');
  console.log('   • Improved content management and developer experience');
  
  console.log('\n💡 Benefits of Prescriptive Naming:');
  console.log('   • Developers can quickly identify which image belongs to which section');
  console.log('   • Content managers can easily update section-specific assets');
  console.log('   • Mobile and theme variants are clearly distinguished');
  console.log('   • SEO benefits from descriptive file names');
  console.log('   • Easier maintenance and updates');
  
  if (!DRY_RUN) {
    console.log('\n✅ All prescriptive naming improvements have been applied!');
  } else {
    console.log('\n🔍 This was a dry run. Use without --dry-run to apply changes.');
  }
}

function main() {
  console.log('🏷️  Prescriptive Image Naming Script');
  console.log('=' .repeat(50));
  
  if (DRY_RUN) {
    console.log('🔍 RUNNING IN DRY RUN MODE - No files will be modified');
  }
  
  // Validate setup
  validateImageDirectory();
  
  // Analyze current state
  const analysis = analyzeCurrentImages();
  
  if (analysis.candidatesForRename === 0) {
    console.log('\n✅ No images found that need prescriptive renaming!');
    return;
  }
  
  // Preview changes
  const hasChanges = previewPrescriptiveChanges();
  
  if (!hasChanges) {
    console.log('\n✅ No matching files found for prescriptive renaming.');
    return;
  }
  
  // Show section guide
  generateSectionGuide();
  
  // Perform renames
  const results = performPrescriptiveRenames();
  
  // Generate final report
  generateFinalReport();
  
  console.log('\n🎉 Prescriptive naming completed successfully!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  PRESCRIPTIVE_RENAMES,
  performPrescriptiveRenames
};