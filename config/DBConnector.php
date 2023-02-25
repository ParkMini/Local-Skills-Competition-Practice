<?php
$DB_USERNAME = 'root';
$DB_PW = '';
$DB_HOST = '127.0.0.1';
$DB_PORT = '3306';
$DB_NAME = 'gyongnam';
$DB_LINK = "mysql:host={$DB_HOST}; port={$DB_PORT}; dbname={$DB_NAME}";

$db = new PDO($DB_LINK, $DB_USERNAME, $DB_PW)
?>