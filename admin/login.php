<?php
session_start();

$valid_username = "aravind";
$valid_password = "rex123";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"] ?? "";
    $password = $_POST["password"] ?? "";

    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION["loggedin"] = true;
        header("Location: ../admin.html");  // Redirect to main admin panel
        exit;
    } else {
        echo "<script>alert('Invalid credentials'); window.location.href='login.html';</script>";
    }
}
?>
