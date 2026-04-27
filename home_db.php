<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "home";

// Create connection
$conn = mysqli_connect("localhost", "root", "", "home");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>