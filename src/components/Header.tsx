import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { WhatsAppButton } from './Button'
import { Logo } from './Logo'

const links = [
  ['Início', '#inicio'],
  ['Sobre', '#sobre'],
  ['Tratamentos', '#tratamentos'],
  ['Abordagem', '#abordagem'],
  ['Clínica', '#clinica'],
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 bg-navy transition-all duration-500 ${scrolled ? 'border-b border-ivory/10 py-3' : 'py-5'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#inicio" aria-label="ÉLYSÉA Dermal, ir para o início" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-ivory/85 transition-colors hover:text-gold">{label}</a>
          ))}
          <WhatsAppButton variant="gold" className="!px-5 !py-3">Agende sua avaliação</WhatsAppButton>
        </nav>

        <button
          type="button"
          className="p-2 text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="fixed inset-x-0 bottom-0 top-[64px] flex flex-col bg-navy px-6 pb-10 pt-8 lg:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="border-b border-ivory/15 py-4 font-serif text-3xl text-ivory">{label}</a>
          ))}
          <div className="mt-auto"><WhatsAppButton variant="gold" className="w-full">Agende sua avaliação</WhatsAppButton></div>
        </nav>
      )}
    </header>
  )
}
