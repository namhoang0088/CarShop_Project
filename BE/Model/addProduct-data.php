<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Kết nối đến database
$servername = "localhost";
$username = "root";
$password = "";
$database = "shop";

$conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$name = $data['name'];
$price = $data['price'];
$brand = $data['brand'];
$img = $data['img'];
$acceleration = $data['acceleration'];
$max_speed = $data['max_speed'];
$wattage = $data['wattage'];
$torque = $data['torque'];
$fuel_comsumption = $data['fuel_comsumption'];
$emissions_co2 = $data['emissions_co2'];


echo $id;

$stmt = $conn->query("INSERT INTO car (car_id,name, price, brand, img, acceleration, max_speed, wattage, torque, fuel_comsumption,emissions_co2)
VALUES ('$id','$name', '$price', '$brand', '$img', '$acceleration','$max_speed', '$wattage', '$torque', '$fuel_comsumption','$emissions_co2')");

?>