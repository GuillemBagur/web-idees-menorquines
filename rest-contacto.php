<?php
header("Content-Type: application/json");

$message = $_REQUEST["name"]."(".$_REQUEST["email"]."): ".$_REQUEST["message"];

$fet = false;
$fet = mail("info@ideesmenorquines.com", "Consulta a través de la web", $message);

echo (json_encode($fet));
exit();
