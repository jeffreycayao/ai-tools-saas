import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  gradient: string
}

export default function FeatureCard({ title, description, icon: Icon, href, gradient }: FeatureCardProps) {
  return (
    <Link href={href} className="group">
      <div className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${gradient}`}>
        <div className="relative z-10">
          <div className="mb-4">
            <Icon className="h-12 w-12 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-white/90 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  )
} 