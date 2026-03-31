import { getDictionary, type Locale } from '@/lib/getDictionary'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, Navigation } from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)
  return {
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
    openGraph: {
      title: dict.meta.contact.title,
      description: dict.meta.contact.description,
      type: 'website',
      images: ['/images/dfw-tire-wholesale-logo.jpg'],
    },
  }
}

const dayKeys = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/storefront.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-10 md:pb-14 pt-32">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide text-white">
            {dict.contactPage.heading}
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-16">
            {/* Left: Contact Info */}
            <div>
              <Image
                src="/images/dfw-tire-wholesale-logo.jpg"
                alt="DFW Tire Wholesale logo"
                width={200}
                height={60}
                quality={90}
                className="h-14 w-auto mb-10"
              />

              {/* Phone — HUGE and prominent */}
              <a
                href="tel:8176337500"
                className="block font-heading text-5xl md:text-6xl text-brand-red hover:text-red-800 transition-colors tracking-wide mb-6"
              >
                {dict.contactPage.phone}
              </a>

              {/* Address */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=3201+Dalworth+St+Arlington+TX+76011"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-body hover:text-heading transition-colors text-lg block mb-10"
              >
                {dict.contactPage.address}
              </a>

              {/* Hours */}
              <div>
                <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-5">
                  {dict.contactPage.hoursHeading}
                </p>
                <div className="space-y-0">
                  {dayKeys.map((day, i) => (
                    <div
                      key={day}
                      className={`flex justify-between items-baseline font-body text-[15px] py-3 border-b border-border ${i % 2 === 0 ? '' : 'bg-bg-alt/50 -mx-3 px-3'}`}
                    >
                      <span className="font-semibold text-heading">
                        {dict.days[day]}
                      </span>
                      <span className="text-body">
                        {dict.contactPage.hours[day]}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="font-body text-muted text-sm italic mt-4">
                  {dict.contactPage.note}
                </p>
              </div>
            </div>

            {/* Right: Map — taller */}
            <div className="overflow-hidden h-[400px] lg:h-auto min-h-[500px] rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.789!2d-97.1207!3d32.7298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQzJzQ3LjMiTiA5N8KwMDcnMTQuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DFW Tire Wholesale location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-heading py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide mb-4">
            {locale === 'es' ? '¿Listo Para Rodar?' : 'Ready To Roll?'}
          </h2>
          <p className="font-body text-white/60 text-lg mb-8">
            {dict.contactPage.bottomCta}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8176337500"
              className="inline-flex items-center gap-2 bg-brand-red text-white px-10 py-4 font-body text-lg font-bold tracking-wide hover:bg-red-800 transition-colors rounded-sm"
            >
              <Phone className="w-5 h-5" />
              (817) 633-7500
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3201+Dalworth+St+Arlington+TX+76011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-10 py-4 font-body text-lg font-bold tracking-wide hover:bg-white hover:text-heading transition-all rounded-sm"
            >
              <Navigation className="w-5 h-5" />
              {locale === 'es' ? 'Cómo Llegar' : 'Get Directions'}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
