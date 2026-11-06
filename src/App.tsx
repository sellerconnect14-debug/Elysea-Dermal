import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Clinic } from './sections/Clinic'
import { Contact } from './sections/Contact'
import { Continuity } from './sections/Continuity'
import { Doctor } from './sections/Doctor'
import { DoctorRoom } from './sections/DoctorRoom'
import { FinalCta } from './sections/FinalCta'
import { Hero } from './sections/Hero'
import { InsideOut } from './sections/InsideOut'
import { Pillars } from './sections/Pillars'
import { Regenerative } from './sections/Regenerative'
import { Treatments } from './sections/Treatments'

const getView = () => (window.location.hash === '#pamela' ? 'pamela' : 'home')

export default function App() {
  const [view, setView] = useState(getView)

  useEffect(() => {
    const onHash = () => setView(getView())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Ao voltar da visão da doutora, leva até a seção indicada no endereço (ex.: #sobre).
  useEffect(() => {
    if (view !== 'home') return
    const id = window.location.hash.slice(1)
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [view])

  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-navy">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        {view === 'pamela' ? (
          <DoctorRoom />
        ) : (
          <>
            <Hero />
            <Doctor />
            <Treatments />
            <Regenerative />
            <Pillars />
            <InsideOut />
            <Clinic />
            <Continuity />
            <FinalCta />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
