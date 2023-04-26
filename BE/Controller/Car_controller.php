<?php

use LDAP\Result;

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header('Content-Type: application/json');
require_once "../../Model/Car_model.php";
class CarController{
    function get_img($id){
        $car = new Car($id);
        return $car->get_img();
    }

    function get_specification($id){
        $car = new Car($id);
        return $car->get_specification();
    }

};


if($_SERVER["REQUEST_METHOD"] == "GET"){
    $id = $_GET["id"];
    $carController = new CarController;
    $img = $carController->get_img($id);
    $specification = $carController->get_specification($id);
    
    $obj1 = json_decode($img );
$obj2 = json_decode($specification);

// Nối hai đối tượng JSON lại với nhau
$objResult = (object)array_merge((array)$obj1, (array)$obj2);

// Chuyển đối tượng kết quả thành chuỗi JSON
$jsonResult = json_encode($objResult);

    echo $jsonResult;
}


?>


