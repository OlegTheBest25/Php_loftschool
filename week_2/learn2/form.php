<?php
$count_start = 1;
$name = $_POST['name'];
$date = date('y:m:d');
$phone = $_POST['phone'];
$email = $_POST['email'];
$street = $_POST['street'];
$part = $_POST['part'];
$appt = $_POST['appt'];
$floor = $_POST['floor'];
$home = $_POST['home'];






$mysql = new mysqli('127.0.0.1', 'root', '', 'loftschool');
$mysql->query("INSERT INTO `burger` (`name`, `date`,`phone`,`email`,`street`, `home`, `part`,`appt`,`floor` )
 VALUES('$name', '$date', '$phone', '$email' , '$street', '$home', '$part', '$appt', '$floor' )");

$mysql->query("INSERT INTO `user` (`name`, `email`,`count` )
 VALUES('$name', '$email' , '$count_start' ) 
 ON DUPLICATE KEY UPDATE `count`= `count` + 1,
 `name`= VALUES(`name`)
 ");
$res = $mysql->query("SELECT count FROM `user` WHERE email='$email'");
$count = $mysql->query("SELECT max(id) FROM `burger`");
$ID = $count->fetch_all();
$data = $res->fetch_all();


$mysql->close();

echo "Спасибо, ваш заказ будет доставлен по адресу: " . "улица " . $street . ", дом " . $home . ", квартира " . $appt;
echo   "<br>";
echo "Это ваш " . $data[0][0] . "заказ";
echo   "<br>";
echo "Заказ № " . $ID[0][0];
