-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 15 2023 г., 09:02
-- Версия сервера: 8.0.24
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `loftschool`
--

-- --------------------------------------------------------

--
-- Структура таблицы `burger`
--

CREATE TABLE `burger` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `home` int NOT NULL,
  `part` varchar(255) NOT NULL,
  `appt` int NOT NULL,
  `floor` int NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `burger`
--

INSERT INTO `burger` (`id`, `name`, `phone`, `email`, `street`, `home`, `part`, `appt`, `floor`, `date`) VALUES
(43, 'ad in', '+7 (777) 777 77 77', 'olburyak@yandex.ru', '3333', 33, '34', 5, 5, '2023-10-14'),
(44, 'ad in', '+7 (777) 777 77 77', 'olburyak@yandex.ru', '3333', 33, '34', 5, 5, '2023-10-14'),
(45, 'ad in', '+7 (777) 777 77 77', 'olburyak@yandex.ru', '3333', 33, '34', 5, 5, '2023-10-14'),
(46, 'ad in', '+7 (777) 777 77 77', 'olryak@yandex.ru', '3333', 33, '34', 5, 5, '2023-10-14'),
(47, 'ad in', '+7 (777) 777 77 77', 'olryak@yandex.ru', '3333', 33, '34', 5, 5, '2023-10-14');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `count` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `count`) VALUES
(109, 'ad in', 'olburyak@yandex.ru', 3),
(112, 'ad in', 'olryak@yandex.ru', 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `burger`
--
ALTER TABLE `burger`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `burger`
--
ALTER TABLE `burger`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=114;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
