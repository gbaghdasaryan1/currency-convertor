<template>
  <div class="converter">
    <CurrencySelector v-model="baseCurrency" :currencies="currencies" label="From" />
    <input type="number" v-model.number="amount" placeholder="Enter amount" />
    <CurrencySelector v-model="targetCurrency" :currencies="currencies" label="To" />
    <ResultDisplay :result="convertedAmount" />
  </div>
</template>

<script>
import { ref, watch, computed, onMounted } from 'vue';
import axios from 'axios';
import CurrencySelector from './CurrencySelector.vue';
import ResultDisplay from './ResultDisplay.vue';

export default {
  components: { CurrencySelector, ResultDisplay },
  setup() {
    const amount = ref(0);
    const baseCurrency = ref('USD');
    const targetCurrency = ref('USD');
    const rates = ref({});
    const currencies = ref(['USD', 'EUR', 'GBP', 'JPY', 'AMD']); // Example list

    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency.value }`);
        rates.value = response.data.rates;
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    onMounted(() => {
      const userLocale = navigator.language || 'en-US';
      baseCurrency.value = userLocale.split('-')[1] || 'USD';
      fetchRates();
    });

    watch([baseCurrency, targetCurrency], fetchRates);

    const convertedAmount = computed(() => {
      if (!rates.value[targetCurrency.value]) return 0;
      return amount.value * rates.value[targetCurrency.value];
    });

    return { amount, baseCurrency, targetCurrency, currencies, convertedAmount };
  }
};
</script>

<style scoped>
.converter {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
</style>
