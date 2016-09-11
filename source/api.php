<?php
  if(isset($_POST['email'])) {

    $email_to = "hello@appuio.ch";
    $email_subject = "APPUiO Contact form";
    $email_from = $_POST["email"];

    $email_message = "<br/>\n\n";

    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    foreach ($_POST as $key => $value) {
    	$email_message .= clean_string($key).": ".clean_string($value)."<br/>\n\n";
    }

    $myfile = fopen("forms/data.txt", "w") or die("Unable to open file!");
    fwrite($myfile, "***********************\n");
    fwrite($myfile, date('Y-m-d\TH:i:s').\n);
    fwrite($myfile, $email_message);
    fwrite($myfile, "***********************\n\n");
    
    fclose($myfile);
    
    // create email headers
    $headers = 'From: '.$email_to."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'Content-type: text/html; charset=UTF-8' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    //mail($email_to, $email_subject, $email_message, $headers);
  }else{
  	echo "Email not set";
  }
?>