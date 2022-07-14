<?php
require_once './connection';
// echo '<html>
// <body>

// <form action="" method="post">
// Search <input type="text" name="search"><br>
// <input type ="submit">
// </form>

// </body>
// </html>'

$search = $_POST['search'];

$sql = "select * from students where $column like '%$search%'";

$result = $conn->query($sql);

if ($result->num_rows > 0){
while($row = $result->fetch_assoc() ){
	echo $row["name"]."  ".$row["age"]."  ".$row["gender"]."<br>";
}
} else {
	echo "No result";
}
?>