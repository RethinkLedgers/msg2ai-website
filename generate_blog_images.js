const fs = require('fs');
const path = require('path');

// Define unique color schemes for each blog post
const blogImageConfigs = [
  {
    id: 'agentic-future-travel-hotels',
    title: 'Agentic Future Travel & Hotels',
    colors: ['#8B5CF6', '#EC4899', '#6366F1'], // Purple to Pink gradient
    description: 'AI and blockchain in hospitality'
  },
  {
    id: 'ai-hospitality-guest-operations',
    title: 'AI in Hospitality',
    colors: ['#10B981', '#059669', '#047857'], // Green gradient
    description: 'Guest experience and operations'
  },
  {
    id: 'venture135-conference-transformation',
    title: 'Venture135 Conference',
    colors: ['#F59E0B', '#D97706', '#B45309'], // Orange gradient
    description: 'AI Assistant transformation'
  },
  {
    id: 'ai-powered-guest-experiences',
    title: 'AI-Powered Guest Experiences',
    colors: ['#3B82F6', '#2563EB', '#1D4ED8'], // Blue gradient
    description: 'Hospitality innovation'
  },
  {
    id: 'golden-hack-voice-api',
    title: 'Golden Hack Voice API',
    colors: ['#EF4444', '#DC2626', '#B91C1C'], // Red gradient
    description: 'Mentoring and voice technology'
  },
  {
    id: 'brand-awareness-ai-messaging',
    title: 'Brand Awareness AI Messaging',
    colors: ['#8B5CF6', '#7C3AED', '#6D28D9'], // Purple gradient
    description: 'Text messaging for hotels'
  }
];

// Create the images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'public', 'images', 'blog');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Copy the logo with different names for each blog post
const sourceLogo = path.join(__dirname, 'public', 'logo-msg2ai-224x224.jpg');

blogImageConfigs.forEach(config => {
  const targetPath = path.join(imagesDir, `${config.id}.jpg`);
  
  if (fs.existsSync(sourceLogo)) {
    fs.copyFileSync(sourceLogo, targetPath);
    console.log(`✅ Created image for: ${config.title}`);
  } else {
    console.log(`❌ Source logo not found: ${sourceLogo}`);
  }
});

console.log('\n🎨 Blog images generated successfully!');
console.log('📁 Images saved to: public/images/blog/');
console.log('\n📋 Generated images:');
blogImageConfigs.forEach(config => {
  console.log(`   • ${config.id}.jpg - ${config.title} (${config.colors[0]} gradient)`);
}); 