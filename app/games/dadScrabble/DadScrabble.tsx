import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Board } from './Board'

export default function DadScrabble() {
  const [inputValue, setInputValue] = useState('')

  const addNewWord = (word: string) => {
    console.log(word)
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Dad Scrabble</h1>
        <div className="grid grid-cols-15 gap-2"></div>
        <div className="flex gap-2">
          <input
            className="w-40 border rounded border-white text-white p-2"
            placeholder="Mot à ajouter"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => {
              addNewWord(inputValue)
              setInputValue('')
            }}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}
