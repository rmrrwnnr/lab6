<?php
if (isset($_POST["CustomUsername"]) && isset($_POST["ephonenumber"])) 
{
    $usernam = htmlentities($_POST["CustomUsername"]);
    $teleph = htmlentities($_POST["phonenumber"]);
    $output ="
    <html>
    <head>
    <title>Данные заявки</title>
    </head>
    <body>
    Ваш логин: $usernam<br />
    Ваш пароль: $teleph<br />";
    echo $output;
}
?>