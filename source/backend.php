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
        return $lable. ": " .clean_string($_POST[$key]) . "\r\n";
    }
}

function getFormStr($name){
    if($name == "contact-form"){
        return "Contact Form";
    } else if ($name == "offer-one-contact-form"){
        return "Private Managed APPUiO Form";
    } else if ($name == "offer-two-contact-form"){
        return "Order APPUiO Public Platform";
    } else if ($name == "offer-three-contact-form"){
        return "On-Premises APPUiO Form";
    } else {
        return "Contact Form";
    }
}

if (isset($_POST['email'])) {

    $form = getFormStr(clean_string($_POST["form"]));

    $email_to = "support@appuio.ch";
    $email_subject = $form . " " .clean_string($_POST["nachname"]). " ". clean_string($_POST["vorname"]);
    $email_from = $_POST["email"];

    $email_message .= addToMessage("vorname", "Vorname");
    $email_message .= addToMessage("nachname", "Nachname");
    $email_message .= addToMessage("firma", "Firma");
    $email_message .= addToMessage("email", "Email");
    $email_message .= addToMessage("strasse", "Strasse");
    $email_message .= addToMessage("ort", "Ort");
    $email_message .= addToMessage("plz", "Ort");
    $email_message .= addToMessage("telefon", "Telefonnummer");
    $email_message .= addToMessage("interests", "Interessen");
    $email_message .= "\r\n";
    $email_message .= addToMessage("message", "Mitteilung");

    // create email headers
    $headers = 'From: ' . $email_to . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
        'Content-type: text/plain; charset=UTF-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($email_to, $email_subject, $email_message, $headers);
} else {
    echo "email not set";
}
