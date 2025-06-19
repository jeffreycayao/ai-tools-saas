import Header from '../components/Header'
import Footer from '../components/Footer'
import { MessageSquare } from 'lucide-react'

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
              <MessageSquare className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Chat</h1>
            <p className="text-xl text-gray-600">
              Coming soon! Chat with powerful AI models including GPT-4 and Claude.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Multiple AI Models</h3>
                  <p className="text-sm text-gray-600">Choose between OpenAI's GPT-4 and Anthropic's Claude</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Real-time Streaming</h3>
                  <p className="text-sm text-gray-600">See responses as they're generated in real-time</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Chat History</h3>
                  <p className="text-sm text-gray-600">Keep track of all your conversations</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Markdown Support</h3>
                  <p className="text-sm text-gray-600">Properly formatted responses with code blocks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 