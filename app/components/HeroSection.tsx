'use client'

import Image from 'next/image'
import Link from 'next/link'
import { DrupalHomepage } from '@/lib/types'

interface HeroSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HeroSection({ homepageContent }: HeroSectionProps) {
  const title = (homepageContent as any)?.heroTitle || (homepageContent as any)?.title || 'Welcome'
  const subtitle = (homepageContent as any)?.heroSubtitle || ''
  const description = (homepageContent as any)?.heroDescription?.processed || ''

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1920&q=80&fit=crop"
        alt="Church sanctuary"
        fill
        className="object-cover"
        priority
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/65" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <p className="text-accent-400 font-serif text-lg tracking-widest uppercase mb-6">
          Grace Community Church
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-6 leading-tight">
          {title}
        </h1>
        <div className="w-24 h-0.5 bg-accent-400 mx-auto mb-8" />
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-100 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {description && (
          <div className="text-lg text-gray-100/90 max-w-2xl mx-auto leading-relaxed mb-10" dangerouslySetInnerHTML={{ __html: description }} />
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sermons"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 text-primary-950 rounded-sm hover:bg-accent-400 transition-colors font-semibold text-lg tracking-wide"
          >
            Watch Sermons
          </Link>
          <Link
            href="/staff"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/70 text-white rounded-sm hover:bg-white/10 transition-colors font-semibold text-lg tracking-wide"
          >
            Plan Your Visit
          </Link>
        </div>
      </div>
    </section>
  )
}
