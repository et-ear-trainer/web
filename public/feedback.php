<?php
    if(isset($_POST["subject"])
    && isset($_POST["name"])
    && isset($_POST["email"])
    && isset($_POST["message"])) {
        $title = $_POST["subject"];
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        $to      = 'mail@danielschenker.ch';
        $subject = $title;
        $message = "From $name:\n$message";
        $headers = "From: $email"."\r\n"."Reply-To: $email";

        if(mail($to, $subject, $message, $headers)) {
            http_response_code(200);
        }else {
            http_response_code(400);
        }
    }else {
        http_response_code(400);
    }
?>