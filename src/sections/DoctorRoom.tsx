import { useEffect, useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Photo } from '../components/Photo'
import { doctor } from '../content/doctor'
import { images } from '../config/images'
import { Education } from './Education'
import { FinalCta } from './FinalCta'

/** Visão completa da doutora (endereço #pamela). Troca o conteúdo da página, sem biblioteca de rotas. */
export function DoctorRoom() {
  const heading = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const previous = document.title
    document.title = 'Pâmela Malavolta | ÉLYSÉA Dermal'
    window.scrollTo({ top: 0, behavior: 'auto' })
    heading.current?.focus({ preventScroll: true })
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <section className="bg-ivory pb-24 pt-28 md:pb-36 md:pt-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <a href="#sobre" className="inline-flex items-center gap-2 text-sm text-navy/70 transition-colors hover:text-gold-deep">
            <ArrowLeft size={16} /> Voltar ao site
          </a>
          <div className="mt-8">
            <Photo {...images.doctorBanner} ratio="aspect-[16/9] md:aspect-[21/9]" priority />
          </div>
          <div className="mt-16 grid gap-14 lg:grid-cols-12">
            <h1 ref={heading} tabIndex={-1} className="display text-4xl outline-none md:text-6xl lg:col-span-5">
              Uma trajetória guiada pela ciência e pelo cuidado.
            </h1>
            <div className="space-y-6 text-[1.02rem] leading-[1.85] text-navy/85 lg:col-span-7 lg:pl-10">
              {doctor.intro.map((p) => <p key={p} className="max-w-xl">{p}</p>)}
              <blockquote className="!my-12 border-t border-gold pt-8 font-serif text-3xl italic leading-tight text-navy md:text-4xl">{doctor.quote}</blockquote>
              {doctor.rest.map((p) => <p key={p} className="max-w-xl">{p}</p>)}
            </div>
          </div>
        </div>
      </section>
      <Education />
      <FinalCta />
    </>
  )
}
