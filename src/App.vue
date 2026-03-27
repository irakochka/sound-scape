<script setup lang="ts">
import VideoArea from '@/components/VideoArea.vue'
import SceneTabs from '@/components/SceneTabs.vue'
import AudioBar from '@/components/AudioBar.vue'
import { computed, ref } from 'vue'
import type { Scene } from '@/interfaces/scene.interface.ts'
import { scenesData } from '@/data/scenes.ts'
import { tracksData } from '@/data/tracks.ts'
import type { Track } from '@/interfaces/track.interface.ts'
import { useAudioPlayer } from '@/composables/useAudioPlayer.ts'

// Данные
const scenes = scenesData
const tracks = tracksData

// Реактивные переменные
const activeScene = ref<Scene>(scenes[0]!)
const activeTrack = ref<Track>(tracks[0]!)

const { isPlaying, elapsed, volume, loadTrack, togglePlay, seek, setVolume } = useAudioPlayer()

loadTrack(tracks[0]!.src!)

// Получаем текущий акцентный цвет
const accentColor = computed(() => activeScene.value.accentColor)

function onSelectScene(scene: Scene) {
  activeScene.value = scene
}

function onSelectTrack(track: Track) {
  activeTrack.value = track
  if (track.src) {
    loadTrack(track.src)
    setTimeout(() => togglePlay(), 100)
  }
}

function onNextTrack() {
  const idx = tracks.findIndex((t) => t.id === activeTrack.value.id)
  const track = tracks[(idx + 1) % tracks.length]!
  activeTrack.value = track
  if (track.src) {
    loadTrack(track.src)
    setTimeout(() => togglePlay(), 100)
  }
}

function onPrevTrack() {
  const idx = tracks.findIndex((t) => t.id === activeTrack.value.id)
  const track = tracks[(idx - 1 + tracks.length) % tracks.length]!
  activeTrack.value = track
  if (track.src) {
    loadTrack(track.src)
    setTimeout(() => togglePlay(), 100)
  }
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
      @toggle-play="togglePlay"
      @prev="onPrevTrack"
      @next="onNextTrack"
      @seek="seek"
      @update-volume="setVolume"
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
