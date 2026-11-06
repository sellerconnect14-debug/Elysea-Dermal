import { Section } from '../components/Section'
import { site } from '../config/site'

const pending = <span className="text-navy/45">A preencher</span>

export function Contact() {
  const rows: [string, React.ReactNode][] = [
    ['WhatsApp', site.whatsappNumber ? site.whatsappNumber : pending],
    [
      'Instagram',
      site.instagram ? (
        <a href={`https://instagram.com/${site.instagram}`} target="_blank" rel="noopener noreferrer" className="underline decoration-gold underline-offset-4">@{site.instagram}</a>
      ) : pending,
    ],
    ['Endereço', site.address ? site.address : pending],
  ]
  return (
    <Section id="contato">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="display text-4xl md:text-6xl">Vamos conversar sobre o cuidado com a sua pele?</h2>
          <p className="lead mt-8">Entre em contato para obter informações sobre os atendimentos, conhecer a clínica e consultar a disponibilidade de horários.</p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="font-serif text-2xl">ÉLYSÉA Dermal</p>
          <p className="mt-1 text-navy/70">{site.city}</p>
          <dl className="mt-8">
            {rows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-6 border-t border-navy/20 py-4">
                <dt className="text-sm text-navy/60">{label}</dt>
                <dd className="text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}
