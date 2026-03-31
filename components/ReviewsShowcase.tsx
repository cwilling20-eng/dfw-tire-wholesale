import ScrollReveal from '@/components/ScrollReveal'
import type { Dictionary } from '@/lib/getDictionary'
import type { Locale } from '@/lib/getDictionary'

export default function ReviewsShowcase({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const featured = dict.reviews.items[1] // Yousef honesty review
  const remaining = [
    dict.reviews.items[0],
    dict.reviews.items[2],
    dict.reviews.items[3],
    dict.reviews.items[4],
    dict.reviews.items[5],
  ]

  const seeAllText = locale === 'es'
    ? 'Ver las 75+ reseñas en Google →'
    : 'See all 75+ reviews on Google →'

  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 lg:px-12 bg-heading relative overflow-hidden">
      {/* Large decorative quote mark */}
      <div
        className="absolute top-0 left-6 md:left-16 text-[200px] md:text-[280px] leading-none font-serif text-brand-red/10 select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-white mb-16 md:mb-20">
          {dict.reviews.heading}
        </h2>

        {/* Featured Review */}
        <ScrollReveal>
          <div className="mb-16 md:mb-20 max-w-3xl">
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-gold text-lg">★</span>
              ))}
            </div>
            <blockquote className="font-body text-xl md:text-2xl lg:text-3xl text-white italic leading-snug mb-6">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <p className="font-body text-sm font-bold text-brand-red tracking-widest uppercase">
              {featured.name}
            </p>
          </div>
        </ScrollReveal>

        {/* Remaining reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {remaining.map((review, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-bg-dark border-l-[3px] border-brand-red/40 hover:border-brand-red pl-6 pr-6 py-5 transition-colors">
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-gold text-xs">★</span>
                  ))}
                </div>
                <p className="font-body text-white/85 italic leading-relaxed mb-3 text-[15px]">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-body text-xs font-bold text-brand-red tracking-widest uppercase">
                  {review.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* See all reviews link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/DFW+Tire+Wholesale/@32.7298,-97.1207,17z/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-brand-red hover:text-red-400 transition-colors font-semibold text-sm tracking-wide"
          >
            {seeAllText}
          </a>
        </div>
      </div>
    </section>
  )
}
