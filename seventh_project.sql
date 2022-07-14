-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 14, 2022 at 12:26 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `seventh_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `id` int(14) NOT NULL,
  `user_id` int(14) DEFAULT NULL,
  `Language` varchar(255) DEFAULT NULL,
  `written_level` varchar(255) DEFAULT NULL,
  `spoken_level` varchar(255) NOT NULL,
  `cover_letter` int(11) NOT NULL,
  `address_one` varchar(255) NOT NULL,
  `address_two` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `postal` varchar(255) NOT NULL,
  `online_profile` varchar(255) NOT NULL,
  `profile_type` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`id`, `user_id`, `Language`, `written_level`, `spoken_level`, `cover_letter`, `address_one`, `address_two`, `city`, `country`, `state`, `postal`, `online_profile`, `profile_type`, `created_at`, `updated_at`, `company_id`) VALUES
(13, 999, 'Arabic', 'Fluent', 'Fluent', 999, 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'aa', 'test-name', '2022-07-13 16:10:30', '2022-07-13 16:10:30', 111),
(14, 999, 'English', 'Fluent', 'Fluent', 0, 'Aqaba', 'Aqaba', 'Aqaba', 'Jordan', 'Aqaba', '007711', 'https://github.com/tamara126enad', 'GetHub', '2022-07-13 17:20:21', '2022-07-13 17:20:21', 111);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(14) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `department_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `department_name`, `created_at`, `updated_at`) VALUES
(0, 'IT', 'Technology', '2022-07-07 09:55:52', '2022-07-07 09:55:52');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `uname` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `msg` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`uname`, `email`, `msg`) VALUES
('', 'tt@mail.com', 'hello'),
('tt', 'tt@mail.com', 'hello');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `job_name` varchar(255) DEFAULT NULL,
  `department_name` varchar(255) NOT NULL,
  `job_type` varchar(255) NOT NULL,
  `job_location` varchar(255) NOT NULL,
  `education_level` varchar(255) NOT NULL,
  `experience` varchar(255) DEFAULT NULL,
  `experience_years` varchar(255) DEFAULT NULL,
  `salary` int(14) NOT NULL,
  `description` varchar(255) NOT NULL,
  `skill_one` varchar(255) DEFAULT NULL,
  `skill_two` varchar(255) NOT NULL,
  `skill_three` varchar(255) NOT NULL,
  `skill_four` varchar(255) NOT NULL,
  `requirement_one` varchar(255) NOT NULL,
  `requirement_two` varchar(255) NOT NULL,
  `requirement_three` varchar(255) NOT NULL,
  `requirement_four` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `company_name`, `job_name`, `department_name`, `job_type`, `job_location`, `education_level`, `experience`, `experience_years`, `salary`, `description`, `skill_one`, `skill_two`, `skill_three`, `skill_four`, `requirement_one`, `requirement_two`, `requirement_three`, `requirement_four`, `email`, `phone`, `img`, `created_at`, `updated_at`) VALUES
(1, 'Independent School District', 'Biology Teacher', 'Teaching', 'Full-Time', 'Jordan', 'Bachelor\'s degree in Biology or relevant degree.', 'MidLevel', '3', 500, 'Provide students with appropriate learning activities and experiences designed to help them fulfill their potential for intellectual, emotional, physical, and social growth. Enable students to develop competencies and skills to function successfully in so', 'Preparing and delivering engaging biology lessons to students from different backgrounds, who all have different interests and abilities.', 'Able to foster in students knowledge of and respect for the order and beauty of creation, an awareness of the forces that shape our physical and biological world.', 'Establishing classroom, laboratory, and field trip rules and ensuring all students understand and accept them.', 'Able to teach students to reason rigorously and logically to attain relevant truths about the physical world, about the common good of man, and knowledge of things and their proper causes', 'A completed teaching apprenticeship recommended.', 'Excellent interpersonal, oral, and written communication skills.', 'Patience, resilience, and cultural sensitivity.', 'Building rapport with students so that they feel comfortable and safe discussing sensitive topics in class.', 'independent.school.district@gmail.com', '00962 777 777 777', 'https://media.istockphoto.com/photos/young-male-hispanic-teacher-in-biology-class-holding-digital-tablet-picture-id941761200?b=1&k=20&m=941761200&s=170667a&w=0&h=SrbyMAyZPleKeRTR57mDI5LZHf0ewKB2QkHud2BuACQ=', '2022-07-06 09:09:27', '2022-07-06 09:09:27'),
(2, 'St. Andrew Nativity School', 'Math Teacher', 'Teaching', 'Part-Time', 'US', 'Bachelor\'s degree in Mathematics or relevant degree.', 'Senior', '5', 700, 'As a math teacher, you will be required to deliver lessons that develop students\' theoretical and applied mathematical skills. You will also be responsible for assigning homework, grading assignments and quizzes, and documenting students\' progress.', 'Strong knowledge in teaching.', 'Theoretical and applied mathematical skills.', 'Communication Skills', 'Flexibility and high adaptation skills to work successfully in an unpredictable school setting', 'Proven experience as a Math Teacher.', 'A thorough understanding of best practices in teaching.', 'Excellent verbal and written communication skills.', 'Outstanding interpersonal skills.', 'andrew.nativity.school@gmail.com', '00 1 202 588 6500', 'https://media.istockphoto.com/photos/young-student-writing-with-chalk-on-green-chalk-board-in-classroom-picture-id944039072?k=20&m=944039072&s=612x612&w=0&h=DTECLduTvVvzVVobEIA4wYRIgMb4bH7jGiSfUtKly6U=', '2022-07-06 09:13:46', '2022-07-06 09:13:46'),
(3, 'Husky Injection Molding', 'Software Developer', 'IT', 'Remote', 'UAE', 'Bachelor\'s degree in CS, CPE, CIS, or relevant degree.', 'Junior', '2', 1000, 'We are looking for a passionate Software Engineer to design, develop and install software solutions. The successful candidate will be able to build high-quality, innovative and fully performing software in compliance with coding standards and technical de', 'Strong knowledge in web development', 'Ability to Learn Quickly.', 'General Programming Skills.', 'Software Testing.', 'Ability to develop software in C, C++, C#, Java or other selected languages.', 'Excellent knowledge of Relational Databases, SQL and ORM technologies (JPA2, Hibernate).', 'Experience in developing web applications using at least one popular web framework (JSF, Wicket, GWT, Spring MVC).', 'Experience with test-driven development.', 'husky.injection.molding@gmail.com', '0011 971 4 000 000 ', 'https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg', '2022-07-06 09:56:03', '2022-07-06 09:56:03'),
(4, 'Adams County Colorado', 'Accountant', 'Accounting', 'Hybrid', 'France', 'Bachelor\'s degree in Accounting, Finance or relevant degree.', 'Fresh', '1', 450, 'We are looking for an Accountant to manage all financial transactions, from fixed payments and variable expenses to bank deposits and budgets.', 'Excellent knowledge of accounting regulations and procedures, including the Generally Accepted Accounting Principles (GAAP).', 'Hands-on experience with accounting software like FreshBooks and QuickBooks.', 'Advanced MS Excel skills including Vlookups and pivot tables.', 'Strong attention to detail and good analytical skills.', 'Tracking payments to internal and external stakeholders.', 'Preparing budget forecasts.', 'Processing tax payments and returns.', 'Auditing financial documents and procedures, reconciling bank statements and calculating tax payments and returns.', 'adams.county.colorado@gmail.com', '01 09 75 83 51', 'https://cdn.pixabay.com/photo/2015/01/28/22/20/bookkeeping-615384__340.jpg', '2022-07-06 09:58:33', '2022-07-06 09:58:33'),
(6, 'ABC', 'Developer', 'IT', 'Full-Time', 'Jordan', 'information technology', 'MidLevel', '3', 1000, 'Full-stack web developer', 'BackEnd Development Languages.', 'Database Management Systems.', 'Fundamentals of Designs.', 'REST and SOAP.', 'Requirement 1', 'Requirement 2', 'Requirement 3', 'Requirement 4', 'abc@info.com', '077 1010101', 'https://cdn.pixabay.com/photo/2016/11/19/14/16/man-1839500__340.jpg', '2022-07-13 17:24:13', '2022-07-13 17:24:13');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `address` varchar(50) NOT NULL,
  `is_login` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `email`, `password`, `phone_number`, `resume`, `address`, `is_login`, `created_at`, `updated_at`) VALUES
(1, 'Tamaraa', '', '', 'Aas012345*', '', NULL, 'Aqaba', 0, '2022-07-13 15:53:40', '2022-07-13 15:53:40'),
(4, 'Tamara', 'shabatat', 'tama@mail.com', 'Aas012345*', '077 1010101', NULL, 'Aqaba', 0, '2022-07-13 17:16:25', '2022-07-13 17:16:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`uname`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(14) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
