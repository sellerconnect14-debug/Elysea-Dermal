import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/whatsapp'

/** Ícone flutuante discreto, só no mobile. Só aparece quando o número estiver configurado. */
export function WhatsAppFloat() {
  const href = whatsappLink()
  if (!href) return null
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Fale pelo WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold shadow-md transition-colors hover:bg-gold hover:text-navy md:hidden">
      <MessageCircle size={22} />
    </a>
  )
}
