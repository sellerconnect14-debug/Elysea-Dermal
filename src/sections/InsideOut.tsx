import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { images } from '../config/images'

const paragraphs = [
  'A saúde cutânea é influenciada por diferentes fatores, e compreender esse contexto faz parte de um cuidado mais completo.',
  'Sono, alimentação, exposição solar, rotina, ambiente e hábitos diários podem influenciar a aparência e a qualidade da pele. Por isso, o cuidado não deve se limitar ao que acontece durante um atendimento.',
  'Minha abordagem valoriza a compreensão dessas influências e a construção de estratégias coerentes com as necessidades individuais, associando os cuidados profissionais a hábitos que favoreçam a saúde da pele.',
  'Porque uma pele bem cuidada não depende de uma única escolha, mas de atenção, conhecimento e constância.',
]

export function InsideOut() {
  return (
    <Section id="dentro-para-fora" tone="sand">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:pr-10">
          <h2 className="display text-4xl md:text-6xl">A pele não existe isoladamente.</h2>
          <div className="mt-10 space-y-5 text-[1.02rem] leading-[1.85] text-navy/85">
            {paragraphs.map((p) => <p key={p} className="max-w-xl">{p}</p>)}
          </div>
          <p className="display mt-12 border-t border-gold pt-6 text-3xl italic md:text-4xl">Cuidar de dentro para fora é a minha missão.</p>
        </div>
        <Reveal className="lg:col-span-6 lg:order-first">
          <Photo {...images.insideOut} ratio="aspect-[5/4]" />
        </Reveal>
      </div>
    </Section>
  )
}
