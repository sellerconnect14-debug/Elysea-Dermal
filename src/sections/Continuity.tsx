import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

export function Continuity() {
  return (
    <Section id="cuidado-continuo" tone="sand" className="py-28 md:py-44">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="display text-4xl md:text-6xl">A constância transforma a forma como cuidamos da pele.</h2>
        <div className="mx-auto my-10 h-px w-16 bg-gold" />
        <div className="space-y-6 text-[1.05rem] leading-[1.9] text-navy/80">
          <p>A qualidade cutânea é construída ao longo do tempo. Por isso, acredito em um acompanhamento que respeite as etapas de cada tratamento, considere a resposta individual da pele e permita ajustes sempre que necessário.</p>
          <p className="font-serif text-2xl italic leading-snug text-navy">Cada etapa tem seu propósito. Cada escolha deve fazer sentido para as necessidades identificadas.</p>
          <p>O objetivo é estabelecer uma relação de cuidado que vá além de resultados imediatos, valorizando a prevenção, a orientação e a evolução acompanhada da pele.</p>
        </div>
      </Reveal>
    </Section>
  )
}
