import type { Dictionary } from '@/lib/getDictionary'

export default function ParallaxSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      className="relative py-28 md:py-36 bg-scroll md:bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/tire-wall-outdoor.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center text-white px-6">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-px bg-brand-red mx-auto mb-8" />
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {dict.parallax.tagline}
          </p>
          <div className="w-12 h-px bg-brand-red mx-auto mt-8 mb-6" />
          <p className="text-base sm:text-lg text-white/70 tracking-wide">
            {dict.parallax.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
