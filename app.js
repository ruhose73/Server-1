//! инициализация библиотек

const express = require("express");
require("dotenv").config();
const sequelize = require("./config/db");

//! Порт с переменных .env
const PORT = process.env.PORT || 5000;

//! Подключение роутера
const router = require("./routes/routes");

//! Подключение промежуточного обработчика ошибок
const errorMiddleware = require("./middleware/errorMiddleware")

//! Установка експресс приложения
const app = express();

//! Подключение обработки JSON и инициализация сервера
app.use(express.json());
app.use("/calculator", router);
app.use(errorMiddleware)

//! Запуск сервера
const start = async() => {
    try {
        //! Подключение к БД
        await sequelize.authenticate();
        await sequelize.sync();

        //! Непосредственно запуск сервера и вывод сообщения о запуску
        app.listen(PORT, () =>
            console.log(`App has been started on port: ${PORT} `)
        );

    } catch (e) {
        console.log("Server error", e.message);
        process.exit(1);
    }
};

start();
