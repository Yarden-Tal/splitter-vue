import { defineStore } from 'pinia'

export const useTipStore = defineStore('tips', {
  state: () => ({ bill: 0 satisfies number, tipAmount: 15 satisfies number, people: 1 satisfies number, customTipAmount: 0 satisfies number }),
  getters: {
    total: (state) => state.bill + (state.bill * state.tipAmount) / 100 satisfies number,
    tipPerPerson: (state) => (state.bill * state.tipAmount) / (100 * (state.people || 1)) satisfies number,
    totalPerPerson: (state) => (state.bill + (state.bill * state.tipAmount) / 100) / (state.people || 1) satisfies number
  },
  actions: {
    updateBill(newBill: number): void {
      this.bill = newBill;
    },
    updateTip(newTip: number): void {
      this.tipAmount = newTip;
    },
    updatePeople(newNum: number): void {
      this.people = newNum;
    },
    updateCustomTip(newNum: number): void {
      this.customTipAmount = newNum;
    },
    resetAll(): void {
      this.bill = 0;
      this.tipAmount = 15;
      this.people = 1;
      this.customTipAmount = 0
    }
  },
})