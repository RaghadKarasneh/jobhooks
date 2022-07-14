<?php
include_once "connection.php";

$sql = "select * from user";
$arr =  array();

$result  = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
} else {
    echo "0 results";
}
print_r(json_encode($arr));


$conn->close();

?>