<!--
    create new requests (POST) : customer
    --- sends request to db table: requestList
    --- data passed: 
        - cusName: str, 
        - cusPhone: str,
        - cusEmail: str, 
        - reqDate: str,
        - reqHour: str
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

/* validate whether user has entered all values. */
// if(!$crDate || !$crHour || !$avail){
//   $result = 2;
// }elseif (!strpos($email, "@") || !strpos($email, ".")) {
//   $result = 3;
// }
// else {
//   //SQL query to get results from database
//   $sql    = "insert into users (first_name, last_name, email) values (?, ?, ?)  ";
//   $stmt   = $conn->prepare($sql);
//   $stmt->bind_param('sss', $fname, $lname, $email);
//   if($stmt->execute()){
//      $result = 1;
//   }
// }

//SQL query to get results from database
$sql = "INSERT INTO requestList (cusName, cusPhone, cusEmail, reqDate, reqHour) values (?, ?, ?, ?, ?)  ";
$stmt   = $conn->prepare($sql);
$stmt->bind_param('sssss', $cusName, $cusPhone, $cusEmail, $reqDate, $reqHour);
if($stmt->execute()){
    $result = 1;
}
   
echo $result;

//!edit

$conn->close();

?>