<script setup lang="ts">
import AppIcon from './AppIcon.vue'
</script>

<template>
  <div class="scene-tabs">
    <span class="scene-tabs__label">Scene</span>

    <button class="scene-tabs__item">
      <span class="scene-tabs__icon">💚</span>
      The Sims 2
    </button>

    <button class="scene-tabs__fullscreen">
      <AppIcon name="shrink" :size="16" />
    </button>
  </div>
</template>

<style scoped>
.scene-tabs {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 14px 16px;
  overflow-x: auto;
  flex-shrink: 0;
}

.scene-tabs--fullscreen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  transition:
    opacity 0.5s,
    transform 0.5s;
}

.scene-tabs--hidden {
  opacity: 0;
  transform: translateY(-20px);
}

.scene-tabs__label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.3;
  margin-right: 6px;
  flex-shrink: 0;
}

.scene-tabs__item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 14px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  transition: all var(--transition-normal);
  flex-shrink: 0;
  white-space: nowrap;
}

.scene-tabs__icon {
  font-size: 13px;
}

.scene-tabs__fullscreen {
  margin-left: auto;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-light);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0.5;
  transition: opacity var(--transition-fast);
}

.scene-tabs__fullscreen:hover {
  opacity: 0.8;
}
</style>
