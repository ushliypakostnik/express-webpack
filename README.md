Express project on Babel with Webpack bundler
=============================================

Тестовое задание.

Исходный тестовый текстовый файл: /src/text.txt

"Рабочий" - /build/text.txt, после запуска сервера в него пишутся изменения при работе приложения

Deploy
------

Установка зависимостей npm packages

    $ npm install

Запуск сервера
--------------

    $ npm start

    http://127.0.0.1:8080 - показывается форма
    http://127.0.0.1:8080/test.txt - здесь монтируется тестовый текстовый файл - его можно обновлять по F5
    http://127.0.0.1:8080/json - на этот URL при сохранении формы отправляется JSON формы

Cборка
------

Сборка статики для разработки

    $ npm run buildDev

Сборка статики в продакшен

    $ npm run buildProd

Тесты
-----

Запуск cтатического анализатора ES

    $ npm run eslint

Запуск cтатического анализатора стилей

    $ npm run stylelint

Запуск модульных тестов

    $ npm run test

Создать и посмотреть статистику по бандлу:

    $ npm run build:stats
    $ npm run view:stats

