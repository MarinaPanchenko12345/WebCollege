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
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
CREATE TABLE IF NOT EXISTS `tests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `name`, `date`) VALUES
(1, 'Business Studies', '2024-04-12'),
(2, 'Psychology', '2024-08-20'),
(3, 'Mathematics', '2024-10-23'),
(4, 'Architecture', '2024-02-05'),
(5, 'Mathematics', '2024-05-28'),
(6, 'Physical Education', '2024-04-04'),
(7, 'Computer Science', '2024-11-05'),
(8, 'English', '2024-03-22'),
(9, 'Geography', '2024-05-13'),
(10, 'Chemistry', '2024-10-26'),
(11, 'Health Education', '2024-11-21'),
(12, 'Environmental Science', '2024-04-14'),
(13, 'Chemistry', '2024-03-22'),
(14, 'Chemistry', '2024-08-28'),
(15, 'Business Studies', '2024-07-30'),
(16, 'Geography', '2024-02-12'),
(17, 'Business Studies', '2025-01-03'),
(18, 'Robotics', '2024-05-22'),
(19, 'Music', '2024-08-06'),
(20, 'Political Science', '2024-03-29'),
(21, 'Political Science', '2024-05-30'),
(22, 'Social Studies', '2024-12-03'),
(23, 'Mathematics', '2024-12-16'),
(24, 'Biology', '2024-09-24'),
(25, 'Health Education', '2024-11-16'),
(26, 'Astronomy', '2024-06-21'),
(27, 'Music', '2024-12-17'),
(28, 'English', '2024-08-04'),
(29, 'Literature', '2024-03-22'),
(30, 'Engineering', '2024-10-19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
