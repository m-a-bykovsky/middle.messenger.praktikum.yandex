import { SignInPage, SignUpPage } from './pages/auth';
import { ErrorPage } from './pages/error';
import { ChatPage } from './pages/chat';
import { ProfilePage } from './pages/profile';

import './index.css';

console.log('Hello, Praktikum!');
document.title = 'ne slozhno';

/* Это все заглушка до реализации роутера */

const pageList: Record<string, any> = {

    /* Авторизация */
    Регистрация: () => new SignInPage(),
    Авторизация: () => new SignUpPage(),

    /* Ошибки */
    404: () => new ErrorPage({
        code: 404,
        message: 'Не туда попали'
    }),
    500: () => new ErrorPage({
        code: 500,
        message: 'Бригада фиксиков уже в пути'
    }),

    /* Чат */
    Чат: () => new ChatPage(),

    /* Профиль */
    'Посмотреть профиль': () => new ProfilePage({
        mode: 'read',
    }),
    'Редактировать профиль': () => new ProfilePage({
        mode: 'write',
    })
};

const menu = document.createElement('main');
menu.setAttribute('id', 'main');

const renderDom = (root: string, element: HTMLElement) => {
    document.getElementById(root)?.replaceWith(element);
};

Object.keys(pageList).forEach((title: string) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.style.fontSize = '20px';
    const element = pageList[title];
    link.innerText = title;
    link.onclick = () => { renderDom('main', element().getContent()); };
    menu.appendChild(li.appendChild(link));
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app')?.prepend(menu);
});
