<script setup lang="ts"></script>

<template>
  <div class="music-tabs">
    <span class="music-tabs__label">Music</span>

    <button class="music-tabs__item">
      Sims 2 OST
      <span class="music-tabs__duration"> 3:12:44 </span>
    </button>
  </div>
</template>

<style scoped>
.music-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: 14px;
  overflow-x: auto;
  padding-bottom: 2px;
}

.music-tabs__label {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.3;
  margin-right: 4px;
  align-self: center;
  flex-shrink: 0;
}

.music-tabs__item {
  padding: 5px 12px;
  border-radius: var(--radius-md);
  background: var(--bg-surface);
  color: var(--text-secondary);
  font-size: 12px;
  font-weight: 400;
  transition: all var(--transition-normal);
  flex-shrink: 0;
  white-space: nowrap;
}

.music-tabs__item--active {
  font-weight: 600;
}

.music-tabs__duration {
  font-size: 10px;
  opacity: 0.5;
  margin-left: 5px;
}
</style>
