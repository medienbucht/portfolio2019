<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent=" From: $name \n  Message: $message";
$recipient = "henrik@medienbucht.de";
$subject = "medienbucht.de Kontaktformular";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Hoppla, beim Senden Ihrer Nachricht lief etwas schief. Bitte versuchen Sie es noch einmal oder nutzen die anderen Kontaktmöglichkeiten.");
echo "Vielen Dank für Ihre Nachricht!";
?>