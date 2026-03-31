import { getDictionary, type Locale } from '@/lib/getDictionary'
import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

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

function ServiceRow({
  title,
  description,
  alt,
  delay = 0,
}: {
  title: string
  description: string
  alt?: boolean
  delay?: number
}) {
  return (
    <ScrollReveal delay={delay}>
      <div className={`grid grid-cols-1 md:grid-cols-[240px_1fr] gap-2 md:gap-8 py-5 border-b border-border group ${alt ? 'bg-bg-alt/50 -mx-4 px-4' : ''}`}>
        <h3 className="font-body text-lg font-bold text-heading group-hover:text-brand-red transition-colors">
          {title}
        </h3>
        <p className="font-body text-base text-body leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  )
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)

  const items = dict.servicesPage.items
  const tireServicesRest = [items[1], items[2], items[3], items[7]]
  const autoServices = [items[4], items[5], items[6]]

  const tireSectionLabel = locale === 'es' ? 'Llantas' : 'Tires'
  const autoSectionLabel = locale === 'es' ? 'Automotriz' : 'Automotive'
  const commercialSectionLabel = locale === 'es' ? 'Comercial' : 'Commercial'
  const callForPricing = locale === 'es'
    ? 'Llame para tamaños y precios — (817) 633-7500'
    : 'Call for sizes & pricing — (817) 633-7500'

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/warehouse-racks.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 md:pb-16 pt-32">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide text-white mb-3">
            {dict.servicesPage.heading}
          </h1>
          <p className="font-body text-lg text-white/70 max-w-xl">
            {dict.servicesPage.subheading}
          </p>
        </div>
      </section>

      {/* Tire Services — Featured Used Tires + Photo Split */}
      <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-brand-red">
              {tireSectionLabel}
            </span>
            <div className="flex-1 h-px bg-brand-red/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 mb-12">
            {/* Featured: Used Tires */}
            <div className="lg:pr-12">
              <ScrollReveal>
                <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-heading mb-4">
                  {items[0].title}
                </h3>
                <p className="font-body text-lg text-body leading-relaxed mb-6 max-w-lg">
                  {items[0].description}
                </p>
                <a
                  href="tel:8176337500"
                  className="font-body text-brand-red font-semibold text-sm hover:text-red-800 transition-colors"
                >
                  {callForPricing}
                </a>
              </ScrollReveal>
            </div>

            {/* Tire quality photo — large, edge-to-edge */}
            <div className="relative h-[350px] lg:h-[400px] overflow-hidden">
              <Image
                src="/images/tire-quality-closeup.jpg"
                alt="Close-up of quality used tire showing excellent tread depth"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>

          {/* Remaining tire services as rows */}
          {tireServicesRest.map((item, i) => (
            <ServiceRow
              key={i}
              title={item.title}
              description={item.description}
              alt={i % 2 === 1}
              delay={i * 100}
            />
          ))}
        </div>
      </section>

      {/* Full-width tire wall photo break — parallax */}
      <section
        className="relative h-[280px] md:h-[380px] bg-scroll md:bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('/images/tire-wall-outdoor.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </section>

      {/* Automotive Services */}
      <section className="py-16 md:py-24 px-6 sm:px-8 lg:px-12 bg-bg-alt">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-brand-red">
              {autoSectionLabel}
            </span>
            <div className="flex-1 h-px bg-brand-red/20" />
          </div>
          {autoServices.map((item, i) => (
            <ServiceRow key={i} title={item.title} description={item.description} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Commercial — dark treatment */}
      <section className="py-14 md:py-20 px-6 sm:px-8 lg:px-12 bg-heading">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-body text-xs font-bold tracking-[0.3em] uppercase text-brand-red">
              {commercialSectionLabel}
            </span>
            <div className="flex-1 h-px bg-brand-red/20" />
          </div>
          <ScrollReveal>
            <h3 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-white mb-3">
              {items[8].title}
            </h3>
            <p className="font-body text-lg text-white/70 leading-relaxed mb-6 max-w-2xl">
              {items[8].description}
            </p>
            <a
              href="tel:8176337500"
              className="font-body text-brand-red font-semibold hover:text-red-400 transition-colors"
            >
              {callForPricing}
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 sm:px-8 bg-[#111111]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-white mb-4">
            {locale === 'es' ? '¿Necesita Ayuda?' : 'Need Help Choosing?'}
          </h2>
          <p className="font-body text-white/60 text-lg mb-8">
            {dict.servicesPage.bottomCta}
          </p>
          <a
            href="tel:8176337500"
            className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-4 text-lg font-body font-bold tracking-wide hover:bg-red-800 transition-colors rounded-sm"
          >
            <Phone className="w-5 h-5" />
            (817) 633-7500
          </a>
        </div>
      </section>
    </>
  )
}
