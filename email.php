<?php

$errors = '';								/*==================================*/
$myemail = 'support@themetrading.com';		//Put Your email address here.
if(empty($_POST['name'])  ||				/*==================================*/
   empty($_POST['email']) ||
   empty($_POST['subject']) || 
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

$first = $_POST['name'];
$email_address = $_POST['email'];
$subject = $_POST['subject']; 
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "$subject";
	$email_body = "You have received a new message from: $first". 
	" Here are the details:\n $message"; 
															/*==========================================*/
	$headers = "From: Runaway <portfolio@runaway.com>\n";  	// Type here where the message has came from
	$headers .= "Reply-To: $email_address";					/*==========================================*/
	
	$send = mail($to,$email_subject,$email_body,$headers);
	if($send)
	{
		echo "success";
	}
	else{
		echo "error";
	}

} 

?>