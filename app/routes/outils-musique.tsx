import type { Route } from './+types/outils-musique.js'
import i18nServer from '~/i18next.server.js'
import { Button, Divider } from '@heroui/react'
import { useState } from 'react'
import { Scale } from 'tonal'
import { shuffleArray } from '~/utils/shuffleArray.js'

export async function loader({ request, params }: Route.LoaderArgs) {
  const locale = params.lang ? params.lang : await i18nServer.getLocale(request)

  const t = await i18nServer.getFixedT(locale)

  const title = t('music-tools-title')
  const description = t('music-tools-desc')

  return { title, description }
}

export default function OutilsMusique() {
  const noteFrenchNameMap: { [letter: string]: string } = {
    C: 'Do',
    D: 'Ré',
    E: 'Mi',
    F: 'Fa',
    G: 'Sol',
    A: 'La',
    B: 'Si',
  }
  const alterationsFrenchNameMap: { [alteration: string]: string } = {
    '#': 'dièse',
    b: 'bémol',
  }

  const [combination, setCombination] = useState<string[]>([])
  const [frenchCombination, setFrenchCombination] = useState<string[]>([])
  function newCombination() {
    const chromaticScale = shuffleArray(Scale.get('C chromatic').notes)
    const frenchChromaticScale = chromaticScale.map(note => {
      if (note.includes('b')) {
        const [letter, alteration] = note.split('')
        return `${noteFrenchNameMap[letter]} ${alterationsFrenchNameMap[alteration]}`
      }
      return noteFrenchNameMap[note]
    })
    setCombination(chromaticScale)
    setFrenchCombination(frenchChromaticScale)
  }

  return (
    <div className="flex min-h-dvh justify-center">
      <div className="flex flex-col justify-between w-full">
        <main className="flex flex-col h-full">
          <div className="space-y-4 mx-2 sm:mx-4 flex flex-col items-center my-4">
            <h2
              id="info-web"
              className="text-2xl font-semibold text-foreground text-center  "
            >
              Générateur de mélodie: <br />
              12 demi-tons chromatiques
            </h2>
            <div className={'flex gap-2 items-center justify-center flex-wrap'}>
              {frenchCombination.map((note, index) => (
                <div key={`${note}`} className={'flex items-center gap-2'}>
                  <span>{note}</span>
                  {index !== frenchCombination.length - 1 && (
                    <Divider
                      orientation={'vertical'}
                      className={' bg-primary h-6'}
                    />
                  )}
                </div>
              ))}
            </div>
            <Button color={'primary'} onPress={newCombination}>
              Nouvelle combinaison
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
