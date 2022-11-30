<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: application/json");

$message = $_REQUEST["name"]."(".$_REQUEST["email"]."): ".$_REQUEST["message"];

$fet = false;
$fet = mail("guillembagurmoll@gmail.com", "Consulta a través de la web", $message);

echo (json_encode($fet));
exit();
