<?php
    if(isset($_POST["feedbacktitle"])
    && isset($_POST["feedbackname"])
    && isset($_POST["feedbackemail"])
    && isset($_POST["feedbackmessage"])) {
        $title = $_POST["feedbacktitle"];
        $name = $_POST["feedbackname"];
        $email = $_POST["feedbackemail"];
        $message = $_POST["feedbackmessage"];

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