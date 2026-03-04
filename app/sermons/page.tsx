import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_SERMONS } from '@/lib/queries'
import { SermonsData } from '@/lib/types'
import Header from '../components/Header'
import SermonCard from '../components/SermonCard'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Sermons | Church',
  description: 'Browse our sermons.',
}

async function getSermons() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<SermonsData>({
      query: GET_SERMONS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeSermons?.nodes || []
  } catch (error) {
    console.error('Error fetching sermons:', error)
    return []
  }
}

export default async function SermonsPage() {
  const items = await getSermons()

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <section className="bg-[#faf8f5] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-6">
              Sermons
            </h1>
            <div className="w-24 h-0.5 bg-primary-600 mx-auto mb-6" />
            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto">
              Explore our sermons.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-serif text-gray-600 mb-2">No Sermons Yet</h2>
              <p className="text-gray-500">
                Sermons will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <SermonCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
