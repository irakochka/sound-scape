<script setup lang="ts">
import AppIcon from '@/components/AppIcon.vue'
</script>

<template>
  <div class="controls">
    <!-- левая часть: инфо о треке -->
    <div class="controls__info">
      <div class="controls__title">Sims 2 OST</div>
      <div class="controls__artist">Mark Mothersbaugh</div>
    </div>

    <!-- центр: кнопки воспроизведения -->
    <div class="controls__playback">
      <button class="controls__btn">
        <AppIcon name="prev" :size="18" />
      </button>

      <button class="controls__btn controls__btn--play">
        <AppIcon name="play" :size="28" />
      </button>

      <button class="controls__btn">
        <AppIcon name="next" :size="18" />
      </button>
    </div>

    <!-- правая часть: громкость -->
    <div class="controls__volume">
      <AppIcon name="volume" :size="14" />
      <input type="range" min="0" max="100" class="controls__volume-slider" />
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
