import { useState } from 'react'
import { images } from '../config/images'

/** Logo em PNG; se o arquivo não existir, mostra a marca em texto. */
export function Logo({ className = 'h-10 md:h-12' }: { className?: string }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return <span className="font-serif text-2xl tracking-[0.14em] text-gold">ÉLYSÉA <span className="text-ivory">DERMAL</span></span>
  }
  return <img src={images.logo} alt="ÉLYSÉA Dermal" className={`${className} w-auto`} onError={() => setFailed(true)} />
}
