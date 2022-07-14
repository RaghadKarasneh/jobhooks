<?php
include_once "./connection.php";

///sara
 $log="SELECT * FROM `user` WHERE is_login='1'";
 $result2=mysqli_query($con,$log);
 $isLogin=mysqli_num_rows($result2);

//  echo "$isLogin";
 echo json_encode("[{
    islogin: $isLogin;
 }]");

 ?>