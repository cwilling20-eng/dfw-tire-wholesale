'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import type { Locale } from '@/lib/getDictionary'
import type { Dictionary } from '@/lib/getDictionary'

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ]

  function switchLocale(newLocale: Locale) {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale)
    }
    setMobileOpen(false)
    router.push(newPath)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            <Link href={`/${locale}`} className="flex-shrink-0">
              <Image
                src="/images/dfw-tire-wholesale-logo.jpg"
                alt="DFW Tire Wholesale logo"
                width={160}
                height={48}
                className="h-11 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[15px] font-medium tracking-wide uppercase transition-colors ${
                      isActive ? 'text-brand-red' : 'text-heading hover:text-brand-red'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-red" />
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="hidden lg:flex items-center gap-5">
              <div className="flex text-xs font-bold tracking-wider">
                <button
                  onClick={() => switchLocale('en')}
                  className={`px-3 py-1.5 border transition-colors ${
                    locale === 'en'
                      ? 'bg-heading text-white border-heading'
                      : 'bg-white text-muted border-border hover:border-heading'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => switchLocale('es')}
                  className={`px-3 py-1.5 border border-l-0 transition-colors ${
                    locale === 'es'
                      ? 'bg-heading text-white border-heading'
                      : 'bg-white text-muted border-border hover:border-heading'
                  }`}
                >
                  ES
                </button>
              </div>

              <a
                href="tel:8176337500"
                className="inline-flex items-center gap-2 bg-brand-red text-white px-5 py-2.5 text-sm font-bold tracking-wide hover:bg-red-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (817) 633-7500
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-heading" />
              ) : (
                <Menu className="w-6 h-6 text-heading" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — rendered OUTSIDE nav, conditional rendering, inline styles */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 16px',
              height: '72px',
              flexShrink: 0,
            }}
          >
            <Link href={`/${locale}`} onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/dfw-tire-wholesale-logo.jpg"
                alt="DFW Tire Wholesale logo"
                width={140}
                height={42}
                style={{ height: '40px', width: 'auto' }}
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              style={{ padding: '8px' }}
              aria-label="Close menu"
            >
              <X style={{ width: '24px', height: '24px', color: '#1a1a1a' }} />
            </button>
          </div>

          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 32px',
              gap: '8px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  color: pathname === link.href ? '#CC0000' : '#1a1a1a',
                  textDecoration: 'none',
                  padding: '12px 0',
                  letterSpacing: '-0.02em',
                }}
              >
                {link.label}
              </Link>
            ))}

            <div style={{ display: 'flex', gap: '0px', marginTop: '24px' }}>
              <button
                onClick={() => switchLocale('en')}
                style={{
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  border: '1px solid #1a1a1a',
                  backgroundColor: locale === 'en' ? '#1a1a1a' : '#ffffff',
                  color: locale === 'en' ? '#ffffff' : '#6c757d',
                }}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('es')}
                style={{
                  padding: '10px 20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  border: '1px solid #1a1a1a',
                  borderLeft: 'none',
                  backgroundColor: locale === 'es' ? '#1a1a1a' : '#ffffff',
                  color: locale === 'es' ? '#ffffff' : '#6c757d',
                }}
              >
                ES
              </button>
            </div>
          </div>

          <div style={{ padding: '24px 32px', flexShrink: 0 }}>
            <a
              href="tel:8176337500"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                backgroundColor: '#CC0000',
                color: '#ffffff',
                padding: '18px',
                fontSize: '18px',
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              <Phone style={{ width: '20px', height: '20px' }} />
              (817) 633-7500
            </a>
          </div>
        </div>
      )}
    </>
  )
}
