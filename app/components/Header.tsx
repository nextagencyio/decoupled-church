'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Sermons', href: '/sermons' },
  { name: 'Ministries', href: '/ministries' },
  { name: 'Events', href: '/events' },
  { name: 'Staffs', href: '/staff' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className="bg-[#faf8f5] border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand name centered at top */}
        <div className="flex justify-center pt-6 pb-3">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
            <span className="text-3xl md:text-4xl font-serif font-semibold text-primary-900 tracking-wide">
              Grace Community Church
            </span>
          </Link>
        </div>

        {/* Navigation centered below */}
        <nav className="hidden lg:flex items-center justify-center space-x-8 pb-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'text-sm tracking-wide uppercase transition-colors pb-1',
                activeTab === item.name
                  ? 'text-primary-700 border-b-2 border-primary-600 font-medium'
                  : 'text-gray-600 hover:text-primary-700'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/staff"
            className="text-sm tracking-wide uppercase px-5 py-2 border-2 border-primary-600 text-primary-700 rounded-full hover:bg-primary-600 hover:text-white transition-colors font-medium"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex justify-end pb-4 -mt-8">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary-700 hover:bg-primary-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-primary-100 py-4">
            <nav className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'px-4 py-3 text-sm tracking-wide uppercase transition-colors',
                    activeTab === item.name
                      ? 'text-primary-700 bg-primary-50 border-l-4 border-primary-600 font-medium'
                      : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/staff"
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 text-center text-sm tracking-wide uppercase px-5 py-3 border-2 border-primary-600 text-primary-700 rounded-full hover:bg-primary-600 hover:text-white transition-colors font-medium"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
