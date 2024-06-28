<?php
session_start();
require 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    $stmt = $conn->prepare("SELECT id, password, user_group FROM users WHERE username = ?");
    $stmt->bind_param('s', $username);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($id, $hashed_password, $user_group);
    
    if ($stmt->num_rows > 0) {
        $stmt->fetch();
        if (hash('sha256', $password) == $hashed_password) {
            $_SESSION['user_id'] = $id;
            $_SESSION['user_group'] = $user_group;
            header("Location: ../dashboard.html");
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "Invalid username.";
    }
}
?>
