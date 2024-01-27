import { defineStore } from 'pinia'

export const useTipStore = defineStore('tips', {
  state: () => ({ bill: 0, tipAmount: 15, people: 1, customTipAmount: 0 }),
  getters: {
    total: (state) => state.bill + (state.bill * state.tipAmount) / 100,
    tipPerPerson: (state) => (state.bill * state.tipAmount) / (100 * (state.people || 1)),
    totalPerPerson: (state) => (state.bill + (state.bill * state.tipAmount) / 100) / (state.people || 1)
  },
  actions: {
    updateBill(newBill: number) {
      this.bill = newBill;
    },
    updateTip(newTip: number) {
      this.tipAmount = newTip;
    },
    updatePeople(newNum: number) {
      this.people = newNum;
    },
    updateCustomTip(newNum: number) {
      this.customTipAmount = newNum;
    },
    resetAll() {
      this.bill = 0;
      this.tipAmount = 15;
      this.people = 1;
      this.customTipAmount = 0
    }
  },
})