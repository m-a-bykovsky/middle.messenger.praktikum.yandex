import { SignInPage, SignUpPage } from './pages/auth';
import { ErrorPage } from './pages/error';
import { ChatPage } from './pages/chat';
import { ProfilePage } from './pages/profile';

import './index.css';
import Router from './services/Router';

console.log('Hello, Praktikum!');

const router = new Router('#main');

router
    /* Авторизация */
    .use('/', SignInPage)
    .use('/sign-in', SignInPage)
    /* Регистрация */
    .use('/sign-up', SignUpPage)
    /* Ошибки 4** */
    .use('/err4', ErrorPage, {
        code: 404,
        message: 'Не туда попали'
    })
    /* Ошибки 5** */
    .use('/err5', ErrorPage, {
        code: 500,
        message: 'Бригада фиксиков уже в пути'
    })
    /* Чат */
    .use('/messenger', ChatPage)
    /* Профиль */
    .use('/profile', ProfilePage, { mode: 'read' })
    /* Настройки профиля */
    .use('/settings', ProfilePage, { mode: 'write' })
    .start();
