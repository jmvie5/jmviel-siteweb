import metronomeSrc from './metronome.mp3?url'

import { Howl } from 'howler'

export const metronomePlayer = new Howl({
  src: metronomeSrc,
})
