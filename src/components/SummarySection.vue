<template>
  <div class="summary-section">
    <div class="amount">
      <div class="flex">
        <div>
          <div class="white-txt">Tip Amount</div>
          <div class="greenish-txt">/ person</div>
        </div>
        <div class="amount-txt">${{ store.tipPerPerson.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
      </div>
      <div class="flex mt">
        <div>
          <div class="white-txt">Total</div>
          <div class="greenish-txt">/ person</div>
        </div>
        <div class="amount-txt">${{ store.totalPerPerson.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
      </div>
    </div>
    <button class="mt" :class="{'faded': store.bill === 0 && store.customTipAmount === 0 && store.people === 1 && store.tipAmount === 0}" @click="store.resetAll()">RESET</button>
  </div>
</template>

<script setup lang="ts">
import { useTipStore } from './../store'
const store = useTipStore();
</script>

<style scoped>
.mt {
  margin-top: 1.5rem;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faded {
  opacity: 0.3;
}
.greenish-txt {
  color: #759A9A;
}
.white-txt {
  color: #FFF;
}
.amount-txt {
  color: #26C2AE;
  font-weight: 900;
}
.summary-section {
  margin-top: 2rem;
  background-color: #00474B;
  border-radius: 15px;
  padding: 1.5rem;
}
button {
  color: #00474B;
  font-weight: 900;
  width: 100%;
  background-color: #26C2AE;
  padding: 12px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
@media screen and (min-width: 768px) {
  .summary-section {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }
    .flex {
    gap: 6rem;
  }
  }
</style>