import { WhatsAppButton } from '../components/Button'
import { images } from '../config/images'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

/** Hero único: foto da clínica dissolvida no azul-marinho, com o texto sobre a parte escura. */
export function Hero() {
  const { src, alt } = images.clinicBanner

  return (
    <section id="inicio" className={`relative overflow-hidden bg-navy text-ivory ${src ? 'pt-20 lg:pt-0' : ''}`}>
      {src && (
        <div className="relative h-[42vh] min-h-[250px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:min-h-0 lg:w-[62%]">
          <img src={src} alt={alt} fetchPriority="high" decoding="async" className="h-full w-full object-cover object-[60%_center]" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent lg:bg-gradient-to-r lg:from-navy lg:via-navy/50 lg:to-transparent" />
        </div>
      )}

      <div className={`relative mx-auto flex max-w-7xl px-6 pb-20 md:px-10 lg:min-h-[44rem] lg:items-center lg:py-32 ${src ? '-mt-12 lg:mt-0' : 'pt-36'}`}>
        <div className="lg:w-[48%]">
          <h1 className="enter display text-[clamp(2.8rem,5.4vw,5.4rem)]" style={d(150)}>
            A pele além da aparência.
            <span className="mt-2 block italic text-gold">Ciência, cuidado e regeneração.</span>
          </h1>
          <p className="enter mt-8 max-w-md text-[1.05rem] leading-[1.85] text-ivory/85" style={d(350)}>
            Um olhar individualizado sobre a pele, que une conhecimento científico, prevenção e estratégias personalizadas para promover saúde, qualidade cutânea e resultados naturais.
          </p>
          <div className="enter mt-9" style={d(500)}>
            <WhatsAppButton variant="gold">Agende sua avaliação</WhatsAppButton>
          </div>
          <p className="enter mt-12 max-w-md border-l border-gold pl-5 font-serif text-xl italic leading-snug text-ivory/80" style={d(650)}>
            Cuidar da pele é compreender seus processos, respeitar sua individualidade e investir em sua saúde ao longo do tempo.
          </p>
        </div>
      </div>
    </section>
  )
}