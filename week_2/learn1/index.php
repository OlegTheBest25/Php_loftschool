<?php
include("src/function.php");
$result = [];



for ($i = 1; $i < 50; $i++) {
    $arr = ['id' => $i, 'age' => rand(18, 45), 'name' =>  randomName()];
    $result[] =  $arr;
}

$resJson = json_encode($result);


file_put_contents("users.json", $resJson);

$res = json_decode($resJson, true);
echo "<pre>";
var_dump($res);
echo "</pre>";

echo "<pre>";
var_dump(array_count_values(array_column($res, "name")));
echo "</pre>";

echo "<pre>";
echo "Средний возраст работников: ";
var_dump(array_sum(array_column($res, "age")) / count(array_column($res, "age")));
echo "</pre>";
