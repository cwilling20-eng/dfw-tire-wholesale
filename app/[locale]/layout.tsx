import { getDictionary, type Locale } from '@/lib/getDictionary'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const locales = ['en', 'es'] as const

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()

  const dict = await getDictionary(locale as Locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TireShop",
            name: "DFW Tire Wholesale",
            description:
              "Local supplier of quality used and new tires with professional installation in Arlington, TX.",
            telephone: "+18176337500",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3201 Dalworth St",
              addressLocality: "Arlington",
              addressRegion: "TX",
              postalCode: "76011",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "32.7298",
              longitude: "-97.1207",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "08:00",
                closes: "16:00",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.4",
              reviewCount: "75",
            },
            slogan: "Responsive • Reliable • Reasonable",
            priceRange: "$",
          }),
        }}
      />
      <Navbar locale={locale as Locale} dict={dict} />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer dict={dict} />
      <ChatWidget locale={locale as Locale} dict={dict} />
    </>
  )
}
