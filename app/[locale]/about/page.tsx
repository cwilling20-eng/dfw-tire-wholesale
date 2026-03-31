import { getDictionary, type Locale } from '@/lib/getDictionary'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import TeamMember from '@/components/TeamMember'
import ThreeRs from '@/components/ThreeRs'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    openGraph: {
      title: dict.meta.about.title,
      description: dict.meta.about.description,
      type: 'website',
      images: ['/images/dfw-tire-wholesale-logo.jpg'],
    },
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)

  return (
    <>
      {/* Hero — full-width storefront image instead of flat dark bg */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end overflow-hidden">
        <Image
          src="/images/storefront.jpg"
          alt="DFW Tire Wholesale storefront"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 md:pb-16 pt-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            {dict.aboutPage.heading}
          </h1>
        </div>
      </section>

      {/* Our Story — asymmetric split */}
      <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red mb-6">
                {locale === 'es' ? 'Nuestra Historia' : 'Our Story'}
              </p>
              <p className="text-lg md:text-xl text-body leading-relaxed">
                {dict.aboutPage.story}
              </p>
            </div>
            <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
              <Image
                src="/images/warehouse-inventory.jpg"
                alt="Interior warehouse showing massive tire inventory in orange metal racks"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team — horizontal rows, no cards */}
      <section className="py-24 md:py-28 px-6 sm:px-8 lg:px-12 bg-bg-alt">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-brand-red mb-4">
            {dict.aboutPage.teamHeading}
          </p>
          <div className="w-12 h-px bg-brand-red mb-12" />

          <div className="space-y-10">
            {dict.aboutPage.team.map((member, i) => (
              <TeamMember
                key={i}
                name={member.name}
                description={member.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* The 3 R's — typographic brand treatment */}
      <ThreeRs dict={dict} />

      {/* Google Reviews CTA */}
      <section className="py-20 md:py-24 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-heading font-medium mb-8">
            {dict.aboutPage.reviewsCta}
          </p>
          <a
            href="https://www.google.com/maps/place/DFW+Tire+Wholesale/@32.7298,-97.1207,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-heading text-heading px-8 py-4 text-base font-bold hover:bg-heading hover:text-white transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            {dict.aboutPage.reviewsButton}
          </a>
        </div>
      </section>
    </>
  )
}
