<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$pos1 = strpos($message, 'href');
$pos2 = strpos($message, 'porn');
$pos3 = strpos($message, 'casino');
$spam = "";
if($pos1 >=0 | $pos2 >=0 |$pos3 >=0){
    $spam = "SPAM: ";
}
$formcontent="$spam From: $name \n  Message: $message";
$recipient = "henrik@medienbucht.de";
$subject = $spam."medienbucht.de Kontaktformular";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Hoppla, beim Senden Ihrer Nachricht lief etwas schief. Bitte versuchen Sie es noch einmal oder nutzen die anderen Kontaktmöglichkeiten.");
echo "Vielen Dank für Ihre Nachricht!";
?>