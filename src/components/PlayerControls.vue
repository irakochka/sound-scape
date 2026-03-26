<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
import type { Track } from '@/interfaces/track.interface.ts'

interface Props {
  track: Track
  accentColor: string
  isPlaying: boolean
  volume: number
}

interface Emits {
  togglePlay: []
  next: []
  prev: []
  updateVolume: [volume: number]
}

defineProps<Props>()
const emits = defineEmits<Emits>()

function volumeInputHandler(event: InputEvent) {
  emits('updateVolume', Number((event.target as HTMLInputElement).value))
}
</script>

<template>
  <div class="controls">
    <!-- левая часть: инфо о треке -->
    <div class="controls__info">
      <div class="controls__title">{{ track.label }}</div>
      <div class="controls__artist">{{ track.artist }}</div>
    </div>

    <!-- центр: кнопки воспроизведения -->
    <div class="controls__playback">
      <button class="controls__btn" @click="emits('prev')">
        <AppIcon name="prev" :size="18" />
      </button>

      <button
        class="controls__btn controls__btn--play"
        :style="{
          background: accentColor + '20',
          borderColor: accentColor + '30',
          color: accentColor,
        }"
        @click="emits('togglePlay')"
      >
        <AppIcon :name="isPlaying ? 'pause' : 'play'" :size="28" />
      </button>

      <button class="controls__btn" @click="emits('next')">
        <AppIcon name="next" :size="18" />
      </button>
    </div>

    <!-- правая часть: громкость -->
    <div class="controls__volume">
      <AppIcon name="volume" :size="14" />
      <input
        :value="volume"
        :style="{
          background: `linear-gradient(to right, ${accentColor}88 ${volume}%, rgba(255,255,255,0.1) ${volume}%)`,
        }"
        @input="volumeInputHandler"
        type="range"
        min="0"
        max="100"
        class="controls__volume-slider"
      />
    </div>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.controls__info {
  flex: 1;
  min-width: 0;
}

.controls__title {
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.controls__artist {
  font-size: 11px;
  opacity: 0.35;
  margin-top: 1px;
}

.controls__playback {
  display: flex;
  align-items: center;
  gap: 2px;
}

.controls__btn {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
}

.controls__btn--play {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-xl);
  border: 1px solid;
}

.controls__volume {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
}

.controls__volume-slider {
  width: 70px;
  height: 3px;
  border-radius: 2px;
}
</style>
