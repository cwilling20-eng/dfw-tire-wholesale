import type { Dictionary } from '@/lib/getDictionary'

export default function ParallaxSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center bg-scroll md:bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/tire-wall-outdoor.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10 text-center text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-0.5 bg-brand-red mx-auto mb-8" />
          <p className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest leading-tight">
            {dict.parallax.tagline}
          </p>
          <div className="w-20 h-0.5 bg-brand-red mx-auto mt-8 mb-6" />
          <p className="font-body text-base sm:text-lg text-white/70 tracking-wide">
            {dict.parallax.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
