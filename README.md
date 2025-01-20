# Weather App

## Установка зависимостей

Для корректной работы приложения необходимо установить следующие зависимости:

```bash
npm install
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
```

## Запуск проекта

### Основной запуск

Для одновременного запуска фронтенда (FE) и бэкенда (BE) выполните следующую команду в терминале:

```bash
npm run start
```

### Альтернативный запуск (по отдельности)

Вы также можете запускать FE и BE отдельно с помощью следующих команд:

- Запуск клиентской части (Frontend):

  ```bash
  npm run start-front
  ```

- Запуск серверной части (Backend):

  ```bash
  npm run start-back
  ```

После успешного запуска откроется ссылка на приложение:

```
http://localhost:3000/login
```

## Функционал приложения

- Регистрация пользователей.
- Авторизация пользователей.
- Поиск городов.
- Просмотр текущей погоды для выбранного города.
- Прогноз погоды на неделю (с понедельника по воскресенье).

## Подключение к MongoDB Atlas

### Инструкция по подключению

1. Установите десктопное приложение MongoDB Compass (версии 1.12 или выше).
2. В главном окне нажмите **Add new connection**.
3. В поле URL вставьте ссылку:

   ```
   mongodb+srv://<db_username>:<db_password>@weather-app.cltrc.mongodb.net/
   ```

   Замените следующие параметры:
   - `<db_username>`: **new_user01**
   - `<db_password>`: **lbY467f50Cag23q9**

   Итоговая ссылка будет выглядеть так:

   ```
   mongodb+srv://new_user01:lbY467f50Cag23q9@weather-app.cltrc.mongodb.net/
   ```

4. Нажмите зелёную кнопку **Save and Connect**.

5. После подключения в левой части окна появится соединение с названием `weather-app.cltrc.mongodb.net`.

6. Откройте вкладку `weather-app.cltrc.mongodb.net`, затем выберите кластер `test` и перейдите в таблицу `UserInfo`. Здесь хранится информация о зарегистрированных пользователях.

## Предоставление доступа к базе данных

### Разрешение подключения любому IP-адресу

Чтобы разрешить подключение к вашей базе данных с любого IP-адреса:

1. Перейдите в [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) и войдите в свою учётную запись.
2. Выберите ваш кластер и откройте вкладку **Network Access**.
3. Нажмите **Add IP Address**.
4. В поле **Whitelist Entry** укажите IP-адрес `0.0.0.0/0` для разрешения подключения с любого IP.
5. Сохраните изменения.

### Предоставление прав для просмотра данных

Чтобы предоставить доступ к данным в базе:

1. Войдите в [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Перейдите в раздел **Database Access**.
3. Нажмите **Add New Database User**.
4. Укажите имя пользователя и пароль.
5. В разделе **Database User Privileges** выберите:
   - Роль **ReadOnly** для предоставления доступа только на чтение.
6. Сохраните пользователя и передайте его данные пользователям, которым требуется доступ.
