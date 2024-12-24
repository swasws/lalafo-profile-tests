import { LoginPage } from '../pages/loginPage';
import { ProfileSettingsPage } from '../pages/profileSettingsPage';

describe('Настройки профиля - Lalafo', () => {
    const loginPage = new LoginPage();
    const profileSettingsPage = new ProfileSettingsPage();

    beforeEach(() => {
        loginPage.navigateTo(); // Переход на главную страницу и нажатие на "Вход"
        loginPage.login('stolomusev@gmail.com', '8a5k7d1h'); // Вход в систему

        profileSettingsPage.navigateTo(); // Переход на страницу настроек профиля
    });

    it('Загрузка аватарки', () => {
        profileSettingsPage.uploadAvatar('cypress/fixtures/avatar.jpg'); // Путь к файлу аватарки
        cy.contains('Avatar successfully uploaded').should('be.visible'); // Проверка сообщения об успехе
    });

    it('Удаление аватарки', () => {
        profileSettingsPage.deleteAvatar(); // Удаление аватарки
        cy.contains('Avatar successfully deleted').should('be.visible'); // Проверка сообщения об успехе
    });

    it('Изменение имени и описания', () => {
        profileSettingsPage.fillName('Новое Имя'); // Изменение имени
        profileSettingsPage.fillDescription('Новое описание профиля.'); // Изменение описания
        profileSettingsPage.saveChanges(); // Сохранение изменений
        cy.contains('Changes successfully saved').should('be.visible'); // Проверка сообщения об успехе
    });
});
