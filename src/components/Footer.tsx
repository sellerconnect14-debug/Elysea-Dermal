import { Logo } from './Logo'

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Estética Regenerativa', '#abordagem'],
  ['Tratamentos', '#tratamentos'],
  ['Contato', '#contato'],
]

export function Footer() {
  return (
    <footer className="bg-navy py-16 text-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Logo className="h-14" />
            <p className="mt-5 text-ivory/70">Ciência, prevenção e cuidado individualizado com a pele.</p>
          </div>
          <nav aria-label="Rodapé" className="md:col-span-5 md:col-start-8">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {links.map(([label, href]) => (
                <li key={href}><a href={href} className="text-ivory/80 transition-colors hover:text-gold">{label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-14 border-t border-ivory/15 pt-6 text-xs leading-relaxed text-ivory/60">
          <p>As informações deste site são destinadas à apresentação dos serviços e não substituem uma avaliação profissional individualizada.</p>
          <p className="mt-2">© 2026 ÉLYSÉA Dermal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
