import type { Dictionary } from '@/lib/getDictionary'

export default function ThreeRs({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-heading text-white">
      <div className="max-w-5xl mx-auto">
        <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-white/40 mb-12">
          {dict.aboutPage.threeRsHeading}
        </p>

        <div className="space-y-12 md:space-y-16">
          {dict.aboutPage.threeRs.map((item, i) => (
            <div key={i}>
              <h3 className="font-heading text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide mb-3">
                <span className="text-brand-red">{item.title.charAt(0)}</span>
                {item.title.slice(1)}
              </h3>
              <p className="font-body text-white/50 text-lg md:text-xl max-w-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
