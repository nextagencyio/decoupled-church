import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_SERMON_BY_PATH } from '@/lib/queries'
import { DrupalSermon } from '@/lib/types'
import Header from '../../components/Header'
import ResponsiveImage from '../../components/ResponsiveImage'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 300

interface PageProps {
  params: Promise<{ slug: string[] }>
}

interface SermonByPathData {
  route: {
    entity: DrupalSermon
  } | null
}

async function getSermon(path: string): Promise<DrupalSermon | null> {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<SermonByPathData>({
      query: GET_SERMON_BY_PATH,
      variables: { path },
      fetchPolicy: 'cache-first',
    })
    return data?.route?.entity || null
  } catch (error) {
    console.error('Error fetching sermon:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/sermons/${slug.join('/')}`
  const item = await getSermon(path)

  if (!item) {
    return { title: 'Sermon Not Found | Church' }
  }

  return {
    title: `${item.title} | Church`,
    description: ((item as any).body?.processed ? (item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 160) : '') || `Learn more about ${item.title}.`,
  }
}

export default async function SermonDetailPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/sermons/${slug.join('/')}`
  const item = await getSermon(path)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <section className="bg-[#faf8f5] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/sermons"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sermons
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-gray-900">
            {item.title}
          </h1>
          <div className="w-24 h-0.5 bg-primary-600 mt-6" />
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {(item as any).image?.url && (
                <div className="relative h-64 md:h-96 overflow-hidden shadow-sm mb-8">
                  <ResponsiveImage
                    src={(item as any).image.url}
                    alt={(item as any).image.alt || item.title}
                    fill
                    className="object-cover"
                    variations={(item as any).image.variations}
                    targetWidth={800}
                  />
                </div>
              )}

              {(item as any).body?.processed && (
                <div className="bg-white border-l-4 border-primary-600 shadow-sm p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: (item as any).body.processed }}
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border-l-4 border-accent-500 shadow-sm p-6 sticky top-8">
                <h3 className="text-lg font-serif font-semibold text-gray-900 mb-4">Details</h3>
                <dl className="space-y-4">
                  {(item as any).speaker && (
                    <div>
                      <dt className="text-sm text-gray-500 uppercase tracking-wider">Speaker</dt>
                      <dd className="font-medium text-gray-900 mt-1">{(item as any).speaker}</dd>
                    </div>
                  )}
                  {(item as any).videoUrl && (
                    <div>
                      <dt className="text-sm text-gray-500 uppercase tracking-wider">Video URL</dt>
                      <dd className="font-medium text-gray-900 mt-1">{(item as any).videoUrl}</dd>
                    </div>
                  )}
                  {(item as any).audioUrl && (
                    <div>
                      <dt className="text-sm text-gray-500 uppercase tracking-wider">Audio URL</dt>
                      <dd className="font-medium text-gray-900 mt-1">{(item as any).audioUrl}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 border-2 border-primary-600 text-primary-700 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
