import { Phone } from 'lucide-react'
import type { Dictionary } from '@/lib/getDictionary'

export default function CTABanner({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="relative min-h-[40vh] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/warehouse-inventory.jpg')` }}
      />
      <div className="absolute inset-0 bg-brand-red/85" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-16 text-center text-white">
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide mb-8">
          {dict.ctaBanner.heading}
        </h2>
        <a
          href="tel:8176337500"
          className="inline-flex items-center gap-3 border-2 border-white text-white px-12 py-4 text-xl font-body font-bold tracking-wide hover:bg-white hover:text-brand-red transition-all rounded-sm"
        >
          <Phone className="w-6 h-6" />
          (817) 633-7500
        </a>
        <p className="text-white/60 mt-6 font-body text-sm tracking-wide">
          {dict.ctaBanner.address}
        </p>
      </div>
    </section>
  )
}
