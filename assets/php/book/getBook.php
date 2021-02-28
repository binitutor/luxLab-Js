<?php

$host         = "50.62.141.184";
$username     = "lux_1";
$password     = "luxlabinc";
$dbname       = "lux_booking_db_2";

$result_array = array();

/* Create connection */
$conn = new mysqli($host, $username, $password, $dbname);

/* Check connection */
if ($conn->connect_error) {
     die("Connection to database failed: " . $conn->connect_error);
}

// get results from db
$sql = "SELECT id, crTime FROM hourCalendar";

$result = $conn->query($sql);

// if data found, push it to array
if($result->num_rows > 0) {
    while($row = $result -> fetch_assoc()) {
        array_push($result_array, $row);
    }
}

// send json encoded array to client
echo json_encode($result_array);

$conn->close();

?>
