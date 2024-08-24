import { mount } from '@vue/test-utils';
import CurrencyConverter from '../src/components/CurrencyConverter.vue';

describe('CurrencyConverter.vue', () => {
    it('renders correctly', () => {
        const wrapper = mount(CurrencyConverter);
        expect(wrapper.exists()).toBe(true);
    });

    it('calculates converted amount correctly', async () => {
        const wrapper = mount(CurrencyConverter, {
            data() {
                return {
                    amount: 100,
                    baseCurrency: 'USD',
                    targetCurrency: 'EUR',
                    rates: { EUR: 0.85 }
                };
            }
        });

        await wrapper.vm.$nextTick();

        expect(wrapper.vm.convertedAmount).toBe(85);
    });
});
