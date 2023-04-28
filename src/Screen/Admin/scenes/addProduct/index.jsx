import React, { useState, useEffect }  from "react";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../component/Admin/components/Header";
import axios from 'axios';
const FormProduct = () => {
  const [product, setProduct] = useState([]);
  const [Warning, setWarning] = useState([]);
  useEffect(() => {
      axios.get('http://localhost/Model/Products-data.php')
        .then(response => setProduct(response.data))
        .catch(error => console.log(error));
    }, []);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = () => {
    const name = document.getElementsByName("name")[0].value;
    const price = document.getElementsByName("price")[0].value;
    const brand = document.getElementsByName("brand")[0].value;
    const img = document.getElementsByName("img")[0].value;
    const acceleration = document.getElementsByName("acceleration")[0].value;
    const max_speed = document.getElementsByName("max_speed")[0].value;
    const wattage = document.getElementsByName("wattage")[0].value;
    const torque = document.getElementsByName("torque")[0].value;
    const fuel_comsumption = document.getElementsByName("fuel_comsumption")[0].value;
    const emissions_co2 = document.getElementsByName("emissions_co2")[0].value;
    if(name=="" || price == "" || brand == "" || img == "" || acceleration == "" || max_speed == "" || wattage == "" ||torque =="" || fuel_comsumption == "" || emissions_co2 == ""){
      setWarning("Vui lòng nhập đầy đủ thông tin!");
    } else {
      setWarning("");
      let id = 0;
      for (let i = 0; i < product.length; i++){
        if(product[i].car_id > id){
          id = product[i].car_id;
        }
      }
      id+=1;
      uploadDatabase(id,name,price,brand,img,acceleration,max_speed,wattage,torque,fuel_comsumption,emissions_co2);
      
    }

  };
  const uploadDatabase = (id,name,price,brand,img,acceleration,max_speed,wattage,torque,fuel_comsumption,emissions_co2) => {
    const data = {
      id:id,
      name: name,
      price: price,
      brand: brand,
      img: img,
      acceleration: acceleration,
      max_speed: max_speed,
      wattage: wattage,
      torque: torque,
      fuel_comsumption: fuel_comsumption,
      emissions_co2: emissions_co2,
    }
    axios.post('http://localhost/Model/addProduct-data.php', data)
    .then(response => {
      // Xử lý kết quả trả về nếu cần
      alert("Thêm product thành công!");
    })
    .catch(error => {
      // Xử lý lỗi nếu có
      alert(error);
    });
  }
  const navigation = () => {   
    window.location.href = "/contacts";
  }
  return (
    <Box m="20px">
      <Header title="Tạo Products"  />
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                name="name"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Price"
                name="price"
                sx={{ gridColumn: "span 4" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Brand"
                name="brand"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="image (link)"
                name="img"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Acceleration"
                name="acceleration"
                sx={{ gridColumn: "span 4" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Max Speed"
                name="max_speed"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Wattage"
                name="wattage"
                sx={{ gridColumn: "span 4" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Torque"
                name="torque"
                sx={{ gridColumn: "span 4" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Fuel Comsumption"
                name="fuel_comsumption"
                sx={{ gridColumn: "span 4" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Emissions CO2"
                name="emissions_co2"
                sx={{ gridColumn: "span 4" }}
              />
              <div role="alert" style={{color: 'red'}}>
                {Warning}
              </div>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
                Create New Product
              </Button>
            </Box>
    </Box>
  );
};


export default FormProduct;
