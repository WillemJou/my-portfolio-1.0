import { Gallery } from '../components/Gallery'
import { useContext } from 'react'
import { LanguageContext } from '../globals/Languages'
import data from '../data.json'
import { RevealOnScroll } from '../utils/RevealOn'

export function Works() {
  const languages = useContext(LanguageContext)
  const stateLanguage = languages.language

  return (
    <div className=" stack gap-24">
      <RevealOnScroll>
        <header className="header stack gap-4 start">
          <div className="stack gap-2 flex-center">
            <h1 className="title page-title">
              {stateLanguage === 'en' ? 'My Work' : 'Mes projets'}
            </h1>
            <p className="tagline">
              {stateLanguage === 'en'
                ? 'See some projects below !'
                : 'Voici quelques projets qui  me tiennent à coeur !'}
            </p>
          </div>
        </header>
      </RevealOnScroll>
      <RevealOnScroll>
        <ul className="card-layout">
          <Gallery works={data.otherWorks} />
          <Gallery works={data.selectedWorks} />
        </ul>
      </RevealOnScroll>
    </div>
  )
}
