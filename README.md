# 🎯 PromptCraft - AI Prompt Engineering Made Simple

> **Transform your AI interactions with professionally crafted prompts and custom ChatGPT bots**

PromptCraft is a cutting-edge SaaS platform specializing in AI prompt engineering. We provide tools and resources to help businesses, creators, and developers maximize their AI productivity through expertly designed prompts and custom bot solutions.

![PromptCraft Banner](https://via.placeholder.com/1200x400/6366f1/ffffff?text=PromptCraft+-+AI+Prompt+Engineering+Made+Simple)

## 🚀 Our Products

### 1. 🤖 Custom ChatGPT Bots
Create specialized AI assistants tailored to your specific needs and industry.

**Key Features:**
- Industry-specific bot templates
- Custom training on your data
- Advanced conversation flows
- Integration with existing workflows
- Multi-platform deployment

**Perfect For:** Customer support, content creation, technical assistance, educational tools

### 2. ⚡ ChatGPT Prompt Generator
Generate high-converting prompts for any use case with our AI-powered prompt builder.

**Key Features:**
- 50+ prompt templates
- Industry-specific optimization
- A/B testing capabilities
- Performance analytics
- Bulk prompt generation

**Perfect For:** Marketers, content creators, developers, business analysts

### 3. 📚 Creative Prompts Library
Access thousands of professional prompts across 20+ categories and industries.

**Key Features:**
- 10,000+ curated prompts
- Advanced search and filtering
- Category-based organization
- Regular updates and additions
- Community-driven contributions

**Perfect For:** Writers, marketers, designers, entrepreneurs, students

### 4. 🎬 Google Veo 3 PromptGen
Specialized prompts for Google's Veo 3 video generation model.

**Key Features:**
- Veo 3 optimized prompts
- Video style templates
- Scene composition guides
- Technical parameter optimization
- Professional cinematography prompts

**Perfect For:** Video creators, filmmakers, content marketers, social media managers

## ✨ Key Benefits

### 🎯 **Increased Productivity**
- **10x faster** prompt creation with our templates
- **Reduced trial and error** with proven formulas
- **Consistent results** across all AI interactions

### 💡 **Professional Quality**
- **Expert-crafted** prompts by AI specialists
- **Industry-tested** templates and patterns
- **Continuous optimization** based on performance data

### 🔧 **Easy Integration**
- **Copy-paste ready** prompts for immediate use
- **API access** for automation workflows
- **Multi-platform compatibility** with all major AI tools

### 📈 **Better Results**
- **Higher conversion rates** with optimized prompts
- **More accurate outputs** from AI models
- **Improved user engagement** with better conversations

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15.3.4** - React framework with App Router
- **React 19.1.0** - Modern React with concurrent features
- **TypeScript 5.8.3** - Type-safe development
- **Tailwind CSS 3.4.0** - Utility-first styling

### **Backend & APIs**
- **Vercel AI SDK** - Streaming AI responses
- **OpenAI API** - GPT-4 integration
- **Anthropic API** - Claude integration
- **Replicate** - Image generation models
- **Deepgram** - Real-time speech recognition

### **Database & Auth**
- **Firebase Firestore** - NoSQL database
- **Firebase Auth** - User authentication
- **Firebase Storage** - File storage

### **Development & Deployment**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vercel** - Deployment and hosting
- **Git** - Version control

## 📁 Project Architecture

```
src/
├── app/                      # Next.js App Router
│   ├── api/                 # API Routes
│   │   ├── openai/         # OpenAI integration
│   │   ├── anthropic/      # Anthropic integration
│   │   ├── replicate/      # Image generation
│   │   └── deepgram/       # Speech recognition
│   ├── components/         # React Components
│   │   ├── ui/            # Reusable UI components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Footer.tsx     # Site footer
│   │   └── FeatureCard.tsx # Feature display cards
│   ├── custom-bots/       # Custom ChatGPT Bots page
│   ├── prompt-generator/  # Prompt Generator page
│   ├── prompts-library/   # Prompts Library page
│   ├── veo-prompts/       # Veo 3 PromptGen page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
└── lib/                   # Utilities & Configuration
    ├── contexts/          # React contexts
    ├── firebase/          # Firebase setup
    └── hooks/             # Custom React hooks
```

## 🚦 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Firebase project (for auth and database)
- API keys for AI services

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/promptcraft.git
   cd promptcraft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # AI API Keys
   OPENAI_API_KEY=sk-your_openai_key
   ANTHROPIC_API_KEY=your_anthropic_key
   REPLICATE_API_TOKEN=your_replicate_token
   DEEPGRAM_API_KEY=your_deepgram_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### Adding New Features
1. Create new pages in `src/app/[feature-name]/`
2. Add components in `src/app/components/`
3. Update navigation in `Header.tsx`
4. Create API routes in `src/app/api/` if needed
5. Update this README with new features

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary: 261 78% 62%      /* #6366f1 */
--primary-foreground: 0 0% 98%

/* Secondary Colors */
--secondary: 220 14% 96%
--secondary-foreground: 220 13% 46%

/* Accent Colors */
--accent: 220 14% 96%
--accent-foreground: 220 13% 46%
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700
- **Headings**: Custom scale with responsive sizing

### Components
- **Buttons**: Multiple variants with hover states
- **Cards**: Consistent shadow and border radius
- **Forms**: Accessible with proper validation
- **Navigation**: Responsive with mobile menu

## 🔐 Authentication & Security

### Firebase Authentication
- **Google OAuth** - One-click sign-in
- **Email/Password** - Traditional authentication
- **Session Management** - Persistent login state
- **Protected Routes** - Authenticated-only pages

### Security Features
- **API Key Protection** - Server-side only
- **CORS Configuration** - Restricted origins
- **Input Validation** - Sanitized user inputs
- **Error Handling** - Graceful error management

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables
Set these in your deployment platform:
- All Firebase configuration variables
- AI API keys (OpenAI, Anthropic, etc.)
- Any custom environment variables

### Build Optimization
- **Next.js optimization** - Automatic code splitting
- **Image optimization** - Built-in Next.js image optimization
- **Font optimization** - Google Fonts with display swap
- **Bundle analysis** - Use `npm run analyze` to check bundle size

## 📊 Performance & Analytics

### Core Web Vitals
- **LCP**: < 2.5s (Large Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

### Monitoring
- **Vercel Analytics** - Performance monitoring
- **Error Tracking** - Built-in error boundaries
- **User Analytics** - Firebase Analytics integration

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run type-check
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Create a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Add JSDoc comments for complex functions
- Update tests for new features
- Update documentation

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Support & Community

### Documentation
- **API Documentation**: [docs.promptcraft.com](https://docs.promptcraft.com)
- **Tutorial Videos**: [YouTube Channel](https://youtube.com/@promptcraft)
- **Blog**: [blog.promptcraft.com](https://blog.promptcraft.com)

### Community
- **Discord Server**: [Join our community](https://discord.gg/promptcraft)
- **GitHub Discussions**: [Ask questions](https://github.com/promptcraft/discussions)
- **Twitter**: [@PromptCraftAI](https://twitter.com/PromptCraftAI)

### Support
- **Email**: support@promptcraft.com
- **Documentation**: Comprehensive guides and tutorials
- **Video Tutorials**: Step-by-step walkthroughs

---

<div align="center">

**Built with ❤️ by the PromptCraft Team**

[Website](https://promptcraft.com) • [Documentation](https://docs.promptcraft.com) • [Support](mailto:support@promptcraft.com)

</div>