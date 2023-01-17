-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2023. Jan 16. 12:56
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
-- Adatbázis: `2123szft_receptek`
--
CREATE DATABASE IF NOT EXISTS `2123szft_receptek` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `2123szft_receptek`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `osszetevok`
--

CREATE TABLE `osszetevok` (
  `ID` int(11) NOT NULL,
  `receptID` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `amount` double NOT NULL,
  `unit` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `receptek`
--

CREATE TABLE `receptek` (
  `ID` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `description` text COLLATE utf8_hungarian_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `receptek`
--

INSERT INTO `receptek` (`ID`, `name`, `description`) VALUES
(1, 'Kakaóscsiga', 'finom kakaóscsiga recept'),
(3, 'Pacal pörkölt', 'jhfs dhfsadjkfh asdkjf halskdf'),
(5, 'Almáspite', 'sdfsdafsadfadfsadfsadf'),
(6, 'Bajai Halászlé', 'sjefh jksdfh jksdf hfjksdh jksda fhjkasdmfh asjkdfh asklj fs'),
(8, 'Krumplistészta', 'asdfasdfdf'),
(9, 'Töltött káposzta', 'wqerewqrwer');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `osszetevok`
--
ALTER TABLE `osszetevok`
  ADD PRIMARY KEY (`ID`);

--
-- A tábla indexei `receptek`
--
ALTER TABLE `receptek`
  ADD PRIMARY KEY (`ID`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `osszetevok`
--
ALTER TABLE `osszetevok`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `receptek`
--
ALTER TABLE `receptek`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
