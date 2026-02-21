import { useState, useEffect } from 'react'
import { Button, ButtonGroup } from '@heroui/react'
import workerScript from '../workers/metronomeWorker?url'
import {
  PlusIcon,
  MinusIcon,
  PlayIcon,
  PauseIcon,
} from '@heroicons/react/24/solid'
import metronomeSrc from '../assets/sounds/metronome.mp3?url'

export function Metronome() {
  const [metronomeWorker, setMetronomeWorker] = useState<Worker>()
  const [bpm, setBpm] = useState(120)
  const [isPLaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // set Worker
    const worker = new Worker(new URL(workerScript, import.meta.url))
    worker.postMessage({ interval: 60000 / bpm })
    worker.onmessage = ({ data }) => {
      if (data === 'tick') {
        playMetronome()
      }
    }
    setMetronomeWorker(worker)
  }, [])

  useEffect(() => {
    isPLaying
      ? metronomeWorker?.postMessage('start')
      : metronomeWorker?.postMessage('stop')
  }, [isPLaying, metronomeWorker])

  useEffect(() => {
    metronomeWorker?.postMessage({ interval: 60000 / bpm })
  }, [bpm, metronomeWorker])

  function playMetronome() {
    const metronomeElement = document.getElementById(
      'metronome',
    ) as HTMLAudioElement
    if (!metronomeElement) return
    metronomeElement.currentTime = 0
    metronomeElement.play()
  }

  return (
    <div className="flex items-center gap-2">
      <audio src={metronomeSrc} id={'metronome'} />
      <ButtonGroup>
        <Button
          isIconOnly
          color={'primary'}
          onPress={() => setBpm(bpm + 10)}
          className="p-2"
        >
          <PlusIcon className="size-6" />
        </Button>
        <Button
          isIconOnly
          color={'primary'}
          onPress={() => setBpm(bpm - 10)}
          className="p-2"
        >
          <MinusIcon className="size-6" />
        </Button>
      </ButtonGroup>

      <span className={'min-w-24 text-center text-lg'}>{bpm} bpm</span>
      <Button
        onPress={() => setIsPlaying(!isPLaying)}
        isIconOnly
        className="p-2"
        color="success"
      >
        {isPLaying ? (
          <PauseIcon className="size-6" />
        ) : (
          <PlayIcon className="size-6" />
        )}
      </Button>
    </div>
  )
}
