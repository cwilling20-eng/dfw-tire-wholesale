export default function TeamMember({
  name,
  description,
}: {
  name: string
  description: string
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 md:gap-6 items-start py-8 border-b border-border last:border-b-0">
      <div className="w-16 h-16 bg-brand-red flex items-center justify-center flex-shrink-0 rounded-sm">
        <span className="font-heading text-2xl text-white uppercase">
          {name[0]}
        </span>
      </div>
      <div>
        <h3 className="font-body text-xl font-bold text-heading mb-1">{name}</h3>
        <p className="font-body text-base text-body leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
