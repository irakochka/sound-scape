<script setup lang="ts">
import type { Scene } from '@/interfaces/scene.interface.ts'

interface Props {
  scene: Scene
  isPlaying: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="video-area">
    <!-- градиентный фон -->
    <div class="video-area__bg" />

    <!-- видео -->
    <div class="video-area__particles">
      <div class="video-area__particle" />
    </div>

    <!-- центральная инфо -->
    <div class="video-area__center">
      <div class="video-area__scene-icon">{{ scene.icon }}</div>
      <div class="video-area__scene-label">{{ scene.label }}</div>

      <!-- пульс при воспроизведении -->
      <div v-if="isPlaying" class="video-area__pulse" :style="{ borderColor: scene.accentColor }"/>
    </div>

    <!-- бейдж типа контента -->
    <div class="video-area__badge">
      <span class="video-area__badge-dot" />
      {{ scene.type }}
    </div>
  </div>
</template>

<style scoped>
.video-area {
  position: relative;
  overflow: hidden;
  flex: 1;
  margin: 0 12px;
  border-radius: 14px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.video-area--fullscreen {
  margin: 0;
  border-radius: 0;
}

.video-area__bg {
  position: absolute;
  inset: 0;
  transition: background 1s ease;
}

.video-area__particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.video-area__particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.2;
  animation: drift ease-in-out infinite alternate;
}

.video-area__center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.video-area__scene-icon {
  font-size: 44px;
  margin-bottom: 8px;
  filter: saturate(0.8);
}

.video-area__scene-label {
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  opacity: 0.25;
  font-weight: 500;
}

.video-area__pulse {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid;
  animation: pulse-ring 3s ease-in-out infinite;
}

.video-area__badge {
  position: absolute;
  top: 12px;
  left: 14px;
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  font-size: 10px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  opacity: 0.5;
  display: flex;
  align-items: center;
  gap: 5px;
}

.video-area__badge-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #4ade80;
}
</style>
