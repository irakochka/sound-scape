import type { Track } from '@/interfaces/track.interface.ts'

export const tracksData: Track[] = [
  {
    id: 'sims',
    label: 'Main Theme',
    duration: '4:23',
    totalSec: 263,
    artist: 'Mark Mothersbaugh',
    src: '/audio/the-sims-2.mp3',
  },
  {
    id: 'jazz',
    label: 'Arthur Vyncke',
    duration: '2:35',
    totalSec: 155,
    artist: 'Approaching Mars',
    src: '/audio/forest.mp3',
  },
  {
    id: 'ambient',
    label: 'MaYuL',
    duration: '2:38',
    totalSec: 158,
    artist: 'Lantern',
    src: '/audio/fireplace.mp3',
  },
  {
    id: 'lofi',
    label: 'Scott Buckley',
    duration: '4:50',
    totalSec: 290,
    artist: 'Machina',
    src: '/audio/space.mp3',
  },
]
