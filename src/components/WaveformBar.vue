<script setup lang="ts">
import { computed } from 'vue'
import { formatTime } from '@/utils/formatTime.ts'

interface Props {
  elapsed: number
  totalSec: number
  duration: string
  accentColor: string
}

interface Emits {
  seek: [percent: number]
}

const props = defineProps<Props>()
const emits = defineEmits<Emits>()

const elapsedFormatted = computed(() => formatTime(props.elapsed))

// Pre-generate waveform bar heights (deterministic seed-like approach)
const bars = Array.from({ length: 120 }, (_, i) => {
  const h = 8 + Math.sin(i * 0.3) * 12 + Math.cos(i * 0.7) * 8 + (((i * 7 + 13) % 17) / 17) * 6
  return Math.max(15, Math.min(90, h * 2.2))
})

const progress = computed(() => (props.totalSec > 0 ? (props.elapsed / props.totalSec) * 100 : 0))

function clickBarHandler(event: MouseEvent) {
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const percent = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
  emits('seek', percent)
}
</script>

<template>
  <div class="waveform">
    <!-- кликабельная область с барами -->
    <div class="waveform__track" @click="clickBarHandler">
      <!-- 120 столбиков -->
      <div class="waveform__bars">
        <div
          v-for="(h, i) in bars"
          :key="i"
          class="waveform__bar"
          :style="{
            height: h + '%',
            background: (i / bars.length) * 100 < progress ? accentColor : 'rgba(255,255,255,0.08)',
            opacity: (i / bars.length) * 100 < progress ? 0.5 + (i / bars.length) * 0.5 : 0.6,
          }"
        />
      </div>

      <!-- вертикальная линия-playhead -->
      <div
        class="waveform__playhead"
        :style="{
          left: progress + '%',
          background: accentColor,
          boxShadow: `0 0 8px ${accentColor}`,
        }"
      />
    </div>

    <!-- время -->
    <div class="waveform__times">
      <span>{{ elapsedFormatted }}</span>
      <span>{{ duration }}</span>
    </div>
  </div>
</template>

<style scoped>
.waveform {
  margin-bottom: 12px;
}

.waveform__track {
  position: relative;
  height: 40px;
  cursor: pointer;
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: var(--bg-surface);
}

.waveform__bars {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  gap: 1.5px;
  padding: 0 2px;
}

.waveform__bar {
  flex: 1;
  border-radius: 1px;
  transition: background var(--transition-fast);
}

.waveform__playhead {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  border-radius: 1px;
  transition: left 0.3s linear;
}

.waveform__times {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 11px;
  opacity: 0.35;
  font-variant-numeric: tabular-nums;
}
</style>
