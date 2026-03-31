import { getDictionary, type Locale } from '@/lib/getDictionary'
import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import ValueProps from '@/components/ValueProps'
import ParallaxSection from '@/components/ParallaxSection'
import ReviewsShowcase from '@/components/ReviewsShowcase'
import CTABanner from '@/components/CTABanner'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)
  return {
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    openGraph: {
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      type: 'website',
      images: ['/images/dfw-tire-wholesale-logo.jpg'],
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  const dict = await getDictionary(locale as Locale)

  return (
    <>
      <Hero dict={dict} />
      <ValueProps dict={dict} />
      <ParallaxSection dict={dict} />
      <ReviewsShowcase dict={dict} />
      <CTABanner dict={dict} />
    </>
  )
}
