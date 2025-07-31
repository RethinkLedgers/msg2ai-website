#!/usr/bin/env python3
import os
import re
from pathlib import Path

# Read the homepage HTML to analyze sections
with open('old_www.msg2ai.xyz/index.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Define section markers and their corresponding names
section_markers = [
    # Hero section
    ('data-framer-name="Hero"', 'hero'),
    ('header class="framer-okw2xw"', 'hero'),
    
    # Features section
    ('data-framer-name="Features"', 'features'), 
    ('section class="framer-sflb39"', 'features'),
    
    # Media/Video section - look for video or media related content
    ('data-framer-name="Media"', 'media'),
    ('data-framer-name="Video"', 'media'),
    ('hqdefault', 'media'),
    ('youtube', 'media'),
    ('video', 'media'),
    
    # Pricing section
    ('data-framer-name="Pricing"', 'pricing'),
    ('data-framer-name="Plans"', 'pricing'),
    
    # Testimonials section
    ('data-framer-name="Testimonials"', 'testimonials'),
    ('data-framer-name="Reviews"', 'testimonials'),
    
    # Footer section
    ('data-framer-name="Footer"', 'footer'),
    ('footer class=', 'footer'),
    
    # About/Company section
    ('data-framer-name="About"', 'about'),
    ('data-framer-name="Company"', 'about'),
    ('data-framer-name="Team"', 'about'),
    
    # CTA/Contact section
    ('data-framer-name="CTA"', 'cta'),
    ('data-framer-name="Contact"', 'contact'),
    
    # Stats section
    ('data-framer-name="Stats"', 'stats'),
    ('data-framer-name="Numbers"', 'stats'),
]

def find_image_section(image_url, html_content):
    """Find which section an image belongs to based on its context in HTML"""
    
    # Find all occurrences of the image in the HTML
    image_positions = []
    for match in re.finditer(re.escape(image_url), html_content):
        image_positions.append(match.start())
    
    if not image_positions:
        return 'unknown'
    
    # For each image occurrence, find the closest section marker
    best_section = 'unknown'
    min_distance = float('inf')
    
    for img_pos in image_positions:
        for marker, section_name in section_markers:
            # Look for section markers before the image
            for match in re.finditer(re.escape(marker), html_content, re.IGNORECASE):
                marker_pos = match.start()
                if marker_pos < img_pos:  # Section marker comes before image
                    distance = img_pos - marker_pos
                    if distance < min_distance:
                        min_distance = distance
                        best_section = section_name
    
    # Special handling for specific image types
    if 'hqdefault' in image_url:
        return 'media'
    
    return best_section

def analyze_homepage_sections():
    """Analyze the homepage structure to understand sections"""
    print("=== HOMEPAGE SECTION ANALYSIS ===\n")
    
    # Find all sections in the homepage
    sections = []
    
    # Look for common section patterns
    section_patterns = [
        r'<header[^>]*data-framer-name="([^"]*)"',
        r'<section[^>]*data-framer-name="([^"]*)"',
        r'<div[^>]*data-framer-name="([^"]*)"[^>]*class="[^"]*section[^"]*"',
        r'<footer[^>]*data-framer-name="([^"]*)"',
        r'id="([^"]*)"[^>]*class="[^"]*section',
    ]
    
    for pattern in section_patterns:
        matches = re.finditer(pattern, html_content, re.IGNORECASE)
        for match in matches:
            section_name = match.group(1).lower()
            if section_name not in [s[1] for s in sections]:
                sections.append((match.start(), section_name))
    
    # Sort sections by position in HTML
    sections.sort(key=lambda x: x[0])
    
    print("Found sections in homepage:")
    for pos, name in sections:
        print(f"  - {name} (position: {pos})")
    
    return sections

def get_current_images():
    """Get all current image files in the images directory"""
    images_dir = Path('old_www.msg2ai.xyz/images')
    image_files = []
    
    for file_path in images_dir.glob('*'):
        if file_path.is_file() and file_path.suffix.lower() in ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']:
            image_files.append(file_path.name)
    
    return image_files

def create_section_mappings():
    """Create mappings from current image names to section-based names"""
    
    print("\n=== ANALYZING IMAGES FOR SECTION MAPPING ===\n")
    
    current_images = get_current_images()
    section_mappings = {}
    
    # First, let's extract the original image URLs from HTML to map them back
    image_url_pattern = r'https://framerusercontent\.com/[^"\']+\.(png|jpg|jpeg|svg|webp|gif)'
    found_urls = re.findall(image_url_pattern, html_content)
    
    # Create a more comprehensive mapping
    for image_file in current_images:
        # Try to find the section for this image
        section = 'unknown'
        
        # Special cases first
        if 'hqdefault' in image_file:
            section = 'media'
        elif 'hero' in image_file:
            section = 'hero'
        elif 'feature' in image_file:
            section = 'features'
        elif 'background' in image_file:
            # Try to determine which section's background this is
            if 'homepage_en_hero' in image_file or 'homepage_fr_hero' in image_file:
                section = 'hero'
            elif any(x in image_file for x in ['feature', 'card']):
                section = 'features'
            else:
                section = 'hero'  # Default background to hero
        else:
            # For other images, try to analyze based on filename patterns
            if any(x in image_file for x in ['blog', 'news']):
                continue  # Skip blog images
            elif any(x in image_file for x in ['testimonial', 'review']):
                section = 'testimonials'
            elif any(x in image_file for x in ['price', 'plan']):
                section = 'pricing'
            elif any(x in image_file for x in ['about', 'team', 'founder']):
                section = 'about'
            elif any(x in image_file for x in ['contact', 'cta']):
                section = 'contact'
            elif any(x in image_file for x in ['stat', 'number']):
                section = 'stats'
            else:
                section = 'hero'  # Default to hero for homepage images
        
        # Create new name
        if image_file.startswith('homepage_'):
            # Replace the current section with the identified section
            parts = image_file.split('_')
            if len(parts) >= 3:
                # Format: homepage_lang_section_description.ext
                lang = parts[1] if parts[1] in ['en', 'fr', 'du', 'it'] else 'en'
                description = '_'.join(parts[2:])
                new_name = f"homepage_{section}_{description}"
            else:
                new_name = f"homepage_{section}_{image_file.replace('homepage_', '')}"
        else:
            # For images that don't start with homepage_, add the prefix
            ext = Path(image_file).suffix
            base_name = Path(image_file).stem
            new_name = f"homepage_{section}_{base_name}{ext}"
        
        if new_name != image_file:
            section_mappings[image_file] = new_name
            print(f"{image_file} -> {new_name}")
    
    return section_mappings

def rename_images(mappings):
    """Rename the images based on the mappings"""
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
    
    print(f"\n=== SUMMARY ===")
    print(f"Successfully renamed: {renamed_count} images")
    
    return renamed_count

if __name__ == "__main__":
    # Analyze homepage sections
    sections = analyze_homepage_sections()
    
    # Create section-based mappings
    mappings = create_section_mappings()
    
    if mappings:
        # Rename the images
        renamed_count = rename_images(mappings)
        
        print(f"\n✅ Process completed! {renamed_count} images renamed with section-specific names.")
    else:
        print("\n⚠️  No images need renaming.")