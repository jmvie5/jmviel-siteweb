import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Board } from './Board'
import { Button, Input } from '@heroui/react'

export default function DadScrabble() {
  const [inputValue, setInputValue] = useState('')
  const [board, setBoard] = useState(new Board())
  const [errors, setErrors] = useState('')

  const addNewWord = (word: string) => {
    try {
      board.addWord(word)
    } catch (e: any) {
      setErrors(e.message as string)
      return
    }
    setErrors('')
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-20 gap-2">
          {board.grid.map((row, i) =>
            row.map((cell, j) => <p key={`${i}-${j}`}>{cell}</p>),
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
