import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">AI Tools</div>
            <p className="text-gray-600 max-w-md">
              Powerful AI tools designed to enhance your productivity. Chat with AI, generate images, 
              transcribe voice notes, and connect with others.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/chat" className="text-gray-600 hover:text-primary transition-colors">
                  AI Chat
                </Link>
              </li>
              <li>
                <Link href="/image-generation" className="text-gray-600 hover:text-primary transition-colors">
                  Image Generation
                </Link>
              </li>
              <li>
                <Link href="/voice-notes" className="text-gray-600 hover:text-primary transition-colors">
                  Voice Notes
                </Link>
              </li>
              <li>
                <Link href="/social" className="text-gray-600 hover:text-primary transition-colors">
                  Social Platform
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Tools SaaS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 