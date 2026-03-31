import type { Dictionary } from '@/lib/getDictionary'

const numbers = ['01', '02', '03', '04']

export default function ValueProps({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-16 md:mb-20">
          {dict.valueProps.heading}
        </h2>

        <div className="space-y-0">
          {dict.valueProps.items.map((item, i) => (
            <div
              key={i}
              className="group grid grid-cols-[auto_1fr] gap-6 md:gap-10 py-8 md:py-10 border-t border-border last:border-b"
            >
              <span className="text-brand-red font-extrabold text-sm tracking-widest pt-1">
                {numbers[i]}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-heading mb-2 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-body leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
