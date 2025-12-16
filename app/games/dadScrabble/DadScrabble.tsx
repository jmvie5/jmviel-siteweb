import { useState, useEffect } from 'react'
import { Board } from './Board'
import { Button, Input } from '@heroui/react'
import { useTranslation } from 'react-i18next'

export default function DadScrabble() {
  const [inputValue, setInputValue] = useState('')
  const [board, setBoard] = useState(new Board())
  const [errors, setErrors] = useState('')
  const [availableLetters, setAvailableLetters] = useState<string[]>(
    board.availableLetters,
  )
  const [gameScore, setGameScore] = useState(0)
  const [gameState, setGameState] = useState<'started' | 'over'>('started')
  const [highScore, setHighScore] = useState(0)

  const locale = useTranslation().i18n.language

  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()
    if (key === 'enter') {
      addNewWord()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onKeyDown])

  const addNewWord = async (word: string = inputValue) => {
    try {
      const isValid = await doesWordExist(word)
      if (!isValid) {
        throw new Error(`Le mot ${word} n'existe pas`)
      }
      board.addWord(word)
    } catch (e: any) {
      setErrors(e.message as string)
      return
    }
    setAvailableLetters(board.availableLetters)
    setErrors('')
    setInputValue('')
  }

  const gameOver = () => {
    setGameState('over')
    const score = board.getScore()
    setGameScore(score)
    if (score > highScore) {
      setHighScore(score)
    }
  }

  const newGame = () => {
    const newBoard = new Board()
    setBoard(newBoard)
    setAvailableLetters(newBoard.availableLetters)
    setErrors('')
    setInputValue('')
    setGameScore(0)
    setGameState('started')
  }

  const doesWordExist = async (word: string): Promise<boolean> => {
    const response = await fetch(
      `https://${locale}.wiktionary.org/w/api.php?action=query&titles=${word}&prop=revisions&rvprop=content&format=json&origin=*`,
    )
    const data = await response.json()
    // Invalid words have query.pages['-1'] key
    return !(
      data &&
      typeof data === 'object' &&
      'query' in data &&
      data.query &&
      typeof data.query === 'object' &&
      'pages' in data.query &&
      data.query.pages &&
      typeof data.query.pages === 'object' &&
      '-1' in data.query.pages
    )
  }

  const tileClass = 'p-2 rounded-xl border aspect-square text-center'

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div>HighScore : {highScore}</div>
        <div>
          Available letters :{' '}
          <div className={'grid grid-cols-6 sm:grid-cols-13 gap-1'}>
            {availableLetters.map(l => (
              <p className={tileClass}>{l}</p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-20 gap-2">
          {board.grid.map((row, i) =>
            row.map((cell, j) => (
              <p className={cell !== ' ' ? tileClass : ''} key={`${i}-${j}`}>
                {cell}
              </p>
            )),
          )}
        </div>
        <div className="flex gap-2">
          <Input
            color={'primary'}
            variant={'faded'}
            placeholder="Mot à ajouter"
            value={inputValue}
            onChange={e => {
              setErrors('')
              setInputValue(e.target.value)
            }}
            errorMessage={errors}
            isInvalid={errors.length > 0}
            isDisabled={gameState === 'over'}
          />
          {gameState === 'over' ? (
            <>
              <Button color={'primary'} onPress={newGame} className={'px-8'}>
                Nouvelle partie
              </Button>
              <Button color={'success'} onPress={() => window.print()}>
                Imprimer
              </Button>
            </>
          ) : (
            <>
              <Button color={'primary'} onPress={() => addNewWord()}>
                Ajouter
              </Button>
              <Button color={'danger'} onPress={gameOver}>
                Terminer
              </Button>
            </>
          )}
        </div>
        <div>{gameState === 'over' && <p>Score : {gameScore}</p>}</div>
      </div>
    </div>
  )
}
