<?php
include_once "./connection.php";

$id = $_REQUEST['id'];    // whrer id 
$first = $_REQUEST["firstName"];
$last = $_REQUEST["lastName"];
$email= $_REQUEST["email"];
$phone= $_REQUEST["phone"];
$password= $_REQUEST["password"];


$sql="UPDATE user SET first_name='$first', last_name='$last', email='$email', phone_number='$phone', password='$password'  WHERE id='$id';";

mysqli_query($con,$sql);
?>

