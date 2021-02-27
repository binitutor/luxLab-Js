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

/* Get data from Client side using $_POST array */
$crDate  = $_POST['crDate'];
$crTime  = $_POST['crTime'];
$available  = $_POST['available'];
$cusName  = $_POST['cusName'];
$cusPhone  = $_POST['cusPhone'];
$cusEmail  = $_POST['cusEmail'];
$reqDate  = $_POST['reqDate'];
$reqHour  = $_POST['reqHour'];
$decision  = $_POST['decision'];


// $sql    = "INSERT INTO hourCalendar (crDate, crTime, available, cusName, cusPhone, cusEmail, reqDate, reqHour, decision) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
// $stmt   = $conn->prepare($sql);
// $stmt->bind_param('sssssssss', $crDate, $crTime, $available, $cusName, $cusPhone, $cusEmail, $reqDate, $reqHour, $decision);
// if($stmt->execute()){
//     $result = 1;
// }
   
   
/* validate whether user has entered all values. */
if(!$crDate || !$crTime || !$available || !$cusName || !$cusPhone || !$cusEmail || !$reqDate || !$reqHour || !$decision){
  $result = 2;
}elseif (!strpos($cusEmail, "@") || !strpos($cusEmail, ".")) {
  $result = 3;
}
else {
  //SQL query to get results from database
  $sql    = "INSERT INTO hourCalendar (crDate, crTime, available, cusName, cusPhone, cusEmail, reqDate, reqHour, decision) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
  $stmt   = $conn->prepare($sql);
  $stmt->bind_param('sssssssss', $crDate, $crTime, $available, $cusName, $cusPhone, $cusEmail, $reqDate, $reqHour, $decision);
  if($stmt->execute()){
     $result = 1;
  }
}
echo $result;
$conn->close();

?>
