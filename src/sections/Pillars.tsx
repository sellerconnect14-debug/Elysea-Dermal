import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const pillars = [
  ['Um olhar além do visível', 'A aparência é apenas uma parte da história. A avaliação considera as características da pele, suas necessidades e os fatores que podem influenciar sua qualidade.', 'md:col-span-7'],
  ['Cuidado individualizado', 'Cada plano deve partir de uma avaliação profissional, levando em conta as queixas, os objetivos e as particularidades de cada paciente.', 'md:col-span-5 md:mt-24'],
  ['Prevenção como estratégia', 'Cuidar da pele também significa antecipar necessidades, estabelecer uma rotina adequada e acompanhar suas mudanças ao longo do tempo.', 'md:col-span-4'],
  ['Ciência aplicada à prática', 'O conhecimento científico orienta a compreensão dos processos cutâneos e contribui para escolhas mais criteriosas e responsáveis.', 'md:col-span-4 md:mt-12'],
  ['Resultados que respeitam a naturalidade', 'A proposta não é descaracterizar, mas valorizar a pele de forma progressiva e compatível com as necessidades e possibilidades de cada pessoa.', 'md:col-span-4 md:mt-24'],
]

export function Pillars() {
  return (
    <Section id="diferenciais">
      <h2 className="display max-w-2xl text-4xl md:text-6xl">Os pilares do cuidado.</h2>
      <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-12">
        {pillars.map(([title, text, span], i) => (
          <Reveal key={title} className={span}>
            <div className="border-t border-navy/25 pt-6">
              <h3 className={`font-serif leading-tight ${i === 0 ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>{title}</h3>
              <p className="mt-4 max-w-md text-[0.97rem] leading-relaxed text-navy/75">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
