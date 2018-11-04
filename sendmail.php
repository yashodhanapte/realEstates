<?php

if($_POST["submit"]) {
    $recipient="yashodhanapte@gmail.com";
    $subject="Form to email message";
    $firstname=$_POST["firstname"];
    $lastname=$_POST["lastname"];
    $res_add=$_POST["res_address"];
    $off_add=$_POST["off_address"];
    $phone=$_POST["phone"];
    $email=$_POST["email"];
    $location=$_POST["location"];
    // $message=$_POST["message"];

    $mailBody="FirstName: $firstname\nLastName: $lastname\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $firstname <$email>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
?>