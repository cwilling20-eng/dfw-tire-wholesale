import type { LucideIcon } from 'lucide-react'

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon
  title: string
  description: string
}) {
  return (
    <div className="bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border">
      <div className="w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-brand-green" />
      </div>
      <h3 className="text-lg font-bold text-heading mb-2">{title}</h3>
      <p className="text-body text-[15px] leading-relaxed">{description}</p>
    </div>
  )
}
