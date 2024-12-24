export class ProfileSettingsPage {
    navigateTo() {
        cy.visit('/account/settings'); // Переход на страницу настроек профиля
    }

    uploadAvatar(photoPath) {
        cy.get('#__next > div > div.page.account-settings.desktop.css-0 > div > section > div.account-settings-content-container > div > section > div.account-settings-profile-photo-container > div.account-settings-profile-photo__buttons-container > button')
            .attachFile(photoPath);
    }

    deleteAvatar() {
        cy.get('#__next > div > div.page.account-settings.desktop.css-0 > div > section > div.account-settings-content-container > div > section > div.account-settings-profile-photo-container > div.account-settings-profile-photo__buttons-container > span > svg')
            .click(); /
    }

    fillName(name) {
        cy.get('#__next > div > div.page.account-settings.desktop.css-0 > div > section > div.account-settings-content-container > div > div:nth-child(3) > div.LFInput > div > div.LFInput__wrapper > input')
            .clear()
            .type(name); // Изменение имени
    }

    fillDescription(description) {
        cy.get('#__next > div > div.page.account-settings.desktop.css-0 > div > section > div.account-settings-content-container > div > div:nth-child(4) > div.css-1j2q0r3 > div.tiptap-text-editor-container > div > div')
            .clear()
            .type(description); // Изменение описания
    }

    saveChanges() {
        cy.get('#__next > div > div.page.account-settings.desktop.css-0 > div > section > div.account-settings-content-container > div > div.css-15yflhy > button')
            .click(); // Сохранение изменений
    }
}
