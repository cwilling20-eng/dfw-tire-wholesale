import Image from 'next/image'
import { Phone } from 'lucide-react'
import type { Dictionary } from '@/lib/getDictionary'

export default function CTABanner({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image
        src="/images/warehouse-inventory.jpg"
        alt="DFW Tire Wholesale warehouse inventory"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-brand-red/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-8">
          {dict.ctaBanner.heading}
        </h2>
        <a
          href="tel:8176337500"
          className="inline-flex items-center gap-3 bg-white text-brand-red px-10 py-5 text-xl font-bold hover:bg-heading hover:text-white transition-colors"
        >
          <Phone className="w-6 h-6" />
          (817) 633-7500
        </a>
        <p className="text-white/70 mt-6 text-sm tracking-wide">
          {dict.ctaBanner.address}
        </p>
      </div>
    </section>
  )
}
