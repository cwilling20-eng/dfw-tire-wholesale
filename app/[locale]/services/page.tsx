import { getDictionary, type Locale } from '@/lib/getDictionary'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone } from 'lucide-react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)
  return {
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    openGraph: {
      title: dict.meta.services.title,
      description: dict.meta.services.description,
      type: 'website',
      images: ['/images/dfw-tire-wholesale-logo.jpg'],
    },
  }
}

function ServiceRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-5 border-b border-border last:border-b-0 group">
      <h3 className="text-lg font-bold text-heading group-hover:text-brand-red transition-colors">
        {title}
      </h3>
      <p className="text-body leading-relaxed">{description}</p>
    </div>
  )
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)

  const items = dict.servicesPage.items

  const tireServices = [items[0], items[1], items[2], items[3], items[7]]
  const autoServices = [items[4], items[5], items[6]]
  const commercialServices = [items[8]]

  const tireSectionLabel = locale === 'es' ? 'Llantas' : 'Tires'
  const autoSectionLabel = locale === 'es' ? 'Automotriz' : 'Automotive'
  const commercialSectionLabel = locale === 'es' ? 'Comercial' : 'Commercial'

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="/images/warehouse-racks.jpg"
          alt="Warehouse tire racks showing large inventory"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 md:pb-16 pt-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3">
            {dict.servicesPage.heading}
          </h1>
          <p className="text-lg text-white/70 max-w-xl">
            {dict.servicesPage.subheading}
          </p>
        </div>
      </section>

      {/* Tire Services + Photo Split */}
      <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                  {tireSectionLabel}
                </span>
                <div className="flex-1 h-px bg-brand-red/20" />
              </div>

              {/* Featured: Used Tires gets bigger treatment */}
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-heading mb-3">
                  {items[0].title}
                </h3>
                <p className="text-body leading-relaxed text-lg max-w-2xl">
                  {items[0].description}
                </p>
              </div>

              {/* Remaining tire services */}
              {tireServices.slice(1).map((item, i) => (
                <ServiceRow key={i} title={item.title} description={item.description} />
              ))}
            </div>

            {/* Large tire quality photo */}
            <div className="relative h-[400px] lg:h-auto min-h-[300px] overflow-hidden">
              <Image
                src="/images/tire-quality-closeup.jpg"
                alt="Close-up of quality used tire showing excellent tread depth"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width tire wall image break */}
      <section className="relative h-[250px] md:h-[350px] overflow-hidden">
        <Image
          src="/images/tire-wall-outdoor.jpg"
          alt="Impressive outdoor wall of stacked tires showing volume of inventory"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Automotive + Commercial Services */}
      <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-bg-alt">
        <div className="max-w-5xl mx-auto">
          {/* Automotive */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                {autoSectionLabel}
              </span>
              <div className="flex-1 h-px bg-brand-red/20" />
            </div>
            {autoServices.map((item, i) => (
              <ServiceRow key={i} title={item.title} description={item.description} />
            ))}
          </div>

          {/* Commercial */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red">
                {commercialSectionLabel}
              </span>
              <div className="flex-1 h-px bg-brand-red/20" />
            </div>
            {commercialServices.map((item, i) => (
              <ServiceRow key={i} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-heading font-medium mb-8">
            {dict.servicesPage.bottomCta}
          </p>
          <a
            href="tel:8176337500"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-5 text-lg font-bold hover:bg-red-800 transition-colors"
          >
            <Phone className="w-5 h-5" />
            (817) 633-7500
          </a>
        </div>
      </section>
    </>
  )
}
