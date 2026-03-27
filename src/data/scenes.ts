import type { Scene } from '@/interfaces/scene.interface.ts'

export const scenesData: Scene[] = [
  {
    id: 'sims',
    label: 'The Sims 2',
    icon: '💚',
    accentColor: '#6BE36B',
    gradient: 'linear-gradient(160deg, #0f1720 0%, #1c2b22 45%, #0b1110 100%)',
    type: 'image',
    src: '/sound-scape/images/the-sims-2.jpg'
  },
  {
    id: 'forest',
    label: 'Forest',
    icon: '🌲',
    accentColor: '#5dba63',
    gradient: 'linear-gradient(160deg, #0a1a0f 0%, #1a2e1a 40%, #0f1f12 100%)',
    type: 'image',
    src: '/sound-scape/images/forest.jpg'
  },
  {
    id: 'ocean',
    label: 'Ocean',
    icon: '🌊',
    accentColor: '#4db8d1',
    gradient: 'linear-gradient(160deg, #0a1520 0%, #0f2a3d 40%, #071218 100%)',
    type: 'image',
    src: '/sound-scape/images/ocean.jpg'
  },
  {
    id: 'rain',
    label: 'Rainy city',
    icon: '🌧',
    accentColor: '#8b8fc7',
    gradient: 'linear-gradient(160deg, #121218 0%, #1e1e2e 40%, #0e0e16 100%)',
    type: 'image',
    src: '/sound-scape/images/rainy-city.jpg'
  },
  {
    id: 'fire',
    label: 'Fireplace',
    icon: '🔥',
    accentColor: '#e09840',
    gradient: 'linear-gradient(160deg, #1a0f05 0%, #2e1a08 40%, #120a02 100%)',
    type: 'image',
    src: '/sound-scape/images/fireplace.jpg'
  },
  {
    id: 'space',
    label: 'Space',
    icon: '✦',
    accentColor: '#9b7ce8',
    gradient: 'linear-gradient(160deg, #06060f 0%, #10102a 40%, #08081a 100%)',
    type: 'image',
    src: '/sound-scape/images/space.jpg'
  },
]
