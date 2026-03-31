import { getDictionary, type Locale } from '@/lib/getDictionary'
import type { Metadata } from 'next'
import Image from 'next/image'
import TeamMember from '@/components/TeamMember'
import ThreeRs from '@/components/ThreeRs'
import ScrollReveal from '@/components/ScrollReveal'

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

  const pullQuote = locale === 'es'
    ? 'Cada conductor merece llantas seguras y confiables sin vaciar su billetera.'
    : 'Every driver deserves safe, dependable tires without breaking the bank.'

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[340px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/storefront.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 md:pb-16 pt-32">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide text-white">
            {dict.aboutPage.heading}
          </h1>
        </div>
      </section>

      {/* Our Story — split layout */}
      <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-6">
                {locale === 'es' ? 'Nuestra Historia' : 'Our Story'}
              </p>
              <div className="w-10 h-0.5 bg-brand-red mb-8" />

              <ScrollReveal>
                <p className="font-body text-lg text-body leading-relaxed mb-8">
                  {dict.aboutPage.story}
                </p>
              </ScrollReveal>

              {/* Pull quote */}
              <ScrollReveal delay={200}>
                <blockquote className="border-l-4 border-brand-red pl-6 my-8">
                  <p className="font-body text-xl italic text-heading leading-snug">
                    &ldquo;{pullQuote}&rdquo;
                  </p>
                </blockquote>
              </ScrollReveal>
            </div>

            <div className="relative h-[400px] sm:h-[500px] lg:h-full lg:min-h-[550px] overflow-hidden">
              <Image
                src="/images/warehouse-inventory.jpg"
                alt="Interior warehouse showing massive tire inventory in orange metal racks"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 md:py-24 px-6 sm:px-8 lg:px-12 bg-bg-alt">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
            {dict.aboutPage.teamHeading}
          </p>
          <div className="w-10 h-0.5 bg-brand-red mb-10" />

          {dict.aboutPage.team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <TeamMember
                name={member.name}
                description={member.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* The 3 R's */}
      <ThreeRs dict={dict} />

      {/* Google Reviews CTA — RED banner */}
      <section className="py-16 md:py-20 px-6 sm:px-8 bg-brand-red">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-white mb-6">
            {locale === 'es'
              ? 'No Solo Tome Nuestra Palabra'
              : "Don't Just Take Our Word For It"}
          </h2>
          <a
            href="https://www.google.com/maps/place/DFW+Tire+Wholesale/@32.7298,-97.1207,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-body text-base font-bold tracking-wide hover:bg-white hover:text-brand-red transition-all rounded-sm"
          >
            {dict.aboutPage.reviewsButton} →
          </a>
        </div>
      </section>
    </>
  )
}
