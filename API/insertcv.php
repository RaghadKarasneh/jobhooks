<?php
include_once "./connection.php";

// $id = $_REQUEST['id'];    // whrer id 
// $profile = $_REQUEST["profile"];
$user_id         = $_REQUEST["user_id"];
$language        = $_REQUEST["language"];
$written_level   = $_REQUEST["written_level"];
$spoken_level    = $_REQUEST["spoken_level"];
$cover_letter    = $_REQUEST["cover_letter"];
$address_one     = $_REQUEST["address_one"];
$address_two     = $_REQUEST["address_two"];
$city            = $_REQUEST["city"];
$country         = $_REQUEST["country"];
$state           = $_REQUEST["state"];
$postal          = $_REQUEST["postal"];
$online_profile  = $_REQUEST["online_profile"];
$pro_type        = $_REQUEST["profile_type"];
$company_id      = $_REQUEST["company_id"];


$sql="INSERT INTO `application` (`user_id`, `Language`, `written_level`, `spoken_level`, `cover_letter`, `address_one`, `address_two`, `city`, `country`, `state`, `postal`, `online_profile`, `profile_type`, `company_id`) VALUES ('$user_id','$language','$written_level','$spoken_level','$cover_letter', '$address_one', '$address_two', '$city','$country', '$state','$postal', '$online_profile', '$pro_type', '$company_id');";

mysqli_query($con,$sql);
?>