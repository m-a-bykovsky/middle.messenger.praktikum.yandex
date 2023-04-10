## Что это?
Проектная работа по созданию мессенджера в рамках [курса «Мидл фронтенд-разработчик»](https://practicum.yandex.ru/middle-frontend/) от Яндекс.Практикум.
* [Макет](https://www.figma.com/file/2UKVA4ybFUaWmidl4yk7kx/middle.messenger.praktikum.yandex?node-id=0-1&t=MBNZsXKaNpo7Qw0o-0).
* [fascinating-sopapillas.netlify.app](https://fascinating-sopapillas.netlify.app/)

## Этапы работы
### Sprint 1 [![Tests](https://github.com/m-a-bykovsky/middle.messenger.praktikum.yandex/actions/workflows/tests.yml/badge.svg?branch=sprint_1)](https://github.com/m-a-bykovsky/middle.messenger.praktikum.yandex/actions/workflows/tests.yml)
* Для сборки используется Parcel;
* в качестве шаблонизатора выбран Pug;
* добавлен PostCSS;
* готовы макеты страниц:
    * авторизации и регистрации;
    * ошибок 404 и 500;
    * список чатов и лента;
    * профиля: просмотра информации и редактирование данных;
* приложение развернуто на Netlify, настроен автоматический деплой [![Netlify Status](https://api.netlify.com/api/v1/badges/2f644a2d-db60-403a-bffe-90a4b6258e02/deploy-status)](https://app.netlify.com/sites/fascinating-sopapillas/deploys).

## Установка
* `npm run dev` — запуск версии для разработчика,
* `npm run build` — запуск сборки статики,
* `npm run start` — запуск сборки статики и запуск Express на localhost:3000.
