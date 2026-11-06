import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { images } from '../config/images'

const blocks = [
  'A estética regenerativa propõe um olhar mais amplo sobre a saúde cutânea. Em vez de concentrar a atenção somente nos sinais visíveis, busca compreender as características da pele, suas necessidades e os processos biológicos envolvidos em sua qualidade e manutenção.',
  'Cada pele apresenta uma história, um ritmo e necessidades específicas. Por isso, o cuidado deve começar com uma avaliação criteriosa, capaz de orientar escolhas mais conscientes e estratégias individualizadas.',
  'A proposta é construir um plano de cuidado que considere prevenção, qualidade cutânea e evolução ao longo do tempo, respeitando a individualidade e valorizando resultados naturais.',
]

export function Regenerative() {
  return (
    <Section id="abordagem" tone="sand">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="display text-[clamp(2.4rem,5.6vw,5rem)]">
            Não se trata apenas de tratar a pele. Trata-se de compreender o que ela precisa.
          </h2>
          <div className="mt-14 grid gap-x-12 gap-y-6 text-[1rem] leading-[1.85] text-navy/85 md:grid-cols-2">
            <p>{blocks[0]}</p>
            <p>{blocks[1]}</p>
            <p>{blocks[2]}</p>
            <p className="font-serif text-2xl italic leading-snug text-navy">
              Mais do que uma intervenção pontual, uma estratégia de cuidado com a pele.
            </p>
          </div>
        </div>
        <Reveal className="lg:col-span-4 lg:pt-24">
          <Photo {...images.regenerative} ratio="aspect-[3/4]" />
        </Reveal>
      </div>
      <p className="display mt-20 max-w-5xl border-t border-gold pt-10 text-3xl italic md:text-5xl">
        Ciência para compreender. Estratégia para cuidar. Individualidade para orientar.
      </p>
    </Section>
  )
}
