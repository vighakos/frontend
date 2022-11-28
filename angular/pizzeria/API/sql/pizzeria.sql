-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2022. Nov 28. 09:03
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `2123szft_pizzeria`
--
CREATE DATABASE IF NOT EXISTS `214szft_pizzeria` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `214szft_pizzeria`;

-- --------------------------------------------------------

--
-- A nézet helyettes szerkezete `cartDetails`
-- (Lásd alább az aktuális nézetet)
--
CREATE TABLE `cartDetails` (
`ID` int(11)
,`userID` int(11)
,`pizzaID` int(11)
,`name` varchar(100)
,`amount` int(11)
,`price` double
,`summary` double
);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `carts`
--

CREATE TABLE `carts` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pizzaID` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `carts`
--

INSERT INTO `carts` (`ID`, `userID`, `pizzaID`, `amount`) VALUES
(1, 5, 3, 1),
(2, 5, 2, 2),
(3, 5, 11, 1),
(4, 6, 5, 3),
(5, 6, 6, 3),
(6, 6, 4, 1),
(7, 6, 1, 3),
(8, 6, 2, 2),
(9, 6, 3, 1),
(10, 7, 6, 10),
(11, 7, 11, 5);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orderItems`
--

CREATE TABLE `orderItems` (
  `ID` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `pizzaID` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `orderDate` datetime NOT NULL DEFAULT current_timestamp(),
  `summary` double NOT NULL,
  `comment` text COLLATE utf8_hungarian_ci DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `pizzas`
--

CREATE TABLE `pizzas` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `price` double NOT NULL,
  `kcal` double DEFAULT NULL,
  `description` text COLLATE utf8_hungarian_ci DEFAULT NULL,
  `filename` varchar(100) COLLATE utf8_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `pizzas`
--

INSERT INTO `pizzas` (`ID`, `name`, `price`, `kcal`, `description`, `filename`) VALUES
(1, 'Négysajtos', 2520, 1500, 'tészta, szósz, tejföl, mozzarella, trapista, gouda, fetasajt', NULL),
(2, 'Magyaros', 2890, 1800, 'tészta, szósz, tejföl, hagyma, kolbász, sonka, sajt, tojás', NULL),
(3, 'Hawaii', 1800, 1300, 'tészta, szósz, szalonna, ananász, sajt', ''),
(4, 'Duna', 2400, 1000, 'tészta, paradicsomszósz, sonka, hagyma, tojás, sajt', ''),
(5, 'Szalámis', 2150, 1500, 'tészta, szósz, szalámi, sajt', ''),
(6, 'SonGoKu', 2670, 1900, 'tészta, szósz, sonka, gomba, kukorica, sajt', ''),
(11, 'Bolognai', 3000, 2300, 'tészta, bolognai szósz, sajt, tejföl', ''),
(12, 'Tenger gyümölcse', 2890, 1600, 'tészta, szósz, kagyló, rák, polip, kaviár', '');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_hungarian_ci NOT NULL,
  `passwd` varchar(40) COLLATE utf8_hungarian_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `address` varchar(200) COLLATE utf8_hungarian_ci DEFAULT NULL,
  `rights` varchar(20) COLLATE utf8_hungarian_ci NOT NULL,
  `reg` datetime NOT NULL DEFAULT current_timestamp(),
  `last` datetime DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`ID`, `name`, `email`, `passwd`, `phone`, `address`, `rights`, `reg`, `last`, `status`) VALUES
(3, 'Adminisztrátor', 'admin@pizza.hu', '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8', '06-70-111-22-33', '6500 Baja, Bácska tér 1.', 'admin', '2022-11-17 11:13:28', '2022-11-24 10:58:51', 1),
(5, 'Teszt Elek', 'teszt1@pizza.hu', '5ea345ab330cf29f81d8de9bf5466f508fe351e1', '06-30-555-66-77', '6500 Baja, Bácska tér 1.', 'user', '2022-11-21 10:14:28', '2022-11-24 12:09:27', 1),
(6, 'Próba Béla', 'teszt2@pizza.hu', '5ea345ab330cf29f81d8de9bf5466f508fe351e1', '06-20-333-66-89', '6500 Baja, Kossuth L. u. 100.', 'user', '2022-11-21 10:18:23', '2022-11-24 12:09:45', 1),
(7, 'Álmos Géza', 'teszt3@pizza.hu', '5ea345ab330cf29f81d8de9bf5466f508fe351e1', '06-70-3345-678', '6500 Baja, Petőfi S. u. 48.', 'user', '2022-11-21 11:20:40', '2022-11-24 11:34:20', 1);

-- --------------------------------------------------------

--
-- Nézet szerkezete `cartDetails`
--
DROP TABLE IF EXISTS `cartDetails`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cartDetails`  AS   (select `carts`.`ID` AS `ID`,`carts`.`userID` AS `userID`,`carts`.`pizzaID` AS `pizzaID`,`pizzas`.`name` AS `name`,`carts`.`amount` AS `amount`,`pizzas`.`price` AS `price`,`pizzas`.`price` * `carts`.`amount` AS `summary` from (`carts` join `pizzas` on(`carts`.`pizzaID` = `pizzas`.`ID`)))  ;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `orderItems`
--
ALTER TABLE `orderItems`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `carts`
--
ALTER TABLE `carts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT a táblához `orderItems`
--
ALTER TABLE `orderItems`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
