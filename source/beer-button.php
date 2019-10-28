<?php

$message = isset($_POST['beerEmail']) ? $_POST['beerEmail'] : false;


if($message != false) {
    $to = "hertig@puzzle.ch";
    $subject = "Someone wants to drink a beer!";
    $message = $message;
    mail($to, $subject, $message, "From: $message");
    echo "1";
} else {
  echo "no email provided";
}

?>
