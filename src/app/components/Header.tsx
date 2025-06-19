"use client";

import Link from 'next/link'
import { useAuth } from '@/lib/hooks/useAuth'
import { User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import SignInWithGoogle from './SignInWithGoogle'

export default function Header() {
  const { user, signOut, loading } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">AI Tools</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/chat" className="text-gray-700 hover:text-primary transition-colors">
              Chat
            </Link>
            <Link href="/image-generation" className="text-gray-700 hover:text-primary transition-colors">
              Images
            </Link>
            <Link href="/voice-notes" className="text-gray-700 hover:text-primary transition-colors">
              Voice Notes
            </Link>
            <Link href="/social" className="text-gray-700 hover:text-primary transition-colors">
              Social
            </Link>
          </nav>

          {/* User Authentication */}
          <div className="hidden md:flex items-center space-x-4">
            {loading ? (
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            ) : user ? (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <img
                    src={user.photoURL || ''}
                    alt={user.displayName || 'User'}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {user.displayName}
                  </span>
                </div>
                <button
                  onClick={signOut}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <SignInWithGoogle />
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              href="/chat"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Chat
            </Link>
            <Link
              href="/image-generation"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Images
            </Link>
            <Link
              href="/voice-notes"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Voice Notes
            </Link>
            <Link
              href="/social"
              className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Social
            </Link>
            <div className="px-3 py-2">
              {loading ? (
                <div className="animate-pulse bg-gray-200 h-8 w-full rounded"></div>
              ) : user ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={user.photoURL || ''}
                      alt={user.displayName || 'User'}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {user.displayName}
                    </span>
                  </div>
                  <button
                    onClick={signOut}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              ) : (
                <SignInWithGoogle />
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 