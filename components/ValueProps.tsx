import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import type { Dictionary } from '@/lib/getDictionary'
import type { Locale } from '@/lib/getDictionary'

const numbers = ['01', '02', '03', '04']

export default function ValueProps({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const subtitle = locale === 'es'
    ? 'Negocio local. Servicio honesto. Los mejores precios en DFW.'
    : 'Locally owned. Honest service. The best prices in DFW.'

  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-18">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-heading mb-4">
            {dict.valueProps.heading}
          </h2>
          <p className="font-body text-lg text-body max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_45%] gap-12 lg:gap-16 items-start">
          {/* Value props stacked on left */}
          <div>
            {dict.valueProps.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="flex gap-5 md:gap-6 py-6 border-b border-border">
                  <span className="font-heading text-4xl text-brand-red/20 leading-none flex-shrink-0 w-12">
                    {numbers[i]}
                  </span>
                  <div>
                    <h3 className="font-body text-lg md:text-xl font-bold text-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-base text-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Large warehouse photo on right */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-full lg:min-h-[500px] rounded-sm overflow-hidden">
            <Image
              src="/images/warehouse-inventory.jpg"
              alt="Massive tire inventory in warehouse racks floor to ceiling"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              quality={90}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
