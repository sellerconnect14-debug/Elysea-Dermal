import { site } from '../config/site'

/** Retorna o link do WhatsApp ou null enquanto o número não estiver configurado (sem links falsos). */
export function whatsappLink(message: string = site.whatsappMessage): string | null {
  const digits = site.whatsappNumber.replace(/\D/g, '')
  if (digits.length < 10) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
