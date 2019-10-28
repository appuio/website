<?php

$message = isset($_GET['beerEmail']) ? $_GET['beerEmail'] : false;


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
