import Header from '../components/Header'
import Footer from '../components/Footer'
import { Image } from 'lucide-react'

export default function ImageGenerationPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-4">
              <Image className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Image Generation</h1>
            <p className="text-xl text-gray-600">
              Coming soon! Create stunning images from text prompts using advanced AI models.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Stable Diffusion</h3>
                  <p className="text-sm text-gray-600">Powered by state-of-the-art Stable Diffusion models</p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">High Quality</h3>
                  <p className="text-sm text-gray-600">Generate high-resolution, detailed images</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Multiple Styles</h3>
                  <p className="text-sm text-gray-600">Support for various artistic styles and formats</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-medium text-gray-900 mb-2">Fast Generation</h3>
                  <p className="text-sm text-gray-600">Quick turnaround times for your creative projects</p>
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