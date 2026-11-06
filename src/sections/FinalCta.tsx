import { WhatsAppButton } from '../components/Button'
import { Section } from '../components/Section'

export function FinalCta() {
  return (
    <Section id="agendamento" tone="navy">
      <div className="grid items-end gap-12 lg:grid-cols-12">
        <h2 className="display text-4xl text-ivory md:text-6xl lg:col-span-7">Sua pele tem necessidades únicas. Seu cuidado também deve ter.</h2>
        <div className="lg:col-span-5">
          <p className="text-[1.05rem] leading-[1.85] text-ivory/85">
            O primeiro passo é compreender sua pele, suas características e o que realmente faz sentido para você.
          </p>
          <p className="mt-4 text-[1.05rem] leading-[1.85] text-ivory/85">
            Agende uma avaliação e conheça as possibilidades de cuidado direcionadas às suas necessidades.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton variant="gold">Agende sua avaliação</WhatsAppButton>
            <WhatsAppButton variant="light">Fale pelo WhatsApp</WhatsAppButton>
          </div>
        </div>
      </div>
    </Section>
  )
}
