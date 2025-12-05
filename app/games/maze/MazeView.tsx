import React, { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { Maze } from './Maze'
import { Tile } from './Tile'

const MazeView = () => {
  const [maze, setMaze] = useState<Maze>(new Maze())
  const [_, forceUpdate] = useState(0) // to trigger rerenders
  const [showAll, setShowAll] = useState(true)
  const [gameState, setGameState] = useState<0 | 1 | 2>(0) // 0 = continue, 1 = win, 2 = loss
  const [playerEmoji, setPlayerEmoji] = useState('🙂')
  const [message, setMessage] = useState('')

  useEffect(() => {
    newGame()
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'w':
          movePlayer('up')
          break
        case 's':
          movePlayer('down')
          break
        case 'a':
          movePlayer('left')
          break
        case 'd':
          movePlayer('right')
          break
        default:
          return
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showAll])

  useEffect(() => {
    if (message !== '' && message !== 'Game Over') {
      setPlayerEmoji('🤕')
    } else {
      setPlayerEmoji('🙂')
    }
  }, [message])

  const movePlayer = (direction: 'up' | 'down' | 'left' | 'right') => {
    if (showAll) return

    switch (direction) {
      case 'up':
        maze.moveUp()
        break
      case 'down':
        maze.moveDown()
        break
      case 'left':
        maze.moveLeft()
        break
      case 'right':
        maze.moveRight()
        break
    }

    setMessage(maze.message)

    const gameState = maze.getState()
    switch (gameState) {
      case 0:
        break
      case 1:
        onWin()
        break
      case 2:
        onLoose()
        break
    }

    setGameState(gameState)
    forceUpdate(n => n + 1)
  }

  const onWin = () => {
    setShowAll(true)
    setPlayerEmoji('🥳')
  }

  const onLoose = () => {
    setShowAll(true)
    setPlayerEmoji('🙁')
    setMessage('Game over')
  }

  const newGame = () => {
    maze.generate()
    setPlayerEmoji('🙂')

    // Show full maze for 2 seconds
    const timer = setTimeout(() => {
      setShowAll(false)
    }, 2000)

    forceUpdate(n => n + 1)
  }

  return (
    <div className="p-4">
      <p className="text-lg text-white min-h-8">{message}</p>
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${maze.width}, 24px)` }}
      >
        {maze.grid.flat().map((tile: Tile, idx: number) => {
          const shouldShow = showAll || tile.isVisible
          let bgColor = 'bg-transparent'
          if (shouldShow) {
            if (tile.isEnd) {
              bgColor = 'bg-yellow-400'
            } else {
              bgColor = tile.isWall ? 'bg-white' : 'bg-gray-500'
            }
          }

          const isPlayerOnEnd = tile.hasPlayer && tile.isEnd
          let displayEmoji = tile.hasPlayer && shouldShow ? playerEmoji : ''

          return (
            <div
              key={idx}
              className={twMerge(
                'w-[24px] h-[24px] flex items-center justify-center text-xs font-bold leading-none',
                bgColor,
                'border border-gray-800',
              )}
            >
              {displayEmoji}
            </div>
          )
        })}
      </div>

      <div className="mt-4 flex gap-2 justify-center">
        {gameState ? (
          <button
            onClick={() => newGame()}
            className="px-2 py-1 bg-blue-500 text-white rounded"
          >
            New Game
          </button>
        ) : (
          <>
            <button
              onClick={() => movePlayer('up')}
              className="px-2 py-1 bg-blue-500 text-white rounded"
            >
              Up (W)
            </button>
            <button
              onClick={() => movePlayer('left')}
              className="px-2 py-1 bg-blue-500 text-white rounded"
            >
              Left (A)
            </button>
            <button
              onClick={() => movePlayer('down')}
              className="px-2 py-1 bg-blue-500 text-white rounded"
            >
              Down (S)
            </button>
            <button
              onClick={() => movePlayer('right')}
              className="px-2 py-1 bg-blue-500 text-white rounded"
            >
              Right (D)
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default MazeView
