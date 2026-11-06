import { Button } from '../components/Button'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { doctor } from '../content/doctor'
import { images } from '../config/images'

/** Resumo da doutora na página principal. O texto completo fica em DoctorRoom (#pamela). */
export function Doctor() {
  return (
    <Section id="sobre" tone="sand">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Photo {...images.about} ratio="aspect-[3/4]" />
        </Reveal>
        <div className="lg:col-span-7 lg:pl-10">
          <h2 className="display text-4xl md:text-6xl">Uma trajetória guiada pela ciência e pelo cuidado.</h2>
          <p className="mt-10 max-w-xl text-[1.02rem] leading-[1.85] text-navy/85">{doctor.intro[0]}</p>
          <blockquote className="my-10 border-t border-gold pt-8 font-serif text-3xl italic leading-tight md:text-4xl">{doctor.quote}</blockquote>
          <Button variant="outline" href="#pamela">Conheça a trajetória da Pâmela</Button>
        </div>
      </div>
    </Section>
  )
}
