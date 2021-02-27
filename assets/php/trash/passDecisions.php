<!--
    pass decision (POST) : staff
    --- sends final decision on requests to db table: decidedList
    --- data passed: 
        - cusName: str, 
        - cusPhone: str,
        - cusEmail: str, 
        - reqDate: str,
        - reqHour: str,
        - decision: str
-->
<?php
$host         = "50.62.141.184";
$dbname       = "luxlab_booking";
$username     = "luxlab_admin";
$password     = "LBooking2021";

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
$decision  = $_POST['decision'];

//SQL query to get results from database
$sql = "INSERT INTO decidedList (cusName, cusPhone, cusEmail, reqDate, reqHour, decision) values (?, ?, ?, ?, ?, ?)  ";
$stmt   = $conn->prepare($sql);
$stmt->bind_param('ssssss', $cusName, $cusPhone, $cusEmail, $reqDate, $reqHour, $decision);
if($stmt->execute()){
    $result = 1;
}
   
echo $result;

//!edit

$conn->close();

?>