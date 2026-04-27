<?php
include 'home_db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$type = $_POST['type'];
$message = $_POST['message'];

$sql = "INSERT INTO design (name, email, type, message)
VALUES ('$name', '$email','$type', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>