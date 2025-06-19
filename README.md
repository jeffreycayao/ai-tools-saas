# AI Tools SaaS Platform

A comprehensive AI-powered SaaS platform built with Next.js 14, featuring multiple AI tools including chat, image generation, voice transcription, and social features.

## 🚀 Features

### AI Chat
- **Multiple AI Models**: Support for OpenAI's GPT-4 and Anthropic's Claude
- **Real-time Streaming**: Live response generation with typing indicators
- **Chat History**: Persistent conversation storage
- **Markdown Support**: Properly formatted responses with code blocks

### Image Generation
- **Stable Diffusion**: High-quality image generation from text prompts
- **Multiple Styles**: Support for various artistic styles and formats
- **Fast Processing**: Quick turnaround times powered by Replicate

### Voice Notes
- **Real-time Transcription**: Powered by Deepgram's speech recognition
- **High Accuracy**: Industry-leading voice-to-text conversion
- **Cloud Storage**: Firebase integration for cross-device sync
- **Multi-language Support**: Multiple languages and accents

### Social Platform
- **User Profiles**: Customizable user profiles with Firebase Auth
- **Content Sharing**: Post and share content with the community
- **Real-time Features**: Live interactions and updates
- **Community Building**: Create and join interest-based communities

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Authentication**: Firebase Auth with Google OAuth
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **AI Integrations**:
  - OpenAI (GPT-4) via Vercel AI SDK
  - Anthropic (Claude) via Vercel AI SDK
  - Replicate (Stable Diffusion)
  - Deepgram (Speech Recognition)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   │   ├── anthropic/     # Anthropic AI integration
│   │   ├── deepgram/      # Speech recognition
│   │   ├── openai/        # OpenAI integration
│   │   └── replicate/     # Image generation
│   ├── components/        # React components
│   │   └── ui/           # Reusable UI components
│   ├── chat/             # AI Chat feature
│   ├── image-generation/ # Image generation feature
│   ├── voice-notes/      # Voice transcription feature
│   ├── social/           # Social platform feature
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Landing page
└── lib/                  # Utilities and configurations
    ├── contexts/         # React contexts (Auth, Deepgram)
    ├── firebase/         # Firebase configuration
    └── hooks/            # Custom React hooks
```

## 🚦 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-tools-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```env
   # Firebase
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   # ... other Firebase config

   # AI APIs
   OPENAI_API_KEY=your_openai_api_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   REPLICATE_API_TOKEN=your_replicate_token
   DEEPGRAM_API_KEY=your_deepgram_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Features
1. Create feature pages in `src/app/[feature-name]/`
2. Add components in `src/app/components/`
3. Update navigation in `Header.tsx`
4. Add API routes if needed in `src/app/api/`

## 🎨 Design System

The project uses a modern design system with:
- **Color Palette**: Custom HSL color variables
- **Typography**: Inter font family
- **Components**: Reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 🔐 Authentication

Firebase Authentication is pre-configured with:
- Google OAuth sign-in
- User context management
- Protected routes capability
- Session persistence

## 📱 Deployment

The project is optimized for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Firebase Hosting**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- AI integrations powered by [Vercel AI SDK](https://sdk.vercel.ai/)
- Authentication by [Firebase](https://firebase.google.com/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide React](https://lucide.dev/)