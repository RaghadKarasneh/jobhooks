<?php
include_once "connection.php";

$first_name=$_REQUEST['first_name'];
$last_name=$_REQUEST['last_name'];
$email=$_REQUEST['email'];
$password=$_REQUEST['pass'];
$phone_number=$_REQUEST['phone'];

$sql="INSERT INTO user(`first_name`, `last_name`, `email`, `password`, `phone_number`) VALUES('$first_name', '$last_name', '$email', '$password', '$phone_number')";

mysqli_query($con,$sql);

$con->close();

?>