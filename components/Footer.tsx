import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import type { Dictionary } from '@/lib/getDictionary'

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-heading text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/images/dfw-tire-wholesale-logo.jpg"
              alt="DFW Tire Wholesale logo"
              width={180}
              height={54}
              className="h-12 w-auto mb-4 bg-white p-1"
            />
            <p className="text-white/40 text-sm tracking-wide">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3201+Dalworth+St+Arlington+TX+76011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-white/60 hover:text-white transition-colors text-sm"
            >
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              3201 Dalworth St<br />Arlington, TX 76011
            </a>
            <a
              href="tel:8176337500"
              className="flex items-center gap-3 text-brand-red hover:text-red-400 transition-colors font-bold text-sm"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              (817) 633-7500
            </a>
          </div>

          {/* Hours */}
          <div className="text-sm text-white/50 space-y-1.5">
            <p className="text-white/70 font-semibold mb-2">Hours</p>
            <p>Mon–Fri: 8 AM – 6 PM</p>
            <p>Sat: 8 AM – 4 PM</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-white/30 text-xs tracking-wide">
            {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
