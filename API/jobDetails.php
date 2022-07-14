<?php 

include './connection.php';

  
$id=$_REQUEST['id'];
$sql2 = "select * from jobs where id='$id'";
$result2 = mysqli_query($con, $sql2);
for($i=0; $i<mysqli_num_rows($result2) ;$i++ ){
    echo($i>0?' ,': '').json_encode(mysqli_fetch_object($result2));
    
}?>