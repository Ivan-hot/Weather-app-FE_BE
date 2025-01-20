# Weather App

## Встановлення залежностей

Для коректної роботи програми необхідно встановити такі залежності:

``` bash
npm install
````
Якщо при запуску будуть проблеми, то рекомендуються індивідуально встановити/оновити залежності:
``` bash
npm install react-scripts
npm install concurrently --save-dev
npm install react-accessible-accordion
npm install react-select-async-paginate
npx browserslist@latest --update-db
npm install webpack-dev-server@latest
npm install cors
npm install bcryptjs
npm install jsonwebtoken
npm install nodemailer
````

## Запуск проекту

### Основний запуск

Для одночасного запуску фронтенду (FE) та бекенду (BE) виконайте наступну команду в терміналі:

``` bash
npm run start
````

### Альтернативний запуск (окремо)

Ви також можете запускати FE та BE окремо за допомогою наступних команд:

- Запуск клієнтської частини (Frontend):

 ``` bash
 npm run start-front
 ````

- Запуск серверної частини (Backend):

 ``` bash
 npm run start-back
 ````

Після успішного запуску відкриється посилання на програму:

````
http://localhost:3000/login
````

## Функціонал програми

- Реєстрація користувачів.
- Авторизація користувачів.
- пошук міст.
- Перегляд поточної погоди для вибраного міста.
- Прогноз погоди на тиждень (з понеділка до неділі).

## Підключення до MongoDB Atlas

### Інструкція з підключення

1. Встановіть десктопну програму MongoDB Compass (версії 1.12 або вище).
2. У головному вікні натисніть **Add new connection**.
3. У полі URL вставте посилання:

 ````
 mongodb+srv://<db_username>:<db_password>@weather-app.cltrc.mongodb.net/
 ````

 Замініть такі параметри:
 - `<db_username>`: **new_user01**
 - `<db_password>`: **lbY467f50Cag23q9**

 Підсумкове посилання виглядатиме так:

 ````
 mongodb+srv://new_user01:lbY467f50Cag23q9@weather-app.cltrc.mongodb.net/
 ````

4. Натисніть зелену кнопку **Save and Connect**.

5. Після підключення у лівій частині вікна з'явиться з'єднання `weather-app.cltrc.mongodb.net`.

6. Відкрийте вкладку `weather-app.cltrc.mongodb.net`, потім виберіть кластер `test` та перейдіть до таблиці `UserInfo`. Тут зберігається інформація про зареєстрованих користувачів.
