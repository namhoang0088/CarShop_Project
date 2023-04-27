<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$database = "shop";

$conn = new mysqli($servername, $username, $password, $database);

// kiểm tra kết nối
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// lấy dữ liệu từ bảng thương hiệu
$sql = "SELECT id, customer_id, car_id, color, wheel,name,price,img FROM cart";
$result = $conn->query($sql);

// đưa dữ liệu vào mảng
$cart = array();
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $cart[] = $row;
  }
}

// trả về dữ liệu dưới dạng JSON
header('Content-Type: application/json');
echo json_encode($cart);

// đóng kết nối
$conn->close();
?>