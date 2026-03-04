import Link from 'next/link'
import { DrupalSermon } from '@/lib/types'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

interface SermonCardProps {
  item: DrupalSermon
}

export default function SermonCard({ item }: SermonCardProps) {
  return (
    <Link
      href={item.path || '#'}
      className="group bg-white border-l-4 border-primary-600 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {(item as any).image?.url && (
        <div className="relative h-48">
          <ResponsiveImage
            src={(item as any).image.url}
            alt={(item as any).image.alt || item.title}
            fill
            className="object-cover"
            variations={(item as any).image.variations}
            targetWidth={400}
          />
        </div>
      )}

      <div className="p-6">
        {(item as any).speaker && (
          <p className="text-sm text-primary-600 font-medium mb-2 uppercase tracking-wider">{(item as any).speaker}</p>
        )}
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
          {item.title}
        </h3>

        {(item as any).body?.processed && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
            {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
          </p>
        )}

        <div className="flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
          Read more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
