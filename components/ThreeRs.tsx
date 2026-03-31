import type { Dictionary } from '@/lib/getDictionary'

export default function ThreeRs({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-heading text-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/40 mb-10">
          {dict.aboutPage.threeRsHeading}
        </p>

        <div className="space-y-10 md:space-y-14">
          {dict.aboutPage.threeRs.map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
                <span className="text-brand-red">{item.title.charAt(0)}</span>
                {item.title.slice(1)}
              </h3>
              <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
