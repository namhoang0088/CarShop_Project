-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2023 at 06:14 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_shop_222`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `security_question` varchar(255) NOT NULL,
  `security_answer` varchar(255) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `email`, `password`, `phone_number`, `name`, `birthday`, `address`, `avatar`, `security_question`, `security_answer`, `state`, `role`) VALUES
(400, 'kientran@gmail.com', '1234', '01234567', 'Kiên Trần', '2023-04-21', 'Linh Trung, Thủ Đức', 'any', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'admin'),
(500, 'huynhnhan@gmail.com', '1234', '01234567', 'Huỳnh Nhân', '2023-04-21', 'Linh Trung, Thủ Đức', 'any', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'customer'),
(600, 'hoangnam@gmail.com', '1234', '01234567', 'Hoàng Nam', '2023-04-21', 'Linh Trung, Thủ Đức', 'any', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'customer'),
(700, 'chungquang@gmail.com', '1234', '01234567', 'Chúng Quang', '2023-04-21', 'Linh Trung, Thủ Đức', 'any', 'Sở thích của bạn là gì', 'Xem phim', 'True', 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brand`
--

CREATE TABLE `brand` (
  `brand_id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `info` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `brand_has_model`
--

CREATE TABLE `brand_has_model` (
  `brand_id` int(10) NOT NULL,
  `model_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `buy_history`
--

CREATE TABLE `buy_history` (
  `customer_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL,
  `date_time` date NOT NULL,
  `color` varchar(255) NOT NULL,
  `wheel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `car_id` int(10) NOT NULL,
  `price` bigint(15) NOT NULL,
  `quantity` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `acceleration` varchar(255) DEFAULT NULL,
  `max_speed` varchar(255) DEFAULT NULL,
  `wattage` varchar(255) DEFAULT NULL,
  `torque` varchar(255) DEFAULT NULL,
  `fuel_comsumption` varchar(255) DEFAULT NULL,
  `emissions_co2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`car_id`, `price`, `quantity`, `name`, `acceleration`, `max_speed`, `wattage`, `torque`, `fuel_comsumption`, `emissions_co2`) VALUES
(1000, 3740000000, 3, '718 Boxster', '4.7', '275', '220', '380', '8.1', '180'),
(1001, 3620000000, 2, '718 Cayman', '4.9', '275', '220', '380', '8.0', '181'),
(1002, 7130000000, 3, '911 Carrera', '4.2', '293', '283', '450', '8.5', '190'),
(1003, 8500000000, 1, '911 Targa 4', '4.4', '289', '282', '450', '8.4', '189');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `customer_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL,
  `color` varchar(255) NOT NULL,
  `wheel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `car_of_models`
--

CREATE TABLE `car_of_models` (
  `model_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car_of_models`
--

INSERT INTO `car_of_models` (`model_id`, `car_id`) VALUES
(2000, 1000),
(2000, 1001),
(2001, 1002),
(2001, 1003);

-- --------------------------------------------------------

--
-- Table structure for table `comment_rate`
--

CREATE TABLE `comment_rate` (
  `comment_id` int(10) NOT NULL,
  `content` text NOT NULL,
  `rate` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `car_id` int(10) NOT NULL,
  `img_color` varchar(255) DEFAULT NULL,
  `img_wheel` varchar(255) DEFAULT NULL,
  `beside` char(255) NOT NULL,
  `front` char(255) NOT NULL,
  `back` char(255) NOT NULL,
  `top` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`car_id`, `img_color`, `img_wheel`, `beside`, `front`, `back`, `top`) VALUES
(1000, 'black', 'style2', 'https://localhost/uploads/718 Boxster/black_style1_beside.jpg', 'https://localhost/uploads/718 Boxster/black_style1_front.jpg', 'https://localhost/uploads/718 Boxster/black_style1_back.jpg', 'https://localhost/uploads/718 Boxster/black_top.jpg'),
(1000, 'black', 'style2', 'https://localhost/uploads/718 Boxster/black_style2_beside.jpg', 'https://localhost/uploads/718 Boxster/black_style2_front.jpg', 'https://localhost/uploads/718 Boxster/black_style2_back.jpg', 'https://localhost/uploads/718 Boxster/black_top.jpg'),
(1000, 'blue', 'style1', 'https://localhost/uploads/718 Boxster/blue_style1_beside.jpg', 'https://localhost/uploads/718 Boxster/blue_style1_front.jpg', 'https://localhost/uploads/718 Boxster/blue_style1_back.jpg', 'https://localhost/uploads/718 Boxster/blue_top.jpg'),
(1000, 'blue', 'style2', 'https://localhost/uploads/718 Boxster/blue_style2_beside.jpg', 'https://localhost/uploads/718 Boxster/blue_style2_front.jpg', 'https://localhost/uploads/718 Boxster/blue_style2_back.jpg', 'https://localhost/uploads/718 Boxster/blue_top.jpg'),
(1000, 'red', 'style1', 'https://localhost/uploads/718 Boxster/red_style1_beside.jpg', 'https://localhost/uploads/718 Boxster/red_style1_front.jpg', 'https://localhost/uploads/718 Boxster/red_style1_back.jpg', 'https://localhost/uploads/718 Boxster/red_top.jpg'),
(1000, 'red', 'style2', 'https://localhost/uploads/718 Boxster/red_style2_beside.jpg', 'https://localhost/uploads/718 Boxster/red_style2_front.jpg', 'https://localhost/uploads/718 Boxster/red_style2_back.jpg', 'https://localhost/uploads/718 Boxster/red_top.jpg'),
(1000, 'yellow', 'style1', 'https://localhost/uploads/718 Boxster/yellow_style1_beside.jpg', 'https://localhost/uploads/718 Boxster/yellow_style1_front.jpg', 'https://localhost/uploads/718 Boxster/yellow_style1_back.jpg', 'https://localhost/uploads/718 Boxster/yellow_top.jpg'),
(1000, 'yellow', 'style2', 'https://localhost/uploads/718 Boxster/yellow_style2_beside.jpg', 'https://localhost/uploads/718 Boxster/yellow_style2_front.jpg', 'https://localhost/uploads/718 Boxster/yellow_style2_back.jpg', 'https://localhost/uploads/718 Boxster/yellow_top.jpg'),
(1001, 'black', 'style1', 'https://localhost/uploads/718 Cayman/black_style1_beside.jpg', 'https://localhost/uploads/718 Cayman/black_style1_front.jpg', 'https://localhost/uploads/718 Cayman/black_style1_back.jpg', 'https://localhost/uploads/718 Cayman/black_top.jpg'),
(1001, 'black', 'style2', 'https://localhost/uploads/718 Cayman/black_style2_beside.jpg', 'https://localhost/uploads/718 Cayman/black_style2_front.jpg', 'https://localhost/uploads/718 Cayman/black_style2_back.jpg', 'https://localhost/uploads/718 Cayman/black_top.jpg'),
(1001, 'blue', 'style1', 'https://localhost/uploads/718 Cayman/blue_style1_beside.jpg', 'https://localhost/uploads/718 Cayman/blue_style1_front.jpg', 'https://localhost/uploads/718 Cayman/blue_style1_back.jpg', 'https://localhost/uploads/718 Cayman/blue_top.jpg'),
(1001, 'blue', 'style2', 'https://localhost/uploads/718 Cayman/blue_style2_beside.jpg', 'https://localhost/uploads/718 Cayman/blue_style2_front.jpg', 'https://localhost/uploads/718 Cayman/blue_style2_back.jpg', 'https://localhost/uploads/718 Cayman/blue_top.jpg'),
(1001, 'red', 'style1', 'https://localhost/uploads/718 Cayman/red_style1_beside.jpg', 'https://localhost/uploads/718 Cayman/red_style1_front.jpg', 'https://localhost/uploads/718 Cayman/red_style1_back.jpg', 'https://localhost/uploads/718 Cayman/red_top.jpg'),
(1001, 'red', 'style2', 'https://localhost/uploads/718 Cayman/red_style2_beside.jpg', 'https://localhost/uploads/718 Cayman/red_style2_front.jpg', 'https://localhost/uploads/718 Cayman/red_style2_back.jpg', 'https://localhost/uploads/718 Cayman/red_top.jpg'),
(1001, 'yellow', 'style1', 'https://localhost/uploads/718 Cayman/yellow_style1_beside.jpg', 'https://localhost/uploads/718 Cayman/yellow_style1_front.jpg', 'https://localhost/uploads/718 Cayman/yellow_style1_back.jpg', 'https://localhost/uploads/718 Cayman/yellow_top.jpg'),
(1001, 'yellow', 'style2', 'https://localhost/uploads/718 Cayman/yellow_style2_beside.jpg', 'https://localhost/uploads/718 Cayman/yellow_style2_front.jpg', 'https://localhost/uploads/718 Cayman/yellow_style2_back.jpg', 'https://localhost/uploads/718 Cayman/yellow_top.jpg'),
(1002, 'black', 'style1', 'https://localhost/uploads/911 Carrera/black_style1_beside.jpg', 'https://localhost/uploads/911 Carrera/black_style1_front.jpg', 'https://localhost/uploads/911 Carrera/black_style1_back.jpg', 'https://localhost/uploads/911 Carrera/black_top.jpg'),
(1002, 'black', 'style2', 'https://localhost/uploads/911 Carrera/black_style2_beside.jpg', 'https://localhost/uploads/911 Carrera/black_style2_front.jpg', 'https://localhost/uploads/911 Carrera/black_style2_back.jpg', 'https://localhost/uploads/911 Carrera/black_top.jpg'),
(1002, 'blue', 'style1', 'https://localhost/uploads/911 Carrera/blue_style1_beside.jpg', 'https://localhost/uploads/911 Carrera/blue_style1_front.jpg', 'https://localhost/uploads/911 Carrera/blue_style1_back.jpg', 'https://localhost/uploads/911 Carrera/blue_top.jpg'),
(1002, 'blue', 'style2', 'https://localhost/uploads/911 Carrera/blue_style2_beside.jpg', 'https://localhost/uploads/911 Carrera/blue_style2_front.jpg', 'https://localhost/uploads/911 Carrera/blue_style2_back.jpg', 'https://localhost/uploads/911 Carrera/blue_top.jpg'),
(1002, 'red', 'style1', 'https://localhost/uploads/911 Carrera/red_style1_beside.jpg', 'https://localhost/uploads/911 Carrera/red_style1_front.jpg', 'https://localhost/uploads/911 Carrera/red_style1_back.jpg', 'https://localhost/uploads/911 Carrera/red_top.jpg'),
(1002, 'red', 'style2', 'https://localhost/uploads/911 Carrera/red_style2_beside.jpg', 'https://localhost/uploads/911 Carrera/red_style2_front.jpg', 'https://localhost/uploads/911 Carrera/red_style2_back.jpg', 'https://localhost/uploads/911 Carrera/red_top.jpg'),
(1002, 'yellow', 'style1', 'https://localhost/uploads/911 Carrera/yellow_style1_beside.jpg', 'https://localhost/uploads/911 Carrera/yellow_style1_front.jpg', 'https://localhost/uploads/911 Carrera/yellow_style1_back.jpg', 'https://localhost/uploads/911 Carrera/yellow_top.jpg'),
(1002, 'yellow', 'style2', 'https://localhost/uploads/911 Carrera/yellow_style2_beside.jpg', 'https://localhost/uploads/911 Carrera/yellow_style2_front.jpg', 'https://localhost/uploads/911 Carrera/yellow_style2_back.jpg', 'https://localhost/uploads/911 Carrera/yellow_top.jpg'),
(1003, 'black', 'style1', 'https://localhost/uploads/911 Targa 4/black_style1_beside.jpg', 'https://localhost/uploads/911 Targa 4/black_style1_front.jpg', 'https://localhost/uploads/911 Targa 4/black_style1_back.jpg', 'https://localhost/uploads/911 Targa 4/black_top.jpg'),
(1003, 'black', 'style2', 'https://localhost/uploads/911 Targa 4/black_style2_beside.jpg', 'https://localhost/uploads/911 Targa 4/black_style2_front.jpg', 'https://localhost/uploads/911 Targa 4/black_style2_back.jpg', 'https://localhost/uploads/911 Targa 4/black_top.jpg'),
(1003, 'blue', 'style1', 'https://localhost/uploads/911 Targa 4/blue_style1_beside.jpg', 'https://localhost/uploads/911 Targa 4/blue_style1_front.jpg', 'https://localhost/uploads/911 Targa 4/blue_style1_back.jpg', 'https://localhost/uploads/911 Targa 4/blue_top.jpg'),
(1003, 'blue', 'style2', 'https://localhost/uploads/911 Targa 4/blue_style2_beside.jpg', 'https://localhost/uploads/911 Targa 4/blue_style2_front.jpg', 'https://localhost/uploads/911 Targa 4/blue_style2_back.jpg', 'https://localhost/uploads/911 Targa 4/blue_top.jpg'),
(1003, 'red', 'style1', 'https://localhost/uploads/911 Targa 4/red_style1_beside.jpg', 'https://localhost/uploads/911 Targa 4/red_style1_front.jpg', 'https://localhost/uploads/911 Targa 4/red_style1_back.jpg', 'https://localhost/uploads/911 Targa 4/red_top.jpg'),
(1003, 'red', 'style2', 'https://localhost/uploads/911 Targa 4/red_style2_beside.jpg', 'https://localhost/uploads/911 Targa 4/red_style2_front.jpg', 'https://localhost/uploads/911 Targa 4/red_style2_back.jpg', 'https://localhost/uploads/911 Targa 4/red_top.jpg'),
(1003, 'yellow', 'style1', 'https://localhost/uploads/911 Targa 4/yellow_style1_beside.jpg', 'https://localhost/uploads/911 Targa 4/yellow_style1_front.jpg', 'https://localhost/uploads/911 Targa 4/yellow_style1_back.jpg', 'https://localhost/uploads/911 Targa 4/yellow_top.jpg'),
(1003, 'yellow', 'style2', 'https://localhost/uploads/911 Targa 4/yellow_style2_beside.jpg', 'https://localhost/uploads/911 Targa 4/yellow_style2_front.jpg', 'https://localhost/uploads/911 Targa 4/yellow_style2_back.jpg', 'https://localhost/uploads/911 Targa 4/yellow_top.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `models`
--

CREATE TABLE `models` (
  `model_id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`model_id`, `name`) VALUES
(2000, '718'),
(2001, '911 Carrera & Targa');

-- --------------------------------------------------------

--
-- Table structure for table `write_comment_rate`
--

CREATE TABLE `write_comment_rate` (
  `customer_id` int(10) NOT NULL,
  `car_id` int(10) NOT NULL,
  `comment_id` int(10) NOT NULL,
  `date_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- Indexes for table `brand_has_model`
--
ALTER TABLE `brand_has_model`
  ADD PRIMARY KEY (`brand_id`,`model_id`),
  ADD KEY `FK_model_has` (`model_id`);

--
-- Indexes for table `buy_history`
--
ALTER TABLE `buy_history`
  ADD PRIMARY KEY (`car_id`,`customer_id`),
  ADD KEY `FK_buy_history_customer` (`customer_id`);

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`car_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`car_id`,`customer_id`),
  ADD KEY `FK_cart_customer` (`customer_id`);

--
-- Indexes for table `car_of_models`
--
ALTER TABLE `car_of_models`
  ADD PRIMARY KEY (`model_id`,`car_id`),
  ADD KEY `FK_car` (`car_id`);

--
-- Indexes for table `comment_rate`
--
ALTER TABLE `comment_rate`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`car_id`,`front`) USING BTREE;

--
-- Indexes for table `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`model_id`);

--
-- Indexes for table `write_comment_rate`
--
ALTER TABLE `write_comment_rate`
  ADD PRIMARY KEY (`car_id`,`customer_id`,`comment_id`),
  ADD KEY `FK_write_comment_rate_customer` (`customer_id`),
  ADD KEY `FK_write_comment_rate_comment` (`comment_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `FK_admin_user` FOREIGN KEY (`admin_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `brand_has_model`
--
ALTER TABLE `brand_has_model`
  ADD CONSTRAINT `FK_brand_has` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`brand_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_model_has` FOREIGN KEY (`model_id`) REFERENCES `models` (`model_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `buy_history`
--
ALTER TABLE `buy_history`
  ADD CONSTRAINT `FK_buy_history_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_buy_history_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_cart_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_cart_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `car_of_models`
--
ALTER TABLE `car_of_models`
  ADD CONSTRAINT `FK_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_model` FOREIGN KEY (`model_id`) REFERENCES `models` (`model_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `FK_customer_user` FOREIGN KEY (`customer_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `FK_image_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `write_comment_rate`
--
ALTER TABLE `write_comment_rate`
  ADD CONSTRAINT `FK_write_comment_rate_car` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_write_comment_rate_comment` FOREIGN KEY (`comment_id`) REFERENCES `comment_rate` (`comment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_write_comment_rate_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
