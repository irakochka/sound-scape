<script setup lang="ts">
</script>

<template>
  <div class="waveform">
    <!-- кликабельная область с барами -->
    <div class="waveform__track">
      <!-- 120 столбиков -->
      <div class="waveform__bars">
        <div class="waveform__bar" />
      </div>

      <!-- вертикальная линия-playhead -->
      <div class="waveform__playhead" />
    </div>

    <!-- время -->
    <div class="waveform__times">
      <span>0:00</span>
      <span>3:12:44</span>
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
