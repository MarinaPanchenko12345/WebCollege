-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 17, 2025 at 11:46 PM
-- Server version: 10.6.5-MariaDB
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_college`
--

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
CREATE TABLE IF NOT EXISTS `students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `city` varchar(50) NOT NULL,
  `birthday` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=MyISAM AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `firstName`, `lastName`, `phone`, `city`, `birthday`) VALUES
(1, 'Matthe', 'White', '328-490-7788', 'San Diego', '1986-03-02'),
(2, 'Elijah', 'Young', '669-241-3102', 'Dallas', '2003-11-22'),
(3, 'Daniel', 'Lewis', '395-277-1971', 'Philadelphia', '2002-09-03'),
(4, 'William', 'Taylor', '510-810-0732', 'Dallas', '1983-09-26'),
(5, 'Amelia', 'Clark', '830-276-9327', 'Phoenix', '2005-12-12'),
(6, 'Michael', 'Wright', '580-894-8597', 'San Diego', '2005-04-21'),
(7, 'James', 'Rodriguez', '578-600-8024', 'San Antonio', '1994-12-14'),
(8, 'Emma', 'Smith', '653-318-1945', 'Dallas', '1998-01-07'),
(9, 'Grace', 'Thompson', '460-666-1336', 'New York', '1980-12-06'),
(10, 'Ella', 'Smith', '931-254-8689', 'Phoenix', '1992-12-30'),
(11, 'Abigail', 'King', '161-334-5967', 'San Francisco', '2005-06-16'),
(12, 'Isabella', 'Martin', '724-396-4895', 'New York', '1995-04-30'),
(13, 'Lily', 'Wright', '374-593-0727', 'Phoenix', '1983-07-02'),
(14, 'Benjamin', 'Wright', '682-314-5783', 'San Francisco', '1999-06-09'),
(15, 'Harper', 'King', '956-721-7614', 'San Francisco', '1981-02-23'),
(16, 'Evelyn', 'Robinson', '975-629-7567', 'San Antonio', '1989-08-29'),
(17, 'Ella', 'Allen', '218-189-2146', 'Houston', '1981-12-31'),
(18, 'Alexander', 'Allen', '915-263-7310', 'Philadelphia', '1985-03-17'),
(19, 'Lucas', 'Garcia', '123-260-0916', 'Los Angeles', '2002-12-13'),
(20, 'Amelia', 'Lee', '466-130-5879', 'San Francisco', '2005-05-04'),
(21, 'Charlotte', 'Robinson', '242-260-6970', 'San Antonio', '1995-09-08'),
(22, 'Michael', 'Anderson', '220-827-6584', 'Dallas', '1987-02-21'),
(23, 'Michael', 'King', '698-673-9004', 'San Francisco', '1996-04-18'),
(24, 'Oliver', 'White', '807-826-7982', 'Dallas', '1983-01-03'),
(25, 'Isabella', 'Lee', '225-947-5881', 'Philadelphia', '1996-09-01'),
(26, 'Ethan', 'Walker', '841-197-9179', 'Dallas', '1988-03-20'),
(27, 'Daniel', 'Lewis', '629-741-6860', 'Dallas', '2005-10-11'),
(28, 'Harper', 'Harris', '336-759-8767', 'Phoenix', '2005-12-08'),
(29, 'Ella', 'Jackson', '769-487-9892', 'Philadelphia', '1996-04-07'),
(30, 'Benjamin', 'Thomas', '180-725-2656', 'Chicago', '1999-12-02'),
(31, 'Harper', 'Lewis', '315-419-5328', 'San Antonio', '1987-11-18'),
(32, 'Mia', 'Taylor', '301-164-0162', 'Philadelphia', '1982-10-31'),
(33, 'Michael', 'Jackson', '780-681-6149', 'Houston', '1999-03-13'),
(34, 'Lucas', 'Young', '848-559-2677', 'Houston', '1999-04-15'),
(35, 'Amelia', 'Young', '650-582-5794', 'San Diego', '2001-09-15'),
(36, 'Matthew', 'Taylor', '460-856-2774', 'San Antonio', '1980-12-23'),
(37, 'Ethan', 'Young', '457-145-3916', 'Dallas', '1994-12-27'),
(38, 'Ella', 'Rodriguez', '664-115-2221', 'Dallas', '1997-11-27'),
(39, 'Daniel', 'Taylor', '544-648-2433', 'Dallas', '1986-02-12'),
(40, 'Lucas', 'Scott', '202-906-2476', 'San Diego', '1987-01-24'),
(41, 'William', 'King', '454-751-0701', 'Dallas', '1980-09-11'),
(42, 'Evelyn', 'Jackson', '449-803-3477', 'San Francisco', '2001-12-14'),
(43, 'Charlotte', 'Jackson', '850-614-7158', 'San Antonio', '1997-02-12'),
(44, 'Alexander', 'Clark', '165-105-2613', 'Dallas', '1998-11-04'),
(45, 'Lucas', 'Smith', '334-544-6475', 'Dallas', '1982-09-15'),
(46, 'Isabella', 'Allen', '128-263-8101', 'Phoenix', '1981-07-30'),
(47, 'Elijah', 'Thompson', '557-479-2650', 'San Antonio', '1985-02-20'),
(48, 'James', 'Martin', '447-809-5364', 'Houston', '2004-04-20'),
(49, 'Mia', 'Harris', '441-479-3460', 'San Francisco', '1992-01-03'),
(50, 'Mia', 'Lee', '375-563-1221', 'Los Angeles', '1999-05-16');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
