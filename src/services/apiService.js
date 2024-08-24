import axios from 'axios';

export const fetchExchangeRates = async (baseCurrency) => {
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        return response.data.rates;
    } catch (error) {
        throw new Error('Error fetching exchange rates');
    }
};