<?php
require_once "database.php";

header('Content-Type: application/json');

class Car{
    public $name;
    public $id;
    public $price;
    public $quantaty;
    public $acceleration;
    public $maxSpeed;
    public $wattage;
    public $torque;
    public $fuelComsumption;
    public $emissionCO2;



    public $database;

    function __construct( $id="",$name="", $quantaty="", $acceleration="", $maxSpeed="", $wattage="", $torque="", $fuelComsumption="", $emissionCO2="")
    {
        $this->id = $id;
        $this->name = $name;
        $this->quantaty = $quantaty;
        $this->acceleration = $acceleration;
        $this->maxSpeed = $maxSpeed;
        $this->wattage = $wattage;
        $this->torque = $torque;
        $this->fuelComsumption = $fuelComsumption;
        $this->emissionCO2 = $emissionCO2;
        $this->database = new Database("localhost","root","","shop");
        
    }

    function get_img(){
        $color = $wheel = $front = $back = $beside = $top = "";
        $img_Car = array();
        $data_response = array();
        $sql = "SELECT * FROM image WHERE car_id='$this->id'";
        $result = ($this->database)->execute($sql);
        if ($result->num_rows > 0) {
        
            while($row = $result->fetch_assoc()) {
                
                $color = $row["img_color"];
                $wheel = $row["img_wheel"];
                $front = $row["front"];
                $back = $row["back"];
                $beside = $row["beside"];
                $top = $row["top"];
                $img_Car[$color][$wheel]=array(//[

                    array(
                            "name"=>"front", "url" =>$front
                    ),
                    array(
                        "name"=>"back", "url" =>$back
                    ),
                    array(
                        "name"=>"beside", "url"=>$beside
                    ),
                    array(
                        "name"=>"top", "url" =>$top
                    )
                );//]
    
            }
        }

        $data_response['img'] = $img_Car;
        // $data_response['price'] = $price;
    
        // var_dump(json_encode($img_Car,true));
        
        return  json_encode($data_response,true);
    }


    function get_specification(){
        $data_response = array();
        $acceleration = $maxSpeed = $wattage = $torque = $fuelComsumption = $emissionCO2 = "";
        $sql = "SELECT * FROM car WHERE car_id='$this->id'";
        $result = ($this->database)->execute($sql);
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $acceleration = $row["acceleration"];
                $maxSpeed = $row["max_speed"];
                $wattage = $row["wattage"];
                $torque = $row["torque"];
                $fuelComsumption = $row["fuel_comsumption"];
                $emissionCO2 = $row["emissions_co2"];
                $price = $row["price"];
            }
        }

        $data_response[] = array("name" => "Công suất(kW)", "value" => $wattage);
        $data_response[] = array("name" => "Mô men xoắn cực đại(Nm)", "value" => $torque);
        $data_response[] = array("name" => "Tăng tốc từ 0 - 100 km/giờ(giây)", "value" => $acceleration);
        $data_response[] = array("name" => "Tốc độ tối đa(km/h)", "value" => $maxSpeed);
        $data_response[] = array("name" => "Tiêu thụ nhiên liệu kết hợp (lít/100km)", "value" => $fuelComsumption);
        $data_response[] = array("name" => "Lượng khí thải CO2 (g/km)", "value" => $emissionCO2);
        $data_response[] = array("name" => "Giá", "value" => $price);
        $data_response = array("specification" => $data_response);
        return json_encode($data_response);
    }

}

?>