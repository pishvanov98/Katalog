-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 23, 2021 at 06:54 PM
-- Server version: 5.7.24-log
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `katalog`
--

-- --------------------------------------------------------

--
-- Table structure for table `authu`
--

CREATE TABLE `authu` (
  `log` varchar(200) NOT NULL,
  `passw` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authu`
--

INSERT INTO `authu` (`log`, `passw`) VALUES
('admin', 'd033e22ae348aeb5660fc2140aec35850c4da997');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(4) NOT NULL,
  `feedback` text,
  `feedback_2` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `feedback`, `feedback_2`) VALUES
(1, 'Здравствуй, милый гость!<br>\nНадо что-то написать о себе…<br>\nМеня зовут Анастасия, я из города Донецка, что в ДНР. Родилась, училась, росла, получила образование, вышла замуж, растила дочь, работаю. Обычная, интересная, сложная и насыщенная жизнь.<br>\nЯ всегда была увлекающимся человеком. В детстве коллекционировала марки о космосе и каталась на роликах, в юности плела макраме, вышивала бисером и плавала с аквалангом, позже увлеклась генеалогией своего рода и мечтой прыгнуть с парашютом. Но страсть к путешествиям у меня привита родителями с первой прививкой. Благодаря им я объездила почти весь Советский Союз, а сейчас принялась за «зарубеж».<br>\nВ первой же поездке в Париж я купила две сувенирные ложечки прямо на Эйфелевой башне. Так что начало моей коллекции можно датировать 2000 г.  Правда я тогда еще не осознала всего объема моего интереса. О чем безумно жалею, иначе привезла бы гораздо больше. И со второй поездки в Венгрию я привезла только одну ложечку.  А вот дальше пошло-поехало. И с тех пор я не могу остановиться.<br>\nКогда мои родные и друзья поняли, что это увлечение серьезно, то ложки полились разнообразные. Все были очень довольны, что нет больше головной боли по поводу выбора подарка. И я им очень благодарна за это.<br>\nМне интересна не каждая ложка. Она должна обязательно что-то олицетворять.  Их разнообразию нет придела, а ведь ложка – это предмет быта, на который мы порой не очень обращаем внимание. Но я не ожидала, что ложки могут так отличаться:<br>\n•	По размерам (в настоящее время в моей коллекции самая маленькая ложка – 35 мм, самая большая – 1м 40 см)<br>\n•	По своей сущности (чайная, столовая, для оливок, для спагетти, для абсента, для специй … По моим подсчетам их более 60 видов. Эту тему я подниму отдельно)<br>\n•	По времени происхождения<br>\n•	По материалу изготовления (дерево, олово, мельхиор, керамика, камень, стекло, кокос, пластмасса, бронза…)<br>\n•	По содержанию (это и символика, и геральдика, и великие люди, и юбилейные даты и события)<br>\n•	И, конечно же, по своему происхождению (города, страны, континенты, архитектурные памятники и музеи …)<br>\nПро красоту я уже не говорю. И раньше, и сейчас я считаю, что Хохломская ложка выше всяких похвал. Да и вообще деревянные ложки ручной работы заслуживают отдельного разговора. Все зависит от вдохновения мастера, от его умения и желания. От этой красоты нельзя отвести глаз. Такие ложки неповторимы и удивительны. Хотелось бы иметь у себя в коллекции огромное количество деревянных шедевров.<br>\nК сожалению, купить дисплеи для ложек наверно можно только за рубежом. Поэтому для своей красоты пришлось придумывать и рассчитывать планшеты самой. Все мои шкафчики, полочки и стенды – ручной работы. <br>\nВ настоящее время в моей коллекции более 600 ложек из 57 стран. Но я с большим нетерпением жду появления каждой новой ложечки.<br>\nПо прошествии 11 лет решила сделать себе подарок и выставить свою коллекцию на всеобщее обозрение. Спасибо, что зашли в гости. Буду очень рада, если выскажите свои пожелания в «Гостевой книге». Я обязательно отвечу Вам!<br>\n                                              <br>\n                              С уважением, хозяйка домашнего музея   Анастасия. 2011г.\n', '\"Столовые приборы - самые совершенные приборы в мире\"                                                       (народная мудрость)\n');

-- --------------------------------------------------------

--
-- Table structure for table `shoutbox`
--

CREATE TABLE `shoutbox` (
  `id` int(11) NOT NULL,
  `date_time` datetime NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `message` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shoutbox`
--

INSERT INTO `shoutbox` (`id`, `date_time`, `name`, `message`) VALUES
(26, '2021-06-13 15:01:38', 'Артём', 'Хорошая коллекция '),
(28, '2021-06-13 15:39:05', 'Артём', 'Таким образом сложившаяся структура организации требуют от нас анализа позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что консультация с широким активом требуют определения и уточнения форм развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке дальнейших направлений развития. Товарищи! дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание форм развития. '),
(29, '2021-06-13 15:39:28', 'Игнат', 'Товарищи! новая модель организационной деятельности требуют от нас анализа форм развития. Идейные соображения высшего порядка, а также сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.'),
(31, '2021-06-21 00:44:26', 'авиваи', 'мавм');

-- --------------------------------------------------------

--
-- Table structure for table `spoon`
--

CREATE TABLE `spoon` (
  `id` int(11) NOT NULL,
  `name` text,
  `registrnum` text,
  `img1` text,
  `img2` text,
  `img3` text,
  `prednaz` text,
  `razmer` text,
  `ves` text,
  `material` text,
  `strana` text,
  `dopinfostrana` text,
  `nadpis` text,
  `year` text,
  `dopinfo` text,
  `material_sort` text,
  `dopolnitelno_sort` text,
  `original_sort` text,
  `starina_sort` text,
  `firma_sort` text,
  `noeat_sort` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `spoon`
--

INSERT INTO `spoon` (`id`, `name`, `registrnum`, `img1`, `img2`, `img3`, `prednaz`, `razmer`, `ves`, `material`, `strana`, `dopinfostrana`, `nadpis`, `year`, `dopinfo`, `material_sort`, `dopolnitelno_sort`, `original_sort`, `starina_sort`, `firma_sort`, `noeat_sort`) VALUES
(10, 'Ложечка сувенирная', 'Регистрационный номер: 16.1', 'kart1_1.jpg', 'kart1_2.jpg', '', 'Предназначение: Сувенирная', 'Размер: 12', 'Вес: 58 гр', 'Материал: металл, олово', 'CША', '', 'Надпись: Drink liptons finest tea - \"Пейте liptons самый прекрасный чай\"', 'Год приобретения: 2007 год', 'Дополнительная информация: Логотип - Липтон  — одна из крупнейших в мире торговых марок чая. Компания Lipton была создана в конце 19-ого столетия Томасом Липтоном в Глазго, Шотландия. Чай Lipton первым стал продаваться в одноразовых пакетиках, которые придумал Том Салливан. Он вручную изготавливал маленькие пакетики из шелка, а Липтон наладил их массовое производство.', '', '', '', 'сельмаг', '', ''),
(11, 'Ложечка для обрядов', 'Регистрационный номер: 22.04,05', 'kart2_2.jpg', 'kart2_1.jpg', '', 'Предназначение: для обрядов', 'Размер: 10,5', 'Вес: 96 гр', 'Материал: металл, медь ', 'Индия', '', 'Надпись: ложечка Уддхарани + чашечка', 'Год приобретения: 2008 год', 'Дополнительная информация: Ложечка и чашечка для проведения ачамана. А́чамана — очистительный ритуал  в индуизме, совершаемый в целях обретения чистоты тела, ума и чувств, посредством отпивая воды, «насыщенной» мантрами. Для ачамана требуется панча-патра и уддхарани. Панчапатра — это чашка, сделанная из золота, серебра или меди. Уддхарани — это маленькая ложечка. ', '', '', '', 'религия', '', ''),
(15, 'Пример2', 'Регистрационный номер: 434', 'kart4_1.jpg', '', '', '', '', '', '', 'CША', 'Штат: Техас', '', '', '', '', '', 'необычные', '', '', ''),
(16, 'Пример 3', '', 'kart5_1.jpg', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authu`
--
ALTER TABLE `authu`
  ADD UNIQUE KEY `passw` (`passw`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shoutbox`
--
ALTER TABLE `shoutbox`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `spoon`
--
ALTER TABLE `spoon`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `shoutbox`
--
ALTER TABLE `shoutbox`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `spoon`
--
ALTER TABLE `spoon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
