<script></script>

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
              <span class="text-red-300 text-xs text-left font-bold mb-2 hidden"
                >Input Bill</span
              >
            </div>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center p-2">
                <img src="/images/icon-dollar.svg" alt="" />
              </span>
              <input
                class="text-semibold text-right text-veryDarkCyan placeholder:text-grayCyan bg-veryLightCyan focus:outline-strongCyan hover:border hover:border-strongCyan p-2 px-3 sm:w-80 w-full cursor-pointer rounded-lg remove-arrow"
                placeholder="0"
                type="number"
                name="bill"
                id="bill"
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
              <span class="text-red-300 text-xs text-left font-bold mb-2 hidden"
                >Choose Tip</span
              >
            </div>
            <div class="flex flex-wrap">
              <div class="w-1/3 p-2 justify-center">
                <button
                  class="bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan p-2 w-full rounded-lg"
                >
                  5%
                </button>
              </div>
              <div class="w-1/3 p-2 justify-center">
                <button
                  class="bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan p-2 w-full rounded-lg"
                >
                  10%
                </button>
              </div>
              <div class="w-1/3 p-2 justify-center">
                <button
                  class="bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan p-2 w-full rounded-lg"
                >
                  15%
                </button>
              </div>
              <div class="w-1/3 p-2 justify-center">
                <button
                  class="bg-veryDarkCyan text-white p-2 w-full rounded-lg hover:bg-strongCyan hover:text-veryDarkCyan"
                >
                  25%
                </button>
              </div>
              <div class="w-1/3 p-2 justify-center">
                <button
                  class="bg-veryDarkCyan text-white hover:bg-strongCyan hover:text-veryDarkCyan p-2 w-full rounded-lg"
                >
                  50%
                </button>
              </div>
              <div class="w-1/3 p-2 justify-center">
                <input
                  class="p-2 w-full bg-transparent text-right text-veryDarkCyan placeholder:text-grayCyan bg-veryLightCyan focus:outline-strongCyan hover:border hover:border-strongCyan rounded-lg remove-arrow"
                  type="number"
                  placeholder="Custom"
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
              <span class="text-red-300 text-xs text-left font-bold mb-2 hidden"
                >Can't be zero</span
              >
            </div>
            <div class="relative">
              <span class="absolute inset-y-0 left-0 flex items-center p-2">
                <img src="/images/icon-person.svg" alt="" />
              </span>
              <input
                class="text-semibold text-right text-veryDarkCyan placeholder:text-grayCyan bg-veryLightCyan focus:outline-strongCyan hover:border hover:border-strongCyan p-2 px-3 sm:w-80 w-full cursor-pointer rounded-lg remove-arrow"
                placeholder="0"
                type="number"
                name="people"
                id="people"
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
              <h1 class="text-center text-4xl font-bold text-strongCyan">
                $0.00
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
              <h1 class="text-center text-4xl font-bold text-strongCyan">
                $0.00
              </h1>
            </div>
          </div>
          <div class="mt-10 mx-5 sm:mb-4">
            <button
              class="text-center sm:mb-0 mb-4 sm:text-md text-sm tracking-widest font-bold text-darkCyan bg-strongCyan w-full rounded-lg p-3"
              type="reset"
            >
              RESET
            </button>
          </div>
        </div>
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
