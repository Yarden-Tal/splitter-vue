<template>
  <div>
    <!-- Bill -->
    <div>
      <div class="sub-title">Bill</div>
      <div class="icon-parent">
        <div class="icon"><img src="" alt="$"></div>
        <input type="number" name="bill" min="1" class="input-field" inputmode="decimal">
      </div>
    </div>
    <!-- Tip -->
    <div>
      <div class="sub-title">Select Tip %</div>
      <div class="options-container">
        <div class="option icon-parent" v-for="option in tipOptions" @click="updateTip(option); isCustom = false"
          :class="{ 'lighter-bg': option === chosenTip && !isCustom }">
          <div class="btn-txt">{{ option }}$</div>
        </div>
        <div @click="isCustom = true">
          <input placeholder="Custom" min="1" type="number" inputmode="decimal" @input="(e) => updateTip(e.target!.value)" class="custom-input-field">
        </div>
      </div>
    </div>
    <!-- Number of people -->
    <div>
      <div class="sub-title">Number of People</div>
      <div class="icon-parent">
        <div class="icon"><img src="" alt="Person"></div>
        <input type="number" min="1" max="100" inputmode="numeric" name="people" class="input-field">
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const chosenTip = ref<number>(15);
const isCustom = ref<boolean>(false);
const tipOptions = ref<number[]>([5, 10, 15, 25, 50]);

const updateTip = (num: number) => {
  chosenTip.value = num
}

</script>

<style scoped>
.input-field {
  text-align: right;
  color: #024749;
  font-weight: 900;
  padding: 12px;
  width: 100%;
  background-color: #F3F8FA;
  border: none;
  border-radius: 4px;
}

input:focus-within {
  border: none;
}

.icon-parent {
  position: relative;
}

.icon {
  position: absolute;
  top: 12px;
}

.sub-title {
  color: #3C6464;
}

.options-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
}

.option {
  color: #FFF;
  font-weight: 900;
  text-align: center;
  width: 100%;
  height: 44px;
  background-color: #00474B;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}

.radio {
  text-align: right;
  width: 100%;
  opacity: 0;
}

.custom-input-field {
  text-align: right;
  color: #3C6464;
  font-weight: 900;
  width: 100%;
  height: 100%;
  background-color: #F3F8FA;
  border: none;
  border-radius: 6px;
}


.lighter-bg {
  background-color: #26C2AE;
  color: #00474B;
}
</style>