<template>
    <div class="card shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Конвертер валют</h2>
            <form @submit.prevent="convertCurrency" class="mb-3">
                <div class="mb-3">
                    <input v-model="inputText" class="form-control" placeholder="Например: 15 usd in rub" />
                </div>
                <button type="submit" class="btn btn-primary">Конвертировать</button>
            </form>
            <p v-if="conversionResult" class="alert alert-info">{{ conversionResult }}</p>
        </div>
    </div>
</template>

<script>
import { CurrencyService } from "../service/serviceCurrency.js";

export default {
    data() {
        return {
            inputText: '',
            conversionResult: ''
        };
    },
    methods: {
        async convertCurrency() {
            const match = this.inputText.match(/(\d+\.?\d*)\s*([a-zA-Z]{3})\s*in\s*([a-zA-Z]{3})/);
            if (match) {
                const amount = parseFloat(match[1]);
                const fromCurrency = match[2].toUpperCase();
                const toCurrency = match[3].toUpperCase();

                try {
                    const data = await  CurrencyService(fromCurrency);

                    if (data && data.rates && data.rates[toCurrency]) {
                        const rate = data.rates[toCurrency];
                        this.conversionResult = `${amount} ${fromCurrency} = ${(amount * rate).toFixed(2)} ${toCurrency}`;
                    } else {
                        this.conversionResult = 'Преобразование невозможно или введены неверные данные.';
                    }
                } catch (error) {
                    this.conversionResult = 'Ошибка при получении данных.';
                }
            } else {
                this.conversionResult = 'Неверный формат ввода. Используйте формат "200 rub in usd".';
            }
        }
    }
};
</script>