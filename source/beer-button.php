<?php
// function createLogMessage($subject, $from_email, $message, $message_back){
//     $log = "*********************************\n";
//     $log .= "Date: " . date("Y-m-d H:i:s") . "\n";
//     $log .= "From: " . $from_email . "\n";
//     $log .= "Subject: " . $subject . "\n";
//     $log .= "Message: " . $message . "\n";
//     $log .= "MessageBack: " . $message_back . "\n";
//     $log .= "*********************************\n";
//     return $log;
// }

$message = isset($_POST['beerEmail']) ? $_POST['beerEmail'] : false;

if($message != false) {
    $to = "hertig@puzzle.ch";
    $subject = "Someone wants to drink a beer!";
    $message = $message;
    $success = sendMail($to, $subject, $message);
    return $success;
}

function sendMail($toEmail, $subject, $message) {
    $validFromEmail = spamcheck($fromEmail);
    if($validFromEmail) {
        mail($toEmail, $subject, $message, "From: $message");
    }
    return 1;
}
