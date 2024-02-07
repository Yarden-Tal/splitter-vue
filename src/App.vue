<script setup lang="ts">
import SummarySection from './components/SummarySection.vue';
import CalcSection from './components/CalcSection.vue'
import MainTitle from './components/MainTitle.vue';
</script>

<template>
  <div class="bg">
    <MainTitle />
    <main>
      <div class="main-inner">
        <CalcSection class="half-w" />
        <SummarySection class="half-w" />
      </div>
    </main>
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  font-family: 'Space Mono', monospace;
}

body {
  background-color: #C5E4E8;
  box-sizing: border-box;
  margin: 0;
  min-width: 375px;
}

main {
  background-color: #fff;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.main-inner {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 0;
}

@media screen and (min-width: 1024px) {
  html {
  height: 100%;
  }
  .main-inner {
    flex-direction: row;
    gap: 2.5rem;
  }
  .half-w {
    width: 50%;
  }
}
</style>
