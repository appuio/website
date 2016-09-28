<?php

/*
 * index.php
 * ---------
 * vorname
 * nachname
 * email
 * message
 *
 * interests[]
 *
 * private managed
 * ---------------
 * vorname
 * nachname
 * firma
 * email
 * phone
 * message
 *
 * interests[]
 *
 * public platform
 * ---------------
 * vorname
 * nachname
 * firma
 * email
 * adresse
 * ort
 * phone
 * message
 *
 * interests[]
 * terms
 *
 * on premises
 * ---------------
 * vorname
 * nachname
 * firma
 * email
 * phone
 * message
 *
 */

function clean_string($string){
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

function addToMessage($key, $lable){
    if(array_key_exists($key, $_POST)){
        return $lable. ": " .clean_string($_POST[$key]) . "\n";
    }
}

if (isset($_POST['email'])) {

    $email_to = "support@appuio.ch";
    $email_subject = "Contact form " . clean_string($_POST["vorname"]) . " " . clean_string($_POST["nachname"]);
    $email_from = $_POST["email"];

    $email_message .= addToMessage("vorname", "Vorname");
    $email_message .= addToMessage("nachname", "Nachname");
    $email_message .= addToMessage("firma", "Firma");
    $email_message .= addToMessage("email", "Email");
    $email_message .= addToMessage("adresse", "Adresse");
    $email_message .= addToMessage("ort", "Ort");
    $email_message .= addToMessage("phone", "Telefonnummer");
    $email_message .= addToMessage("message", "Mitteilung");


    // create email headers
    $headers = 'From: ' . $email_to . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
        'Content-type: text/html; charset=UTF-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($email_to, $email_subject, $email_message, $headers);
} else {
    echo "email not set";
}
