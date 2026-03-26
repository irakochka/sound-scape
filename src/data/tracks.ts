import type { Track } from '@/interfaces/track.interface.ts'

export const tracksData: Track[] = [
  {
    id: 'sims',
    label: 'Sims 2 OST',
    duration: '3:12:44',
    totalSec: 11564,
    artist: 'Mark Mothersbaugh',
  },
  {
    id: 'jazz',
    label: 'Midnight jazz',
    duration: '2:45:00',
    totalSec: 9900,
    artist: 'Various Artists',
  },
  {
    id: 'ambient',
    label: 'Deep ambient',
    duration: '3:00:00',
    totalSec: 10800,
    artist: 'Brian Eno',
  },
  { id: 'lofi', label: 'Lofi coding', duration: '2:30:00', totalSec: 9000, artist: 'Chillhop' },
  {
    id: 'synth',
    label: 'Synthwave drive',
    duration: '1:48:33',
    totalSec: 6513,
    artist: 'RetroWave FM',
  },
]
