import type { ReactNode } from 'react'
import { whatsappLink } from '../lib/whatsapp'

type Variant = 'primary' | 'outline' | 'gold' | 'light'

const styles: Record<Variant, string> = {
  primary: 'bg-navy text-ivory hover:bg-gold hover:text-navy',
  outline: 'border border-navy text-navy hover:bg-navy hover:text-ivory',
  gold: 'bg-gold text-navy hover:bg-ivory',
  light: 'border border-ivory/60 text-ivory hover:bg-ivory hover:text-navy',
}

const base =
  'inline-flex items-center justify-center px-7 py-3.5 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300'

type Props = { variant?: Variant; href: string | null; children: ReactNode; className?: string }

export function Button({ variant = 'primary', href, children, className = '' }: Props) {
  const cls = `${base} ${styles[variant]} ${className}`
  if (!href) {
    return (
      <button type="button" disabled title="Número de WhatsApp pendente de configuração" className={`${cls} cursor-not-allowed opacity-60`}>
        {children}
      </button>
    )
  }
  const external = href.startsWith('http')
  return (
    <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
      {children}
    </a>
  )
}

/** Botão que abre o WhatsApp com mensagem pré-preenchida (personalizável). */
export function WhatsAppButton({ message, ...rest }: Omit<Props, 'href'> & { message?: string }) {
  return <Button {...rest} href={whatsappLink(message)} />
}
