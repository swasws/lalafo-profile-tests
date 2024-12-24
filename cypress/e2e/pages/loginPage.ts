export class LoginPage {
    navigateTo() {
        cy.visit('/'); // Переход на главную страницу
        cy.get('#__next > div > header > div > div.main-header__right-bar > div > div > p', { timeout: 10000 })
            .should('be.visible') // Убедимся, что кнопка "Вход" видима
            .click(); // Нажимаем на кнопку "Вход"
    }

    login(username, password) {
        // Ждем появления модального окна
        cy.get('#modal', { timeout: 10000 })
            .should('be.visible');

        // Ввод логина
        cy.get('#modal > div > div > div > div > div > div > div > div.css-bky1po > form > div.LFInput.login-form__field > div > div.LFInput__wrapper.with-icon > input', { timeout: 10000 })
            .type(username);

        // Ввод пароля
        cy.get('#modal > div > div > div > div > div > div > div > div.css-bky1po > form > div.LFInputPassword.login-form__field > div > div.LFInputPassword__wrapper > input')
            .type(password);

        // Нажимаем "Войти"
        cy.get('#modal > div > div > div > div > div > div > div > div.css-bky1po > form > div.login-form__controls > button')
            .click();
    }
}
