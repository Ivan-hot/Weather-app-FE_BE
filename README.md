
npm install
npm install react-scripts
npm install concurrently --save-dev
npm install react-accessible-accordion
npm install react-select-async-paginate
npx browserslist@latest --update-db
npm install webpack-dev-server@latest
npm i cors
npm i bcryptjs
npm i jsonwebtoken
npm i nodemailer


ЗАПУСК ПРОЕКТА

файл package.json

npm run start
позволит запустить Frontend(FE) и Backend(BE) одновременно

если хотите, то можно запустить FE и BE по отдельности c помощью
комманд:
npm run start-front
Запуск FE, клиентской части

npm run start-back
Запуск BE, серверной части

после этого откроется ссылка на сайт
http://localhost:3000/login
Функционал: 
регистрация, логина, поиск городов, просмотр текущей погоды города,
прогноз на неделю (Mon-Sun)

ПОДКЛЮЧЕНИЕ К MONGODB ATLAS

для подключения к облачной БД MONGODB ATLAS необходимо:

Установить десктопное приложение MongoDB Compass 
(версия 1.12 или выше)

Главное окно нажать Add new connection

в URL вставить ссылку
 mongodb+srv://<db_username>:<db_password>@weather-app.cltrc.mongodb.net/
 где:
 <db_username> это new_user01
 <db_password> это lbY467f50Cag23q9
 должно получиться так:
 mongodb+srv://new_user01:lbY467f50Cag23q9@weather-app.cltrc.mongodb.net/
нажать зеленую кнопку Save and Connect

После подключения слева в списке пойвится соединение с названием
weather-app.cltrc.mongodb.net

Открыть вкладку weather-app.cltrc.mongodb.net...
Открыть кластер test, перейти в таблицу UserInfo
Тут храниться информация о зарегестрированных пользователях



как дать доступ любому IP подключиться и взаимодействовать с БД
как дать доступ для просмотра данных в моей БД любому юзеру?