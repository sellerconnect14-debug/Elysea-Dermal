import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { doctor } from '../content/doctor'

export function Education() {
  return (
    <Section id="formacao" tone="sand">
      <Reveal>
        <h2 className="display max-w-3xl text-4xl md:text-6xl">Conhecimento que fundamenta cada escolha.</h2>
        <p className="lead mt-6">Uma trajetória multidisciplinar que conecta ciência, pesquisa e cuidado.</p>
      </Reveal>
      <ol className="mt-16 grid gap-x-20 md:grid-cols-2">
        {doctor.education.map(([title, text], i) => (
          <li key={title} className="flex gap-6 border-t border-navy/20 py-8">
            <span className="w-8 shrink-0 font-serif text-2xl text-gold-deep">{i + 1}</span>
            <div>
              <h3 className="font-serif text-2xl leading-tight md:text-[1.7rem]">{title}</h3>
              <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-navy/75">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
