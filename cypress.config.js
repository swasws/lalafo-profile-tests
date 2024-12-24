const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}', // Шаблон для поиска тестов
        baseUrl: 'https://lalafo.kg', // Базовый URL для сайта
    },
});
