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
        <CalcSection />
        <SummarySection />
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
}

body {
  background-color: #C5E4E8;
  box-sizing: border-box;
  margin: 0;
  width: 320px;
}

main {
  background-color: #fff;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.main-inner {
  padding: 30px;
}
</style>
