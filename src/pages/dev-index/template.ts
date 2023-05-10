export const tplMain = `
mixin menuItem(title,ref)
    li 
        a(href=ref)=title

h1 Макеты
nav
    ul
        +menuItem("Авторизация", "./auth/signin")
        +menuItem("Регистрация", "./auth/signup")
        +menuItem("Страница 404", "./error/404")
        +menuItem("Страница 500", "./error/500")
        +menuItem("Список чатов и лента", "./chat/chat")
        +menuItem("Профиль", "./profile/profile")
        +menuItem("Профиль: изменить данные", "./profile/profile__edit-main")
        +menuItem("Профиль: изменить пароль", "./profile/profile__edit-pswd")
`;

export const tplFooter = `
h2 middle.messenger.praktikum.yandex
`;
