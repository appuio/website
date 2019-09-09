<?php
function clean_string($string){
    $bad = array("content-type", "bcc:", "to:", "cc:", "href");
    return str_replace($bad, "", $string);
}

function addToMessage($key, $lable){
    if(array_key_exists($key, $_POST)){
        return $lable. ": " .clean_string($_POST[$key]) . "\r\n";
    }
}

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

// From which form
$form = clean_string("beerFormPlaceholder");

// To which email
$email_to = clean_string("mailPlaceholder");

$email_subject = "Someone wants to drink a beer!";
$email_from = $_POST["beerMail"];

// Add content to mail
$email_message .= addToMessage("email", "beerMail");

if (isset($_POST['beerMail'])) {

    // create email headers
    $headers = 'From: ' . $email_to . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
        'Content-type: text/plain; charset=UTF-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    mail($email_to, $email_subject, $email_message, $headers);
} else {
    echo "email not set";
}
