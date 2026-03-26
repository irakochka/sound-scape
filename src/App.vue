<script setup lang="ts">
import VideoArea from '@/components/VideoArea.vue'
import SceneTabs from '@/components/SceneTabs.vue'
import AudioBar from '@/components/AudioBar.vue'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import type { Scene } from '@/interfaces/scene.interface.ts'
import { scenesData } from '@/data/scenes.ts'
import { tracksData } from '@/data/tracks.ts'
import type { Track } from '@/interfaces/track.interface.ts'

// Данные
const scenes = scenesData
const tracks = tracksData

// Реактивные переменные
const activeScene = ref<Scene>(scenes[0]!)
const activeTrack = ref<Track>(tracks[0]!)
const isPlaying = ref<boolean>(false)
const volume = ref<number>(70) // звук
const elapsed = ref(0) // сколько секунд трека уже проиграло

// Получаем текущий акцентный цвет
const accentColor = computed(() => activeScene.value.accentColor)

// fake playback timer (UI-only, no real audio) ───
let playTimer: number | null = null

function startTimer() {
  stopTimer()
  playTimer = setInterval(() => {
    elapsed.value = elapsed.value >= activeTrack.value.totalSec ? 0 : elapsed.value + 1
  }, 1000)
}

function stopTimer() {
  if (playTimer) {
    clearInterval(playTimer)
    playTimer = null
  }
}

watch(isPlaying, (val) => {
  val ? startTimer() : stopTimer()
})

onBeforeUnmount(() => stopTimer())

function onSelectScene(scene: Scene) {
  activeScene.value = scene
}

function onSelectTrack(track: Track) {
  activeTrack.value = track
  elapsed.value = 0
  if (!isPlaying.value) isPlaying.value = true
}

function onTogglePlay() {
  isPlaying.value = !isPlaying.value
}

function onNextTrack() {
  const idx = tracks.findIndex((t) => t.id === activeTrack.value.id)
  activeTrack.value = tracks[(idx + 1 + tracks.length) % tracks.length]!
  elapsed.value = 0
}

function onPrevTrack() {
  const idx = tracks.findIndex((t) => t.id === activeTrack.value.id)
  activeTrack.value = tracks[(idx - 1 + tracks.length) % tracks.length]!
  elapsed.value = 0
}

function onSeek(percent: number) {
  elapsed.value = Math.floor(percent * activeTrack.value.totalSec)
}

function onUpdateVolume(vol: number) {
  volume.value = vol
}
</script>

<template>
  <div class="app">
    <SceneTabs :scenes="scenes" :activeScene="activeScene" @select-scene="onSelectScene" />

    <VideoArea :scene="activeScene" :is-playing="isPlaying" />

    <AudioBar
      :tracks="tracks"
      :activeTrack="activeTrack"
      :accentColor="accentColor"
      :is-playing="isPlaying"
      :volume="volume"
      :elapsed="elapsed"
      @select-track="onSelectTrack"
      @toggle-play="onTogglePlay"
      @prev="onPrevTrack"
      @next="onNextTrack"
      @seek="onSeek"
      @update-volume="onUpdateVolume"
    />
  </div>
</template>

<style scoped>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 18px;
  position: relative;
  background: var(--bg-app);
  max-width: 1200px;
  user-select: none;
  margin: 0 auto;
}

.app--fullscreen {
  max-width: none;
  margin: 0;
  border-radius: 0;
  height: 100vh;
}
</style>
