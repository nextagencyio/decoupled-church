'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const stats = (homepageContent as any)?.stats || (homepageContent as any)?.statsItems || []
  if (!stats || stats.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center divide-x divide-gray-200">
          {stats.map((stat: any, i: number) => (
            <div key={stat.id || i} className="px-8 md:px-12 py-4 text-center">
              <div className="text-3xl md:text-4xl font-serif font-semibold text-accent-600">
                {stat.value || stat.statValue}
              </div>
              <div className="text-sm text-gray-500 mt-1 uppercase tracking-wider">
                {stat.label || stat.statLabel || stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
