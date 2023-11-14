<script>
export default {
  data() {
    return {
      tipPercentage: [
        {
          value: "5%",
          valueTipPercentage: 5,
          isSelected: false,
        },
        {
          value: "10%",
          valueTipPercentage: 10,
          isSelected: false,
        },
        {
          value: "15%",
          valueTipPercentage: 15,
          isSelected: false,
        },
        {
          value: "25%",
          valueTipPercentage: 25,
          isSelected: false,
        },
        {
          value: "50%",
          valueTipPercentage: 50,
          isSelected: false,
        },
      ],
      bill: 0,
      numberOfPeople: 0,
      totalAmount: 0,
      tipAmount: 0,
      customTipPercentage: 0,
    };
  },
  methods: {
    setActive(index) {
      this.tipPercentage.forEach((tip) => {
        tip.isSelected = false;
      });

      // Set the selected tip
      this.tipPercentage[index].isSelected = true;
      this.customTipPercentage = this.tipPercentage[index].valueTipPercentage;
      this.tipAmountPerPerson();
      this.calculateTip();
    },
    resetValue() {
      this.bill = 0;
      this.numberOfPeople = 0;
      this.totalAmount = 0;
      this.tipAmount = 0;
      this.customTipPercentage = 0;
    },
    tipAmountPerPerson() {
      this.tipAmount =
        (this.bill * this.customTipPercentage) / 100 / this.numberOfPeople;
      if (isNaN(this.tipAmount) || this.tipAmount === Infinity) {
        this.tipAmount = 0;
      } else {
        this.tipAmount = this.tipAmount.toFixed(2);
      }
      return this.tipAmount;
    },
    calculateTip() {
      this.totalAmount =
        this.bill / this.numberOfPeople + Number(this.tipAmount);
      if (isNaN(this.totalAmount) || this.totalAmount === Infinity) {
        this.totalAmount = 0;
      } else {
        this.totalAmount = this.totalAmount.toFixed(2);
      }
      return this.totalAmount;
    },
  },
};
</script>

<template>
  <main class="app">
    <div class="sm:flex justify-center items-center h-screen flex-col">
      <img class="mb-5 sm:mt-0 mt-5 mx-auto" src="/images/logo.svg" alt="" />
      <div
        class="sm:flex max-w-3xl w-full p-5 bg-white sm:rounded-t-lg sm:rounded-b-lg rounded-b-none rounded-t-3xl"
      >
        <div class="sm:w-1/2 mx-2">
          <div class="input-bill mb-4">
            <div class="flex justify-between">
              <label
                class="block text-xs text-left font-bold mb-2 text-darkGrayCyan"
                for="email"
                >Bill</label
              >
              <span
                class="block text-red-400 text-xs text-left font-bold mb-2"
                v-if="!bill"
                >Input Bill</span
              >
            </div>
            <div class="relative">
              <span
                class="absolute inset-y-0 left-0 flex items-center ml-2 p-2"
              >
                <img src="/images/icon-dollar.svg" alt="" />
              </span>
              <input
                class="text-semibold text-right text-veryDarkCyan placeholder:text-grayCyan bg-veryLightCyan focus:outline-strongCyan hover:border hover:border-strongCyan p-2 px-3 w-full cursor-pointer rounded-lg remove-arrow"
                :class="{
                  'border border-red-400': !bill,
                }"
                placeholder="0"
                type="number"
                name="bill"
                id="bill"
                v-model="bill"
                @change="tipAmountPerPerson(), calculateTip()"
              />
            </div>
          </div>
          <div class="tip-select mb-4">
            <div class="flex justify-between">
              <label
                class="block text-xs text-left font-bold mb-2 text-darkGrayCyan"
                for="email"
                >Select Tip %</label
              >
              <span
                class="text-red-400 text-xs text-left font-bold mb-2"
                v-if="!customTipPercentage"
                >Choose Tip</span
              >
            </div>
            <div class="flex flex-wrap">
              <div
                class="w-1/3 p-2 justify-center"
                v-for="(tip, index) in tipPercentage"
                :key="index"
              >
                <button
                  class="hover:bg-strongCyan hover:text-veryDarkCyan p-2 w-full rounded-lg"
                  :class="{
                    'bg-strongCyan text-veryDarkCyan': tip.isSelected,
                    'bg-veryDarkCyan text-white': !tip.isSelected,
                  }"
                  @click="setActive(index)"
                >
                  {{ tip.value }}
                </button>
              </div>
              <div class="w-1/3 p-2 justify-center">
                <input
                  class="p-2 w-full bg-transparent text-right text-veryDarkCyan placeholder:text-grayCyan bg-veryLightCyan focus:outline-strongCyan hover:border hover:border-strongCyan rounded-lg remove-arrow"
                  type="number"
                  placeholder="Custom"
                  v-model="customTipPercentage"
                  @change="tipAmountPerPerson(), calculateTip()"
                />
              </div>
            </div>
          </div>
          <div class="input-people">
            <div class="flex justify-between">
              <label
                class="block text-xs text-left font-bold mb-2 text-darkGrayCyan"
                for="email"
                >Number of People</label
              >
              <span
                class="text-red-400 text-xs text-left font-bold mb-2"
                v-if="!numberOfPeople"
                >Can't be zero</span
              >
            </div>
            <div class="relative">
              <span
                class="absolute inset-y-0 left-0 ml-2 flex items-center p-2"
              >
                <img src="/images/icon-person.svg" alt="" />
              </span>
              <input
                class="text-semibold text-right text-veryDarkCyan placeholder:text-grayCyan bg-veryLightCyan focus:outline-strongCyan hover:border hover:border-strongCyan p-2 px-3 w-full cursor-pointer rounded-lg remove-arrow"
                :class="{
                  'border border-red-400': !numberOfPeople,
                }"
                placeholder="0"
                type="number"
                name="people"
                id="people"
                v-model="numberOfPeople"
                @change="tipAmountPerPerson(), calculateTip()"
              />
            </div>
          </div>
        </div>
        <div class="sm:w-1/2 sm:mx-2 sm:mt-0 mt-5 bg-veryDarkCyan rounded-md">
          <div class="flex w-full sm:pt-10 pt-5 px-4">
            <div class="w-1/2">
              <div>
                <h1 class="font-bold text-white">Tip Amount</h1>
                <span class="text-sm text-grayCyan">/ person</span>
              </div>
            </div>
            <div class="w-1/2">
              <h1
                class="text-center text-4xl font-bold text-strongCyan"
                v-if="tipAmount == 0"
              >
                $0.00
              </h1>
              <h1 class="text-center text-4xl font-bold text-strongCyan" v-else>
                ${{ tipAmount }}
              </h1>
            </div>
          </div>
          <div class="flex w-full pt-10 px-4">
            <div class="w-1/2">
              <div>
                <h1 class="font-bold text-white">Total</h1>
                <span class="text-sm text-grayCyan">/ person</span>
              </div>
            </div>
            <div class="w-1/2">
              <h1
                class="text-center text-4xl font-bold text-strongCyan"
                v-if="totalAmount == 0"
              >
                $0.00
              </h1>
              <h1 class="text-center text-4xl font-bold text-strongCyan" v-else>
                ${{ totalAmount }}
              </h1>
            </div>
          </div>
          <div class="mt-10 mx-5 sm:mb-4">
            <button
              class="text-center sm:mb-0 mb-4 sm:text-md text-sm tracking-widest font-bold text-darkCyan bg-strongCyan w-full rounded-lg p-3"
              type="reset"
              @click="resetValue()"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="flex justify-center items-center">
        <p class="text-sm text-grayCyan">
          Copyright &copy; 2023
          <a
            class="text-grayCyan"
            href="https://github.com/BagusSty/"
            target="_blank"
            >Bagus Sty</a
          >
        </p>
      </div>
    </div>
  </main>
</template>
<style>
.remove-arrow::-webkit-inner-spin-button,
.remove-arrow::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
