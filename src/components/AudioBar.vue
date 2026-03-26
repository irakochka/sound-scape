<script setup lang="ts">
import MusicTabs from '@/components/MusicTabs.vue'
import WaveformBar from '@/components/WaveformBar.vue'
import PlayerControls from '@/components/PlayerControls.vue'
import type { Track } from '@/interfaces/track.interface.ts'

interface Props {
  tracks: Track[]
  activeTrack: Track
  accentColor: string
  isPlaying: boolean
  volume: number
  elapsed: number
}

interface Emits {
  selectTrack: [track: Track]
  togglePlay: []
  next: []
  prev: []
  seek: [percent: number]
  updateVolume: [volume: number]
}

defineProps<Props>()
const emits = defineEmits<Emits>()
</script>

<template>
  <div class="audio-bar">
    <MusicTabs
      :tracks="tracks"
      :activeTrack="activeTrack"
      :accentColor="accentColor"
      @select-track="emits('selectTrack', $event)"
    />

    <WaveformBar
      :elapsed="elapsed"
      :total-sec="activeTrack.totalSec"
      :duration="activeTrack.duration"
      :accent-color="accentColor"
      @seek="emits('seek', $event)"
    />

    <PlayerControls
      :track="activeTrack"
      :is-playing="isPlaying"
      :accentColor="accentColor"
      :volume="volume"
      @toggle-play="emits('togglePlay')"
      @prev="emits('prev')"
      @next="emits('next')"
      @update-volume="emits('updateVolume', $event)"
    />
  </div>
</template>

<style scoped>
.audio-bar {
  flex-shrink: 0;
  padding: 14px 16px 16px;
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.audio-bar--fullscreen {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: 50px 20px 18px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.5) 60%,
    transparent 100%
  );
}

.audio-bar--hidden {
  opacity: 0;
  transform: translateY(30px);
}
</style>
