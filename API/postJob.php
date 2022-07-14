<?php
include_once "./connection.php";

// $id = $_REQUEST['id'];    // whrer id 
// $profile = $_REQUEST["profile"];
$company_name = $_REQUEST["company_name"];
$job_name = $_REQUEST["job_name"];
$department_name= $_REQUEST["department_name"];
$job_type= $_REQUEST["job_type"];
$job_location= $_REQUEST["job_location"];
$education_level= $_REQUEST["education_level"];
$experience= $_REQUEST["experience"];
$experience_years= $_REQUEST["experience_years"];
$salary= $_REQUEST["salary"];
$description= $_REQUEST["description"];
$skill_one= $_REQUEST["skill_one"];
$skill_two= $_REQUEST["skill_two"];
$skill_three= $_REQUEST["skill_three"];
$skill_four= $_REQUEST["skill_four"];
$requirement_one= $_REQUEST["requirement_one"];
$requirement_two= $_REQUEST["requirement_two"];
$requirement_three= $_REQUEST["requirement_three"];
$requirement_four= $_REQUEST["requirement_four"];
$email= $_REQUEST["email"];
$phone= $_REQUEST["phone"];

$sql="INSERT INTO jobs (company_name, job_name, department_name, job_type, job_location, education_level, experience, experience_years, salary, description, skill_one, skill_two, skill_three, skill_four, requirement_one, requirement_two, requirement_three, requirement_four, email, phone) VALUES ('$company_name','$job_name','$department_name','$job_type','$job_location', '$education_level', '$experience', '$experience_years','$salary', '$description','$skill_one', '$skill_two', '$skill_three', '$skill_four', '$requirement_one', '$requirement_two', '$requirement_three', '$requirement_four', '$email', '$phone');";
mysqli_query($con,$sql);
?>