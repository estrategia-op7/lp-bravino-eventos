import Nav from '@/components/sections/Nav'
import Hero from '@/components/sections/Hero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import Mezanino from '@/components/sections/Mezanino'
import Diferenciais from '@/components/sections/Diferenciais'
import Unidades from '@/components/sections/Unidades'
import FAQ from '@/components/sections/FAQ'
import FooterCTA from '@/components/sections/FooterCTA'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <MetricsStrip />

      {/* WINE BAR */}
      <ExperienceSection
        id="wine-bar"
        tag="Wine Bar"
        tagSub="SEG - SEX: 18:30 - 21:30"
        heading="O seu final de tarde pede Bravino"
        body="Aqui na BRAVINO, você escolhe o seu rótulo ideal, e nós harmonizamos a sua experiência com pratos selecionados, ambiente climatizado e atendimento especializado."
        tags={['Ar-livre', 'Vinhos', 'Harmonização', 'Entardecer']}
        ctaText="Quero ir esta semana"
        ctaHref="https://wa.me/554391347721"
        glyphLetter="W"
        flipLayout={false}
        bgImage="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/confra_eventos_bravino.png"
      />

      {/* VINHO NO DECK */}
      <ExperienceSection
        id="vinho-no-deck"
        tag="Vinho no Deck"
        tagSub="SÁBADO: 10:30 às 12:30H"
        heading="O seu sábado começa muito melhor aqui."
        body="Degustações ao ar livre com um sommelier qualificado, vinhos selecionados com preços especiais e um bom bate papo."
        tags={['Degustação', 'Vinhos', 'Ao ar livre', 'Todo sábado']}
        ctaText="Ver próxima edição"
        ctaHref="https://instagram.com/bravinowine"
        glyphLetter="D"
        flipLayout={true}
        bgImage="/bravino-vinhos-deck.webp"
      />

      <Mezanino />

      {/* JAZZ SESSIONS */}
      <ExperienceSection
        id="jazz"
        tag="Jazz Sessions"
        tagSub="Noites Especiais"
        heading="Quando o jazz encontra a BRAVINO, a noite muda de ritmo."
        body="Música ao vivo, bons rótulos e uma atmosfera feita para ficar mais um pouco. O Jazz Sessions transforma a BRAVINO em palco para encontros, conversas e grandes músicos.&#10;&#10;Uma experiência para ouvir de perto, brindar entre acordes e aproveitar a noite sem pressa."
        tags={['Jazz ao vivo', 'Bons rótulos', 'Lugares limitados', 'Edições especiais']}
        ctaText="Ver próxima edição"
        ctaHref="https://instagram.com/bravinowine"
        glyphLetter="J"
        flipLayout={false}
        bgImage="https://pub-db8ed4fb33634589a6ce5fb07e85cb46.r2.dev/landing_pages/bravino/boamusica_evento_bravino.png"
      />

      <Diferenciais />
      <Unidades />
      <FAQ />
      <FooterCTA />
    </main>
  )
}
