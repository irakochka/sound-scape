import { onBeforeUnmount, ref, watch } from 'vue'

export function useAudioPlayer() {
  const audio = new Audio()

  const isPlaying = ref(false)
  const elapsed = ref(0)
  const duration = ref(0)
  const volume = ref(70)

  audio.addEventListener('timeupdate', () => {
    elapsed.value = audio.currentTime
  })

  audio.addEventListener('loadedmetadata', () => {
    duration.value = audio.duration
  })

  audio.addEventListener('ended', () => {
    isPlaying.value = false
  })

  function loadTrack(src: string) {
    audio.src = src
    audio.load()
    elapsed.value = 0
    isPlaying.value = false
  }

  function play() {
    audio.play()
    isPlaying.value = true
  }

  function pause() {
    audio.pause()
    isPlaying.value = false
  }

  function togglePlay() {
    isPlaying.value ? pause() : play()
  }

  function seek(pct: number) {
    audio.currentTime = pct * audio.duration
    elapsed.value = audio.currentTime
  }

  function setVolume(val: number) {
    volume.value = val
    audio.volume = val / 100
  }

  // начальная громкость
  audio.volume = volume.value / 100

  watch(volume, (val) => {
    audio.volume = val / 100
  })

  onBeforeUnmount(() => {
    audio.pause()
    audio.src = ''
  })

  return {
    isPlaying,
    elapsed,
    duration,
    volume,
    loadTrack,
    play,
    pause,
    togglePlay,
    seek,
    setVolume,
  }
}
