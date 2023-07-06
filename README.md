## Что это?
Проектная работа по созданию мессенджера в рамках [курса «Мидл фронтенд-разработчик»](https://practicum.yandex.ru/middle-frontend/) от Яндекс.Практикум.
* [Макет] в Figma: (https://www.figma.com/file/2UKVA4ybFUaWmidl4yk7kx/middle.messenger.praktikum.yandex?node-id=0-1&t=MBNZsXKaNpo7Qw0o-0).
* Поект на Netlify: [fascinating-sopapillas.netlify.app](https://fascinating-sopapillas.netlify.app/).

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
### Sprint 2
* Добавлен TypeScript;
* Настроены ESLint, Stylelint (AirBnB);
* Добавлен Husky + lint-staged для запуска линтеров при попытке комита.
* Добавлены базовые классы для создания миксинов и страниц.
* Добавлен класс GimmeResponse для работы с запросами на основе API XMLHttpRequest.
* Добавлен вывод данных с форм в консоль.
* Добавлена валидация данных с форм на focus, blur, submit.

## Установка
* `npm run dev` — запуск версии для разработчика,
* `npm run lint:fix` – запуск eslint + stylelint,
* `npm run build` — запуск сборки статики,
* `npm run start` — запуск сборки статики, и запуск Express на localhost:3000.
