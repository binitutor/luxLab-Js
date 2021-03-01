<?php

$host         = "50.62.141.184";
$username     = "lux_1";
$password     = "luxlabinc";
$dbname       = "lux_booking_db_2";
$result = 0;

/* Create connection */
$conn = new mysqli($host, $username, $password, $dbname);

/* Check connection */
if ($conn->connect_error) {
     die("Connection to database failed: " . $conn->connect_error);
}

//edit
/* Get data from Client side using $_POST array */
$cusName  = $_POST['cusName'];
$cusPhone  = $_POST['cusPhone'];
$cusEmail  = $_POST['cusEmail'];
$reqDate  = $_POST['reqDate'];
$reqHour  = $_POST['reqHour'];
// $decision  = $_POST['decision'];

//SQL query to get results from database
$sql = "INSERT INTO hourCalendar (cusName, cusPhone, cusEmail, reqDate, reqHour) VALUES (?, ?, ?, ?, ?)  ";
$stmt   = $conn->prepare($sql);
$stmt->bind_param('sssss', $cusName, $cusPhone, $cusEmail, $reqDate, $reqHour);
if($stmt->execute()){
    $result = 1;
}
   
echo $result;

//!edit

$conn->close();

?>


