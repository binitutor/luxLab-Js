<!--
    fetch calendar hour (GET) : staff | customers
    --- calls for available hours from db table: hourCalendar
    --- data fetched: 
        - crDate: str, 
        - crHour: str, 
        - available: bool, default -> false (0)
-->
<?php
$host         = "50.62.141.184";
$username     = "luxlab_admin";
$password     = "LBooking2021";
$dbname       = "luxlab_booking";

$result_array = array();

/* Create connection */
$conn = new mysqli($host, $username, $password, $dbname);

/* Check connection */
if ($conn->connect_error) {
     die("Connection to database failed: " . $conn->connect_error);
}

// get results from db
$sql = "SELECT id, crDate, crHour, available FROM hourCalendar";

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
