import { createRouter, createWebHistory } from 'vue-router';
import CurrencyConverter from '../components/CurrencyConverter.vue';
import ExchangeRates from '../components/ExchangeRates.vue';

const routes = [
    { path: '/', component: CurrencyConverter },
    { path: '/rates', component: ExchangeRates },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
