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

function createLogMessage($subject, $from_email, $message, $message_back){
    $log = "*********************************\n";
    $log .= "Date: " . date("Y-m-d H:i:s") . "\n";
    $log .= "From: " . $from_email . "\n";
    $log .= "Subject: " . $subject . "\n";
    $log .= "Message: " . $message . "\n";
    $log .= "MessageBack: " . $message_back . "\n";
    $log .= "*********************************\n";
    return $log;
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

function getEmailTo($name){
    if($name == "contact-form"){
        return "hello@appuio.ch";
    } else if ($name == "offer-one-contact-form"){
        return "hello@appuio.ch";
    } else if ($name == "offer-two-contact-form"){
        return "support@appuio.ch";
    } else if ($name == "offer-three-contact-form"){
        return "hello@appuio.ch";
    } else {
        return "hello@appuio.ch";
    }
}

$form = getFormStr(clean_string($_POST["form"]));

$email_to = getEmailTo(clean_string($_POST["form"]));

$email_subject = $form . " " .clean_string($_POST["nachname"]). " ". clean_string($_POST["vorname"]);
$email_from = $_POST["email"];

$email_message .= addToMessage("vorname", "Vorname");
$email_message .= addToMessage("nachname", "Nachname");
$email_message .= addToMessage("firma", "Firma");
$email_message .= addToMessage("email", "Email");
$email_message .= addToMessage("strasse", "Strasse");
$email_message .= addToMessage("ort", "Ort");
$email_message .= addToMessage("plz", "PLZ");
$email_message .= addToMessage("telefon", "Telefonnummer");
$email_message .= addToMessage("interests", "Interessen");
$email_message .= addToMessage("dedicated", "Dedicated Node");
$email_message .= addToMessage("priceSource", "Public Zone");
$email_message .= "\r\n";
$email_message .= addToMessage("message", "Mitteilung");

$message_back = addToMessage("messageback");

if (isset($_POST['email'])) {

    //file_put_contents($_SERVER["DOCUMENT_ROOT"]."/data/submissions.log" , createLogMessage($email_subject, $email_from, $email_message, $message_back));

    // create email headers
    $headers = 'From: ' . $email_to . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
        'Content-type: text/plain; charset=UTF-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($email_to, $email_subject, $email_message, $headers);
} else {
    echo "email not set";
    //file_put_contents($_SERVER["DOCUMENT_ROOT"]."/data/submissions.log" , createLogMessage($email_subject, "Email not set", $email_message));

}
