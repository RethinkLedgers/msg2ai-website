#!/usr/bin/env python3
import os
import re
from pathlib import Path

def analyze_homepage_structure():
    """Analyze the actual homepage HTML structure to identify sections"""
    
    with open('old_www.msg2ai.xyz/index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    print("=== DETAILED HOMEPAGE SECTION ANALYSIS ===\n")
    
    # Look for the actual sections in the homepage
    sections_found = []
    
    # Search for data-framer-name attributes which indicate sections
    framer_sections = re.findall(r'data-framer-name="([^"]+)"', html_content)
    
    # Filter and categorize sections
    section_mapping = {
        'hero': ['Hero', 'hero', 'Header'],
        'features': ['Features', 'features', 'Why', 'Cards'],
        'pricing': ['Pricing', 'pricing', 'Plans', 'packages'],
        'testimonials': ['Testimonials', 'testimonial', 'Reviews', 'review'],
        'media': ['Media', 'media', 'Video', 'video', 'Demo'],
        'stats': ['Stats', 'statistics', 'Numbers', 'metrics'],
        'about': ['About', 'about', 'Company', 'Team'],
        'contact': ['Contact', 'contact', 'CTA', 'Get Started'],
        'footer': ['Footer', 'footer']
    }
    
    identified_sections = {}
    
    for section in framer_sections:
        section_lower = section.lower()
        for category, keywords in section_mapping.items():
            if any(keyword.lower() in section_lower for keyword in keywords):
                if category not in identified_sections:
                    identified_sections[category] = []
                identified_sections[category].append(section)
                break
    
    print("Identified sections:")
    for category, sections in identified_sections.items():
        print(f"  {category.upper()}: {', '.join(sections)}")
    
    # Also look for id attributes that might indicate sections
    print("\nSection IDs found:")
    section_ids = re.findall(r'id="([^"]+)"', html_content)
    relevant_ids = [sid for sid in section_ids if any(keyword in sid.lower() for keyword in ['home', 'hero', 'features', 'pricing', 'about', 'contact', 'media', 'testimonial'])]
    for sid in relevant_ids[:10]:  # Show first 10
        print(f"  - {sid}")
    
    return identified_sections

def create_proper_section_mappings():
    """Create proper section mappings based on actual HTML analysis"""
    
    images_dir = Path('old_www.msg2ai.xyz/images')
    current_images = [f.name for f in images_dir.glob('*') if f.is_file() and f.suffix.lower() in ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']]
    
    print(f"\n=== ANALYZING {len(current_images)} IMAGES FOR PROPER SECTIONS ===\n")
    
    # Read HTML to understand image usage context
    with open('old_www.msg2ai.xyz/index.html', 'r', encoding='utf-8') as f:
        html_content = f.read()
    
    # Define section keywords and their priorities (higher number = higher priority)
    section_keywords = {
        'media': ['hqdefault', 'youtube', 'video', 'media', 'play', 'thumbnail'],
        'hero': ['hero', 'main', 'header', 'banner', 'landing'],
        'features': ['feature', 'card', 'benefit', 'why', 'advantage'],
        'pricing': ['pricing', 'plan', 'package', 'cost', 'price'],
        'testimonials': ['testimonial', 'review', 'feedback', 'quote'],
        'stats': ['stats', 'number', 'metric', 'achievement'],
        'about': ['about', 'team', 'founder', 'company', 'story'],
        'contact': ['contact', 'cta', 'get-started', 'book', 'demo'],
        'footer': ['footer', 'bottom', 'social']
    }
    
    section_mappings = {}
    
    for image_file in current_images:
        current_section = 'unknown'
        max_score = 0
        
        # Skip blog images - they're already correctly categorized
        if image_file.startswith('blog_'):
            continue
            
        # Analyze filename for section clues
        filename_lower = image_file.lower()
        
        for section, keywords in section_keywords.items():
            score = sum(1 for keyword in keywords if keyword in filename_lower)
            if score > max_score:
                max_score = score
                current_section = section
        
        # Special handling for specific cases
        if 'hqdefault' in filename_lower:
            current_section = 'media'
        elif filename_lower.startswith('homepage_hero_'):
            # These are likely misclassified - let's reclassify based on the rest of the name
            rest_of_name = filename_lower.replace('homepage_hero_', '')
            if any(kw in rest_of_name for kw in ['background', 'bg']):
                if any(kw in rest_of_name for kw in ['feature', 'card']):
                    current_section = 'features'
                elif any(kw in rest_of_name for kw in ['price', 'plan']):
                    current_section = 'pricing'
                else:
                    current_section = 'hero'  # Keep as hero if it's a general background
            else:
                current_section = 'hero'
        
        # Create new filename if section has changed
        if image_file.startswith('homepage_hero_') and current_section != 'hero':
            new_name = image_file.replace('homepage_hero_', f'homepage_{current_section}_')
            section_mappings[image_file] = new_name
            print(f"Reclassify: {image_file} -> {new_name}")
        elif not image_file.startswith('homepage_') and current_section != 'unknown':
            # Add homepage prefix for non-blog images
            ext = Path(image_file).suffix
            base_name = Path(image_file).stem
            new_name = f"homepage_{current_section}_{base_name}{ext}"
            section_mappings[image_file] = new_name
            print(f"Add section: {image_file} -> {new_name}")
    
    return section_mappings

def rename_images_with_sections(mappings):
    """Rename images based on section mappings"""
    
    if not mappings:
        print("No images need section-based renaming.")
        return 0
    
    images_dir = Path('old_www.msg2ai.xyz/images')
    renamed_count = 0
    
    print(f"\n=== RENAMING {len(mappings)} IMAGES ===\n")
    
    for old_name, new_name in mappings.items():
        old_path = images_dir / old_name
        new_path = images_dir / new_name
        
        if old_path.exists():
            if new_path.exists():
                print(f"⚠️  Skipping {old_name} -> {new_name} (destination exists)")
            else:
                try:
                    old_path.rename(new_path)
                    print(f"✅ Renamed: {old_name} -> {new_name}")
                    renamed_count += 1
                except Exception as e:
                    print(f"❌ Error renaming {old_name}: {e}")
        else:
            print(f"⚠️  File not found: {old_name}")
    
    return renamed_count

def create_section_summary():
    """Create a summary of images by section"""
    
    images_dir = Path('old_www.msg2ai.xyz/images')
    all_images = [f.name for f in images_dir.glob('*') if f.is_file()]
    
    sections = {}
    
    for image in all_images:
        if image.startswith('homepage_'):
            parts = image.split('_')
            if len(parts) >= 2:
                section = parts[1]
                if section not in sections:
                    sections[section] = []
                sections[section].append(image)
        elif image.startswith('blog_'):
            if 'blog' not in sections:
                sections['blog'] = []
            sections['blog'].append(image)
        else:
            if 'uncategorized' not in sections:
                sections['uncategorized'] = []
            sections['uncategorized'].append(image)
    
    print(f"\n=== FINAL SECTION SUMMARY ===\n")
    
    for section, images in sorted(sections.items()):
        print(f"{section.upper()} ({len(images)} images):")
        for img in sorted(images)[:5]:  # Show first 5 images
            print(f"  - {img}")
        if len(images) > 5:
            print(f"  ... and {len(images) - 5} more")
        print()

if __name__ == "__main__":
    # Analyze homepage structure
    analyze_homepage_structure()
    
    # Create section mappings
    mappings = create_proper_section_mappings()
    
    # Rename images
    if mappings:
        renamed_count = rename_images_with_sections(mappings)
        print(f"\n✅ Renamed {renamed_count} images with proper sections.")
    
    # Show final summary
    create_section_summary()