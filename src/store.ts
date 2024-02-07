import { defineStore } from 'pinia'

const BILL: number = 0;
const TIP_AMOUNT: number = 0;
const PEOPLE: number = 1;
const CUSTOM_TIP_AMOUNT: number = 0;


export const useTipStore = defineStore('tips', {
  state: () => ({ bill: BILL satisfies number, tipAmount: TIP_AMOUNT satisfies number, people: PEOPLE satisfies number, customTipAmount: CUSTOM_TIP_AMOUNT satisfies number }),
  getters: {
    total: (state) => state.bill + (state.bill * state.tipAmount) / 100 satisfies number,
    tipPerPerson: (state) => state.people === 0 ? 0 : (state.bill * state.tipAmount) / (100 * (state.people || 1)) satisfies number,
    totalPerPerson: (state) => state.people === 0 ? 0 : (state.bill + (state.bill * state.tipAmount) / 100) / (state.people || 1) satisfies number
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
      this.bill = BILL;
      this.tipAmount = TIP_AMOUNT;
      this.people = PEOPLE;
      this.customTipAmount = CUSTOM_TIP_AMOUNT;
    }
  },
})