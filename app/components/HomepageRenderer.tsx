'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Heart, BookOpen, Users, Music, Calendar, HandMetal, MapPin, Phone, Mail, Clock } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const communityLife = [
  { icon: BookOpen, title: 'Sunday Worship', description: 'Join us for meaningful worship and insightful teaching every Sunday morning' },
  { icon: Users, title: 'Small Groups', description: 'Connect in intimate gatherings for fellowship, study, and mutual support' },
  { icon: Heart, title: 'Community Outreach', description: 'Serving our neighbors through food drives, mentoring, and local partnerships' },
  { icon: Music, title: 'Worship Arts', description: 'Express your faith through choir, instrumental ensembles, and creative arts' },
  { icon: Calendar, title: 'Events & Retreats', description: 'Seasonal gatherings, retreats, and special celebrations throughout the year' },
  { icon: HandMetal, title: 'Youth Ministry', description: 'Engaging programs for teens to grow in faith, friendships, and service' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?w=600&q=80&fit=crop', alt: 'Church worship service' },
  { src: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80&fit=crop', alt: 'Community fellowship' },
  { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80&fit=crop', alt: 'Church choir singing' },
  { src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&q=80&fit=crop', alt: 'Bible study group' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Community Life Section */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Community Life
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A vibrant community where faith, fellowship, and service come together
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityLife.map((item) => {
              const IconComponent = item.icon
              return (
                <div
                  key={item.title}
                  className="bg-white border-l-4 border-primary-400 p-8 group hover:shadow-md transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-5 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Life at Grace
            </h2>
            <div className="w-16 h-0.5 bg-accent-500 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Moments of worship, fellowship, and service in our community
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Times */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2">Worship With Us</h2>
            <div className="w-16 h-0.5 bg-accent-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <Clock className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Sunday Worship</h3>
              <p className="text-primary-200 text-sm">8:30am &amp; 10:30am</p>
            </div>
            <div>
              <BookOpen className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Wednesday Bible Study</h3>
              <p className="text-primary-200 text-sm">6:30pm</p>
            </div>
            <div>
              <Music className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Youth Service</h3>
              <p className="text-primary-200 text-sm">Sundays at 5:00pm</p>
            </div>
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Rich Footer */}
      <footer className="bg-[#f5f0eb] border-t border-primary-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-4">Grace Community Church</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A welcoming community rooted in faith, growing in love, and committed to serving one another and our neighbors.
              </p>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span className="text-sm">742 Chapel Hill Road, Portland, OR 97205</span>
              </div>
            </div>

            {/* Explore Column */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/sermons" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Sermons</Link></li>
                <li><Link href="/ministries" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Ministries</Link></li>
                <li><Link href="/events" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Events</Link></li>
                <li><Link href="/staff" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Our Staff</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">About Us</Link></li>
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Get Involved</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>New Here?</li>
                <li>Small Groups</li>
                <li>Volunteer Opportunities</li>
                <li>Prayer Requests</li>
                <li>Give Online</li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">(503) 555-0178</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">hello@gracecommunity.org</span>
                </li>
                <li className="flex items-start space-x-2 mt-4">
                  <Clock className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm">
                    <p>Sunday: 8:30am &amp; 10:30am</p>
                    <p>Wednesday: 6:30pm</p>
                    <p>Office: Mon-Fri 9am-4pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Grace Community Church. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">
              Rooted in faith, growing in community
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
