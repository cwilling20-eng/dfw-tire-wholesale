export default function TeamMember({
  name,
  description,
}: {
  name: string
  description: string
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-5 md:gap-6 items-start">
      <div className="w-14 h-14 bg-brand-red flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-xl font-extrabold text-white">
          {name[0]}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-heading mb-1">{name}</h3>
        <p className="text-body leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
