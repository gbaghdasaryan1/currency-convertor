import { fetchExchangeRates } from '../src/apiService';
import axios from 'axios';
import { vi } from 'vitest';

vi.mock('axios');

describe('apiService', () => {
    it('fetches exchange rates successfully', async () => {
        const rates = { EUR: 0.85 };
        axios.get.mockResolvedValue({ data: { rates } });

        const result = await fetchExchangeRates('USD');
        expect(result).toEqual(rates);
    });

    it('throws an error when API call fails', async () => {
        axios.get.mockRejectedValue(new Error('API Error'));

        await expect(fetchExchangeRates('USD')).rejects.toThrow('Error fetching exchange rates');
    });
});
