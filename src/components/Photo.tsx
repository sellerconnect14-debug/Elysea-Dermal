type Props = { src: string; alt: string; label: string; ratio?: string; className?: string; priority?: boolean }

/** Exibe a foto real ou um espaço reservado identificado (substituível por foto autorizada). */
export function Photo({ src, alt, label, ratio = 'aspect-[4/5]', className = '', priority = false }: Props) {
  if (src) {
    return <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" className={`${ratio} w-full object-cover ${className}`} />
  }
  return (
    <div
      role="img"
      aria-label={`Espaço reservado: ${label}`}
      className={`${ratio} flex w-full flex-col items-center justify-center gap-2 border border-gold/50 bg-[#E8E4DC] p-6 text-center ${className}`}
    >
      <span className="font-serif text-xl text-navy/70">{label}</span>
      <span className="text-xs tracking-wide text-navy/55">Espaço reservado — substituir por fotografia autorizada</span>
    </div>
  )
}
