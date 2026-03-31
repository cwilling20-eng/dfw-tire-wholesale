import { Star } from 'lucide-react'
import type { Dictionary } from '@/lib/getDictionary'

export default function ReviewsShowcase({ dict }: { dict: Dictionary }) {
  const featured = dict.reviews.items[1] // Yousef honesty review
  const remaining = [
    dict.reviews.items[0],
    dict.reviews.items[2],
    dict.reviews.items[3],
    dict.reviews.items[4],
    dict.reviews.items[5],
  ]

  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-12 bg-bg-alt relative overflow-hidden">
      {/* Large decorative quote mark */}
      <div
        className="absolute top-8 right-8 md:top-12 md:right-16 text-[160px] md:text-[240px] leading-none font-serif text-brand-red/[0.06] select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading tracking-tight mb-16 md:mb-20">
          {dict.reviews.heading}
        </h2>

        {/* Featured Review — Yousef honesty story */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex gap-0.5 mb-5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <blockquote className="text-2xl md:text-3xl text-heading font-medium italic leading-snug mb-5">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <p className="text-sm font-bold text-heading tracking-wide uppercase">
            {featured.name}
          </p>
        </div>

        {/* Remaining reviews — editorial left-border style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {remaining.map((review, i) => (
            <div
              key={i}
              className="border-l-2 border-brand-red/30 pl-6 hover:border-brand-red transition-colors"
            >
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-body italic leading-relaxed mb-3">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-xs font-bold text-heading tracking-wide uppercase">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
