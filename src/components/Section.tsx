import type { ReactNode } from 'react'

const tones = { ivory: 'bg-ivory text-navy', sand: 'bg-sand text-navy', navy: 'bg-navy text-ivory' }

type Props = { id?: string; tone?: keyof typeof tones; children: ReactNode; className?: string }

export function Section({ id, tone = 'ivory', children, className = 'py-24 md:py-36' }: Props) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-10">{children}</div>
    </section>
  )
}
