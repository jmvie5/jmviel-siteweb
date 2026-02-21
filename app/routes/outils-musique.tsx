import i18nServer from '~/i18next.server.js'
import { Button, Card, CardBody, Divider, Tab, Tabs } from '@heroui/react'
import { useEffect, useState } from 'react'
import { Scale } from 'tonal'
import { shuffleArray } from '~/utils/shuffleArray.js'
import { Metronome } from '~/components/Metronome.js'
import { VexFlow } from 'vexflow'

export async function loader() {
  const t = await i18nServer.getFixedT('fr')

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
  const [selectedTab, setSelectedTab] = useState<string | number>('fr')
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
    setCombination(useGoodSymbols(chromaticScale))
    setFrenchCombination(frenchChromaticScale)
  }

  function useGoodSymbols(notes: string[]) {
    return notes.map(note => {
      return note.replace('b', '♭').replace('#', '♯')
    })
  }

  function addBecareInLine(line: string) {
    const notes = line.split(',').map(n => n.trim())
    const lettersSeenWithModifiers = new Set()

    const modified = notes.map(note => {
      const letter = note[0]
      const secondChar = note[1]

      // If this note has a modifier, track it
      if (secondChar === '#' || secondChar === 'b') {
        lettersSeenWithModifiers.add(letter)
        return note
      }

      // If this note has no modifier but we've already seen its letter with a modifier
      if (lettersSeenWithModifiers.has(letter)) {
        return letter + 'n' + note.slice(1)
      }

      return note
    })

    return modified.join(', ')
  }

  function drawSheetMusic() {
    const factory = new VexFlow.Factory({
      renderer: { elementId: 'sheet_music', width: 320, height: 300 },
    })
    let sysWidth = 300
    const score = factory.EasyScore()
    let system = factory.System({ x: 10, y: 0, width: sysWidth })

    let firstLine = `${combination[0].replace('♭', 'b')}4/q`

    for (let i = 1; i < 4; i++) {
      firstLine = firstLine.concat(', ', combination[i].replace('♭', 'b') + '4')
    }
    firstLine = addBecareInLine(firstLine)
    let secondLine = `${combination[4].replace('♭', 'b')}4/q`
    for (let i = 5; i < 8; i++) {
      secondLine = secondLine.concat(
        ', ',
        combination[i].replace('♭', 'b') + '4',
      )
    }
    secondLine = addBecareInLine(secondLine)

    let thirdLine = `${combination[8].replace('♭', 'b')}4/q`
    for (let i = 9; i < 12; i++) {
      thirdLine = thirdLine.concat(', ', combination[i].replace('♭', 'b') + '4')
    }
    thirdLine = addBecareInLine(thirdLine)

    score.set({ time: `4/4` })
    system
      .addStave({
        voices: [score.voice(score.notes(firstLine))],
      })
      .addTimeSignature('4/4')
      .addClef('treble')
      .setEndBarType(1)
    // 2nd Line
    system = factory.System({ x: 10, y: 90, width: sysWidth })
    system
      .addStave({
        voices: [score.voice(score.notes(secondLine))],
      })
      .addClef('treble')
      .setEndBarType(1)
    // 3rd Line
    system = factory.System({ x: 10, y: 180, width: sysWidth })
    system
      .addStave({
        voices: [score.voice(score.notes(thirdLine))],
      })
      .addClef('treble')
      .setEndBarType(3)
    factory.draw()
  }

  useEffect(() => {
    newCombination()
  }, [])

  function removeStaff() {
    const sheet = document.getElementById('sheet_music')
    while (sheet?.firstChild) {
      sheet.removeChild(sheet.firstChild)
    }
  }

  useEffect(() => {
    if (selectedTab === 'Partition') {
      removeStaff()
      drawSheetMusic()
    }
  }, [selectedTab, combination])

  return (
    <div className="flex min-h-dvh justify-center">
      <div className="flex flex-col justify-between w-full">
        <main className="flex flex-col h-full">
          <div className="space-y-4 mx-2 sm:mx-4 flex flex-col items-center my-4">
            <Metronome />
            <Divider />
            <h2
              id="info-web"
              className="text-2xl font-semibold text-foreground text-center  "
            >
              Générateur de mélodie: <br />
              12 demi-tons chromatiques
            </h2>
            <Tabs
              aria-label="Gamme"
              selectedKey={selectedTab}
              onSelectionChange={setSelectedTab}
            >
              <Tab key="fr" title="Noms des notes">
                <Card>
                  <CardBody>
                    <div className={'grid grid-cols-4 gap-2'}>
                      {frenchCombination.map((note, index) => (
                        <span
                          key={`${note}`}
                          className={
                            'flex justify-center border-primary border-1 aspect-square p-2 items-center gap-2'
                          }
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="en" title="Notation anglaise">
                <Card>
                  <CardBody>
                    <div className={'grid grid-cols-4 gap-2'}>
                      {combination.map((note, index) => (
                        <span
                          key={`${note}`}
                          className={
                            'flex justify-center border-primary border-1 aspect-square p-2 items-center gap-2'
                          }
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="Partition" title="Partition">
                <Card>
                  <CardBody>
                    <div id="sheet_music" className={'bg-white'}></div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
            <Button color={'primary'} onPress={newCombination}>
              Nouvelle combinaison
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}
