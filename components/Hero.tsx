import Image from 'next/image'
import { Phone, Navigation, Star } from 'lucide-react'
import type { Dictionary } from '@/lib/getDictionary'

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-end overflow-hidden">
      <Image
        src="/images/storefront.jpg"
        alt="DFW Tire Wholesale storefront with service bays and tire inventory"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 md:pb-24 pt-32">
        <div className="max-w-2xl">
          {/* Small rating above headline */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-3.5 h-3.5 fill-yellow-400/50 text-yellow-400" />
            </div>
            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
              {dict.hero.googleRating}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            {dict.hero.headline}
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg">
            {dict.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:8176337500"
              className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 text-lg font-bold hover:bg-red-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {dict.hero.callNow}
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3201+Dalworth+St+Arlington+TX+76011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white px-8 py-4 text-lg font-bold hover:bg-white hover:text-heading transition-all"
            >
              <Navigation className="w-5 h-5" />
              {dict.hero.getDirections}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
