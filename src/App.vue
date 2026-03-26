<script setup lang="ts">
import VideoArea from '@/components/VideoArea.vue'
import SceneTabs from '@/components/SceneTabs.vue'
import AudioBar from '@/components/AudioBar.vue'
</script>

<template>
  <div class="app">
    <SceneTabs />

    <VideoArea />

    <AudioBar />
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
