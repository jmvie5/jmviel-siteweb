import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Board } from './Board'
import { Button, Input } from '@heroui/react'

export default function DadScrabble() {
  const [inputValue, setInputValue] = useState('')
  const [board, setBoard] = useState(new Board())

  const addNewWord = (word: string) => {
    board.addWord(word)
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-20 gap-2">
          {board.grid.map(row => row.map(cell => <p>{cell}</p>))}
        </div>
        <div className="flex gap-2">
          <Input
            color={'primary'}
            variant={'faded'}
            placeholder="Mot à ajouter"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <Button
            color={'primary'}
            onPress={() => {
              addNewWord(inputValue)
              setInputValue('')
            }}
          >
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  )
}
