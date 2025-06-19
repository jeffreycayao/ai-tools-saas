import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import { AuthProvider } from '@/lib/contexts/AuthContext'
import { DeepgramContextProvider } from '@/lib/contexts/DeepgramContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Tools SaaS - Powerful AI Tools for Everyone',
  description: 'Access cutting-edge AI tools including chat, image generation, voice transcription, and social features. Built for modern teams and individuals.',
  keywords: 'AI tools, SaaS, artificial intelligence, chat, image generation, voice transcription',
  authors: [{ name: 'AI Tools SaaS' }],
  creator: 'AI Tools SaaS',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'AI Tools SaaS - Powerful AI Tools for Everyone',
    description: 'Access cutting-edge AI tools including chat, image generation, voice transcription, and social features.',
    siteName: 'AI Tools SaaS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools SaaS - Powerful AI Tools for Everyone',
    description: 'Access cutting-edge AI tools including chat, image generation, voice transcription, and social features.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <DeepgramContextProvider>
            {children}
          </DeepgramContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
