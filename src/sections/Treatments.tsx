import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { whatsappLink } from '../lib/whatsapp'

type Area = { title: string; tags?: string[]; text: string }

const areas: Area[] = [
  {
    title: 'Renovação e qualidade da pele',
    tags: ['Microagulhamento', 'Peelings', 'Limpeza de pele'],
    text: 'Abordagens voltadas à renovação cutânea, à melhora da textura, ao cuidado com manchas e à manutenção da qualidade da pele. Cada protocolo é definido conforme as necessidades individuais e a indicação profissional.',
  },
  {
    title: 'Firmeza e estímulo de colágeno',
    tags: ['Bioestimuladores de colágeno'],
    text: 'Tratamentos que estimulam a produção de colágeno e contribuem para a firmeza, a sustentação e a qualidade da pele ao longo do tempo. A indicação considera as características individuais e os objetivos de cada paciente.',
  },
  {
    title: 'Biorremodelação tecidual',
    tags: ['Profhilo'],
    text: 'Uma abordagem voltada à qualidade e à hidratação da pele, com foco na melhora da elasticidade e da firmeza. O Profhilo utiliza ácido hialurônico em uma formulação específica, contribuindo para a biorremodelação tecidual e para uma melhora progressiva da qualidade cutânea.',
  },
  {
    title: 'Tecnologias estéticas',
    text: 'Recursos tecnológicos selecionados de acordo com as necessidades da pele e dos tecidos, integrando o planejamento de tratamentos com foco na qualidade cutânea, na firmeza e no envelhecimento saudável.',
  },
  {
    title: 'Harmonização facial',
    text: 'Uma abordagem que considera a anatomia, as proporções e as características individuais do rosto, buscando equilíbrio e naturalidade. O planejamento respeita a identidade de cada paciente e prioriza intervenções criteriosas, quando indicadas.',
  },
]

export function Treatments() {
  return (
    <Section id="tratamentos">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h2 className="display text-4xl md:text-5xl">Cada pele tem suas necessidades. Cada cuidado deve ter um propósito.</h2>
            <p className="lead mt-8">
              Os tratamentos são definidos a partir de uma avaliação individualizada, considerando as características da pele, as queixas apresentadas e os objetivos de cada paciente.
            </p>
            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-relaxed text-navy/70">
              O cuidado também se estende à saúde do couro cabeludo e dos cabelos, por meio da tricologia.
            </p>
          </div>
        </div>
        <ol className="lg:col-span-8">
          {areas.map((a, i) => {
            const link = whatsappLink(`Olá! Gostaria de saber mais sobre ${a.title.toLowerCase()} na ÉLYSÉA Dermal.`)
            return (
              <Reveal key={a.title}>
                <li className="grid gap-4 border-t border-navy/20 py-10 sm:grid-cols-[4.5rem_1fr]">
                  <span className="font-serif text-3xl text-gold-deep">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight md:text-4xl">{a.title}</h3>
                    {a.tags && <p className="mt-3 text-sm font-medium text-gold-deep">{a.tags.join(' | ')}</p>}
                    <p className="mt-4 max-w-xl text-[0.98rem] leading-[1.8] text-navy/80">{a.text}</p>
                    {/* O link aparece quando o número do WhatsApp for configurado em src/config/site.ts */}
                    {link && (
                      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block border-b border-gold text-sm text-navy transition-colors hover:text-gold-deep">
                        Conversar sobre esta área pelo WhatsApp
                      </a>
                    )}
                  </div>
                </li>
              </Reveal>
            )
          })}
        </ol>
      </div>

      <div className="mt-20 border-t border-gold pt-14 md:mt-28">
        <Reveal>
          <p className="display max-w-4xl text-3xl md:text-5xl">O procedimento é apenas uma parte do cuidado.</p>
          <p className="lead mt-8">
            Na estética regenerativa, cada escolha precisa ter fundamento. A avaliação individualizada permite compreender as necessidades da pele e definir quais abordagens podem fazer sentido, isoladamente ou em associação.
          </p>
          <div className="mt-10">
            <Button href={whatsappLink('Olá! Gostaria de encontrar o cuidado ideal para a minha pele na ÉLYSÉA Dermal.')}>
              Encontre o cuidado ideal para você
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
