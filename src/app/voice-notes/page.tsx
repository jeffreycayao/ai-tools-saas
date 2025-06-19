import Header from '../components/Header'
import Footer from '../components/Footer'
import { Mic } from 'lucide-react'

export default function VoiceNotesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full mb-4">
              <Mic className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Voice Notes</h1>
            <p className="text-xl text-gray-600">
              Coming soon! Transform your voice into text with real-time transcription.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-orange-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Real-time Transcription</h3>
                  <p className="text-sm text-gray-600">Powered by Deepgram's advanced speech recognition</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">High Accuracy</h3>
                  <p className="text-sm text-gray-600">Industry-leading accuracy for voice-to-text conversion</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Cloud Storage</h3>
                  <p className="text-sm text-gray-600">Save and sync your notes across all devices</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Multi-language Support</h3>
                  <p className="text-sm text-gray-600">Support for multiple languages and accents</p>
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