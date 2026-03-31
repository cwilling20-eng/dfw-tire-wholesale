'use client'

import { Phone, Navigation, ChevronDown } from 'lucide-react'
import type { Dictionary } from '@/lib/getDictionary'

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* CSS background-image for maximum sharpness */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/storefront.jpg')` }}
      />
      {/* Gradient overlay — transparent top, heavy bottom-left */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          {/* Google Rating Badge */}
          <div className="inline-flex items-center gap-2.5 bg-brand-red px-5 py-2 rounded-sm mb-8">
            <span className="text-gold text-sm tracking-wide">★★★★★</span>
            <span className="text-white font-body text-sm font-semibold tracking-wide">
              {dict.hero.googleRating}
            </span>
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase text-white tracking-wide leading-[0.95] mb-6">
            {dict.hero.headline}
          </h1>

          <p className="font-body text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-lg">
            {dict.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8176337500"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-10 py-4 text-lg font-body font-bold tracking-wide hover:bg-red-800 transition-colors rounded-sm"
            >
              <Phone className="w-5 h-5" />
              {dict.hero.callNow}
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3201+Dalworth+St+Arlington+TX+76011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-heading px-10 py-4 text-lg font-body font-bold tracking-wide hover:bg-gray-100 transition-colors rounded-sm"
            >
              <Navigation className="w-5 h-5" />
              {dict.hero.getDirections}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/50 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  )
}
