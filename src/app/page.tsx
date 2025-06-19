import { MessageSquare, Image, Mic, Users } from 'lucide-react'
import Header from './components/Header'
import Footer from './components/Footer'
import FeatureCard from './components/FeatureCard'

export default function Home() {
  const features = [
    {
      title: "AI Chat",
      description: "Engage with powerful AI models including GPT-4 and Claude. Get instant responses, creative assistance, and intelligent conversations.",
      icon: MessageSquare,
      href: "/chat",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "Image Generation",
      description: "Create stunning images from text prompts using advanced AI models. Perfect for creative projects and visual content.",
      icon: Image,
      href: "/image-generation",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Voice Notes",
      description: "Transform your voice into text with real-time transcription. Capture ideas on the go with high-accuracy speech recognition.",
      icon: Mic,
      href: "/voice-notes",
      gradient: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      title: "Social Platform",
      description: "Connect with others, share content, and build communities. A modern social experience with Firebase integration.",
      icon: Users,
      href: "/social",
      gradient: "bg-gradient-to-br from-pink-500 to-purple-600"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Tools
              </span>{" "}
              for Everyone
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlock the power of artificial intelligence with our comprehensive suite of AI tools. 
              Chat with AI, generate images, transcribe voice notes, and connect with others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Tools at Your Fingertips
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our collection of AI-powered tools designed to enhance your productivity and creativity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  href={feature.href}
                  gradient={feature.gradient}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">1M+</div>
                <div className="text-gray-600">AI Interactions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who are already leveraging the power of AI in their daily workflows.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Using AI Tools Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
