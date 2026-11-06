import { Photo } from '../components/Photo'
import { images } from '../config/images'

/** Imagem da clínica em paisagem: sobe sobre o hero azul, como na referência. */
export function ClinicBanner() {
  return (
    <div className="bg-ivory pb-20 md:pb-28">
      <div className="relative z-10 mx-auto -mt-32 max-w-7xl px-6 md:-mt-48 md:px-10">
        <Photo {...images.clinicBanner} ratio="aspect-[16/9] md:aspect-[21/9]" priority />
      </div>
    </div>
  )
}
