<script setup lang="ts">
import MusicTabs from '@/components/MusicTabs.vue'
import WaveformBar from '@/components/WaveformBar.vue'
import PlayerControls from '@/components/PlayerControls.vue'
</script>

<template>
  <div class="audio-bar">
    <MusicTabs />

    <WaveformBar />

    <PlayerControls />
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
