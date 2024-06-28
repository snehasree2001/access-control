<?php
session_start();

function check_access($page) {
    if (!isset($_SESSION['user_group'])) {
        echo 'access_denied';
        exit();
    }
    
    $user_group = $_SESSION['user_group'];

    $access_control = [
        'a' => ['home.html', 'about-us.html'],
        'b' => ['contact-us.html', 'feedback.html']
    ];

    if (!in_array($page, $access_control[$user_group])) {
        echo 'access_denied';
        exit();
    }
    
    echo 'access_granted';
}

if (isset($_GET['page'])) {
    check_access($_GET['page']);
} else {
    echo 'access_denied';
}
?>
