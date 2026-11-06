import { Button } from '../components/Button'
import { Photo } from '../components/Photo'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { images } from '../config/images'

const paragraphs = [
  'Em Florianópolis, a ÉLYSÉA Dermal nasce da proposta de oferecer uma experiência de cuidado individualizado, em um ambiente que valoriza a tranquilidade, a atenção e a confiança.',
  'Cada atendimento é uma oportunidade de compreender as necessidades da pele, esclarecer dúvidas e construir um planejamento coerente com os objetivos de cada paciente.',
  'Mais do que um espaço para tratamentos, a proposta é proporcionar uma experiência em que conhecimento, acolhimento e cuidado caminhem juntos.',
]

export function Clinic() {
  return (
    <Section id="clinica">
      <div className="grid gap-12 lg:grid-cols-12">
        <h2 className="display text-4xl md:text-6xl lg:col-span-6">Um espaço dedicado à ciência, à pele e ao cuidado.</h2>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="space-y-5 text-[1.02rem] leading-[1.85] text-navy/85">
            {paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
          <p className="mt-8 font-serif text-xl text-gold-deep">Florianópolis, Santa Catarina.</p>
          <div className="mt-8"><Button variant="outline" href="#contato">Conheça a clínica</Button></div>
        </div>
      </div>
      <div className="mt-20 grid items-start gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-5"><Photo {...images.clinic[0]} ratio="aspect-[4/5]" /></Reveal>
        <Reveal delay={120} className="md:col-span-4 md:mt-20"><Photo {...images.clinic[1]} ratio="aspect-square" /></Reveal>
        <Reveal delay={240} className="md:col-span-3"><Photo {...images.clinic[2]} ratio="aspect-[3/4]" /></Reveal>
      </div>
    </Section>
  )
}
