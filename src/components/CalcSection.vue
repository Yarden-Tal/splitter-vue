<template>
  <div>
    <!-- Bill -->
    <div>
      <div class="sub-title">Bill</div>
      <div class="icon-parent">
        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="17">
            <path fill="#9EBBBD"
              d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z" />
          </svg></div>
        <input :class="{ 'faded': store.bill === 0 }" type="number" name="bill" :value="store.bill" max="999999"
          oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
          maxlength="7" @input="(e) => store.updateBill(Number((e.target as HTMLInputElement).value))" class="input-field"
          inputmode="decimal">
      </div>
    </div>
    <!-- Tip -->
    <div>
      <div class="sub-title tip-title">Select Tip %</div>
      <div class="options-container">
        <!-- Single option -->
        <button class="option icon-parent" v-for="option in tipOptions" @click="store.updateTip(option); isCustom = false"
          :class="{ 'lighter-bg': option === store.tipAmount && !isCustom }">
          <div class="btn-txt">{{ option }}%</div>
        </button>
        <div class="icon-parent" @click="isCustom = true">
          <div v-if="!isCustom" class="abs">Custom</div>
          <!-- Custom input -->
          <input :style="!isCustom ? { color: 'transparent' } : { color: '#024749' }" :value="store.customTipAmount"
            placeholder="Custom" min="1" type="number" inputmode="decimal"
            @input="(e) => { store.updateTip(Number((e.target as HTMLInputElement).value)); store.updateCustomTip(Number((e.target as HTMLInputElement).value)) }"
            class="custom-input-field">
        </div>
      </div>
    </div>
    <!-- Number of people -->
    <div class="mt">
      <div class="sub-title tip-title">Number of People</div>
      <div class="icon-parent">
        <div :hidden="store.people !== 0" class="zero-error">Can't be zero</div>
        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="16">
            <path fill="#9EBBBD"
              d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z" />
          </svg></div>
        <input :class="{ 'faded': store.people === 1, 'red-border': showError }" type="number" :value="store.people"
          @input="(e) => updatePeople(Number((e.target as HTMLInputElement).value))" min="1" max="100" inputmode="numeric"
          name="people" class="input-field">
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useTipStore } from './../store'
const store = useTipStore();

const isCustom = ref<boolean>(false);
const showError = ref<boolean>(false);
const tipOptions = ref<number[]>([5, 10, 15, 25, 50]);

const updatePeople = (num: number) => {
  if (num === 0) showError.value = true;
  else showError.value = false;
  store.updatePeople(num);
}

</script>

<style scoped>
.zero-error {
  position: absolute;
  top: 9px;
  left: 44px;
  color: rgba(255, 42, 0, 0.718);
}

.abs {
  position: absolute;
  right: 12px;
  top: 4px;
  color: #3C6464;
  font-weight: 900;
  font-size: 1.5rem;
}

.mt {
  margin-top: 2rem;
}

.faded {
  opacity: 0.5;
}

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

input:focus-visible {
  outline: 2px solid #26C2AE;
}

.red-border {
  outline: 2px solid rgba(255, 42, 0, 0.718) !important;
}

.icon-parent {
  position: relative;
}

.icon {
  position: absolute;
  top: 12px;
  left: 18px;
}

.sub-title {
  color: #3c6464bf;
  ;
}

.tip-title {
  margin: 2rem 0 1rem 0;
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
  font-size: 1.25rem;
  font-weight: 900;
  text-align: center;
  width: 100%;
  height: 44px;
  background-color: #00474B;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.radio {
  text-align: right;
  width: 100%;
  opacity: 0;
}

.custom-input-field {
  text-align: right;
  font-size: 1.5rem;
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

@media screen and (min-width: 1024px) {
  .zero-error {
    top: -40px;
    left: 204px;
  }

  .option,
  .abs {
    font-size: 1.45rem;
  }
}
</style>