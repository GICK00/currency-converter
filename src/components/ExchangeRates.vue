<template>
    <div class="card shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Текущие курсы валют</h2>
            <div class="mb-3">
                <label for="baseCurrency" class="form-label">Базовая валюта:</label>
                <input v-model="baseCurrency" id="baseCurrency" class="form-control" placeholder="Например: USD" />
                <button @click="fetchRates" class="btn btn-primary mt-2">Обновить курсы</button>
            </div>
            <ul v-if="rates && Object.keys(rates).length" class="list-group">
                <li v-for="(rate, currency) in rates" :key="currency" class="list-group-item">
                    1 {{ baseCurrency }} = {{ rate.toFixed(2) }} {{ currency }}
                </li>
            </ul>
            <p v-if="!rates || !Object.keys(rates).length" class="alert alert-warning">Нет доступных курсов.</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseCurrency: 'USD',
            rates: {}
        };
    },
    methods: {
        async fetchRates() {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${this.baseCurrency}`);
                const data = await response.json();
                this.rates = data.rates || {};
            } catch (error) {
                this.rates = {};
            }
        }
    },
    mounted() {
        this.fetchRates();
    }
};
</script>