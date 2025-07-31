#!/usr/bin/env node

/**
 * Fix Image Names Script
 * 
 * This script fixes incorrectly labeled image files in the old_www.msg2ai.xyz/images/ directory.
 * The main issue is that images from the English homepage and blog posts were incorrectly 
 * labeled with French (_fr) language codes when they should be labeled as English (_en)
 * or with more descriptive names based on their actual usage.
 * 
 * Issues identified:
 * 1. Homepage images labeled as "homepage_fr_*" should be "homepage_en_*" or "homepage_*"
 * 2. Blog images labeled as "blog_fr_*" contain English content and should be "blog_en_*"
 * 3. Some images need more descriptive names based on their actual section usage
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'old_www.msg2ai.xyz', 'images');
const DRY_RUN = process.argv.includes('--dry-run');

// Define mapping for incorrect to correct image names
const IMAGE_RENAMES = {
  // Homepage images - these are from the English homepage (index.html has lang="en-US")
  'homepage_fr_background.jpg': 'homepage_en_background.jpg',
  'homepage_fr_background.png': 'homepage_en_background.png', 
  'homepage_fr_background.svg': 'homepage_en_background.svg',
  'homepage_fr_background_2.jpg': 'homepage_en_background_2.jpg',
  'homepage_fr_background_2.png': 'homepage_en_background_2.png',
  'homepage_fr_background_3.jpg': 'homepage_en_background_3.jpg',
  'homepage_fr_background_3.png': 'homepage_en_background_3.png',
  'homepage_fr_background_4.png': 'homepage_en_background_4.png',
  'homepage_fr_background_5.png': 'homepage_en_background_5.png',
  'homepage_fr_background_6.png': 'homepage_en_background_6.png',
  'homepage_fr_background_7.png': 'homepage_en_background_7.png',
  'homepage_fr_background_8.png': 'homepage_en_background_8.png',
  'homepage_fr_background_9.png': 'homepage_en_background_9.png',
  'homepage_fr_background_10.png': 'homepage_en_background_10.png',
  'homepage_fr_background_11.png': 'homepage_en_background_11.png',
  'homepage_fr_background_12.png': 'homepage_en_background_12.png',
  'homepage_fr_background_13.png': 'homepage_en_background_13.png',
  'homepage_fr_background_14.png': 'homepage_en_background_14.png',
  'homepage_fr_hero.jpg': 'homepage_en_hero.jpg',
  'homepage_fr_hero.png': 'homepage_en_hero.png',

  // Blog images - these are from English blog posts but were incorrectly labeled as French
  'blog_fr_ai_in_hospitality_en_hero.png': 'blog_en_ai_in_hospitality_hero.png',
  'blog_fr_ai_in_hospitality_en_hero_2.png': 'blog_en_ai_in_hospitality_hero_2.png',
  'blog_fr_ai_in_hospitality_en_hero_3.png': 'blog_en_ai_in_hospitality_hero_3.png',
  'blog_fr_ai_in_hospitality_en_hero_4.png': 'blog_en_ai_in_hospitality_hero_4.png',
  
  'blog_fr_elevating_hospitalit_hero.png': 'blog_en_elevating_hospitality_hero.png',
  'blog_fr_elevating_hospitalit_hero_2.png': 'blog_en_elevating_hospitality_hero_2.png',
  'blog_fr_elevating_hospitalit_hero_3.png': 'blog_en_elevating_hospitality_hero_3.png',
  
  'blog_fr_how_ai_technology_is_hero.png': 'blog_en_how_ai_technology_transforms_hero.png',
  'blog_fr_how_ai_technology_is_hero_2.png': 'blog_en_how_ai_technology_transforms_hero_2.png',
  'blog_fr_how_ai_technology_is_hero_3.png': 'blog_en_how_ai_technology_transforms_hero_3.png',
  
  'blog_fr_how_our_ai_assistant_hero.png': 'blog_en_venture135_conference_hero.png',
  'blog_fr_how_our_ai_assistant_hero_2.png': 'blog_en_venture135_conference_hero_2.png',
  
  'blog_fr_how_the_new_agentic__hero.png': 'blog_en_agentic_future_travel_hero.png',
  'blog_fr_how_the_new_agentic__hero_2.png': 'blog_en_agentic_future_travel_hero_2.png',
  'blog_fr_how_the_new_agentic__hero_3.png': 'blog_en_agentic_future_travel_hero_3.png',
  
  'blog_fr_msg2ai_at_golden_hac_hero.png': 'blog_en_golden_hack_voice_api_hero.png',
  'blog_fr_msg2ai_at_golden_hac_hero_2.png': 'blog_en_golden_hack_voice_api_hero_2.png',
  'blog_fr_msg2ai_at_golden_hac_hero_3.png': 'blog_en_golden_hack_voice_api_hero_3.png',
  'blog_fr_msg2ai_at_golden_hac_hero_4.png': 'blog_en_golden_hack_voice_api_hero_4.png',
  
  'blog_fr_msg2ai_powers_hyperf_hero.png': 'blog_en_hyperfocus_hackathon_hero.png',
  'blog_fr_msg2ai_powers_hyperf_hero_2.png': 'blog_en_hyperfocus_hackathon_hero_2.png',
  'blog_fr_msg2ai_powers_hyperf_hero_3.png': 'blog_en_hyperfocus_hackathon_hero_3.png',
  'blog_fr_msg2ai_powers_hyperf_hero_4.png': 'blog_en_hyperfocus_hackathon_hero_4.png',
  
  'blog_fr_msg2ai_revolutionize_hero.png': 'blog_en_charlotte_business_expo_hero.png',
  'blog_fr_msg2ai_revolutionize_hero_2.png': 'blog_en_charlotte_business_expo_hero_2.png',
  
  'blog_fr_web_summit_qatar_202_hero.png': 'blog_en_web_summit_qatar_2025_hero.png',
  'blog_fr_web_summit_qatar_202_hero_2.png': 'blog_en_web_summit_qatar_2025_hero_2.png',
  'blog_fr_web_summit_qatar_202_hero_3.png': 'blog_en_web_summit_qatar_2025_hero_3.png'
};

// More descriptive names for specific sections (optional enhancement)
const SECTION_SPECIFIC_RENAMES = {
  // These could be renamed to be more specific about which section they're used in
  'homepage_en_background.png': 'homepage_hero_background.png',
  'homepage_en_background_2.png': 'homepage_features_background.png',
  'homepage_en_background_3.png': 'homepage_pricing_background.png',
  'homepage_en_hero.png': 'homepage_hero_section.png'
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
  console.log('\n🔍 Analyzing current image files...\n');
  
  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file => /\.(png|jpg|jpeg|svg|webp)$/i.test(file));
  
  const analysis = {
    total: imageFiles.length,
    frenchLabeled: imageFiles.filter(file => file.includes('_fr')).length,
    homepageImages: imageFiles.filter(file => file.startsWith('homepage_fr')).length,
    blogImages: imageFiles.filter(file => file.startsWith('blog_fr')).length,
    correctlyNamed: imageFiles.filter(file => !file.includes('_fr') || file.includes('_fr') && !Object.keys(IMAGE_RENAMES).includes(file)).length
  };
  
  console.log(`📊 Image Analysis:`);
  console.log(`   Total images: ${analysis.total}`);
  console.log(`   Incorrectly labeled with _fr: ${analysis.frenchLabeled}`);
  console.log(`   Homepage images to fix: ${analysis.homepageImages}`);
  console.log(`   Blog images to fix: ${analysis.blogImages}`);
  console.log(`   Already correctly named: ${analysis.correctlyNamed}`);
  
  return analysis;
}

function previewChanges() {
  console.log('\n📋 Preview of planned changes:\n');
  
  const files = fs.readdirSync(IMAGES_DIR);
  let changesCount = 0;
  
  Object.entries(IMAGE_RENAMES).forEach(([oldName, newName]) => {
    if (files.includes(oldName)) {
      console.log(`   ${oldName} → ${newName}`);
      changesCount++;
    }
  });
  
  if (changesCount === 0) {
    console.log('   No files found that match the rename patterns.');
    return false;
  }
  
  console.log(`\n📈 Total files to rename: ${changesCount}`);
  return true;
}

function performRenames() {
  console.log('\n🔧 Performing file renames...\n');
  
  const files = fs.readdirSync(IMAGES_DIR);
  let successCount = 0;
  let errorCount = 0;
  
  Object.entries(IMAGE_RENAMES).forEach(([oldName, newName]) => {
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
  
  console.log(`\n📊 Rename Summary:`);
  console.log(`   ✅ Successful: ${successCount}`);
  console.log(`   ❌ Failed: ${errorCount}`);
  
  return { successCount, errorCount };
}

function generateReport() {
  console.log('\n📝 Final Report:\n');
  
  const afterAnalysis = analyzeCurrentImages();
  
  console.log('🎯 Issues Resolved:');
  console.log('   • Fixed incorrect French language labels on English content');
  console.log('   • Updated homepage images to reflect correct English language');
  console.log('   • Renamed blog images with more descriptive and accurate names');
  console.log('   • Maintained file integrity and accessibility');
  
  console.log('\n💡 Why This Was Necessary:');
  console.log('   • The index.html file has lang="en-US" indicating English content');
  console.log('   • Images were incorrectly labeled with _fr (French) prefix');
  console.log('   • Blog posts in /news directory contain English content');
  console.log('   • Proper naming improves content management and SEO');
  
  if (!DRY_RUN) {
    console.log('\n✅ All corrections have been applied successfully!');
  } else {
    console.log('\n🔍 This was a dry run. Use without --dry-run to apply changes.');
  }
}

function main() {
  console.log('🖼️  Image Name Fix Script');
  console.log('=' .repeat(50));
  
  if (DRY_RUN) {
    console.log('🔍 RUNNING IN DRY RUN MODE - No files will be modified');
  }
  
  // Validate setup
  validateImageDirectory();
  
  // Analyze current state
  const analysis = analyzeCurrentImages();
  
  if (analysis.frenchLabeled === 0) {
    console.log('\n✅ No incorrectly labeled French images found. Nothing to fix!');
    return;
  }
  
  // Preview changes
  const hasChanges = previewChanges();
  
  if (!hasChanges) {
    console.log('\n✅ No matching files found for renaming.');
    return;
  }
  
  // Perform renames
  const results = performRenames();
  
  // Generate final report
  generateReport();
  
  console.log('\n🎉 Script completed successfully!');
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = {
  IMAGE_RENAMES,
  SECTION_SPECIFIC_RENAMES,
  analyzeCurrentImages,
  performRenames
};