<<<<<<< HEAD

import "./Products.css";

=======
>>>>>>> 82e80c0fa5b31144f2df06d9a5fbfe85c1d5b621
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Products.css";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const [brandInfo, setBrandInfo] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/test-react/webcar-ui/BE/Model/Products-data.php")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = props.selectedBrand
    ? products.filter((product) => product.brand === props.selectedBrand)
    : products;

    useEffect(() => {
        axios
          .get("http://localhost/test-react/webcar-ui/BE/Model/Brand-data.php")
          .then((response) => {
            const filteredBrands = response.data.filter(brand => brand.name === props.selectedBrand);
            if (filteredBrands.length > 0) {
              setBrandInfo(filteredBrands[0]);
            }
            console.log(filteredBrands)
          })
          .catch((error) => console.log(error));
      }, [props.selectedBrand]);

<<<<<<< HEAD
    return(
        <>
        
        <Introduce imgSrc="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" imgName="Porsche" />
        <div style={{margin:'30px 10px'}}>
=======
  return (
    <>
        <Introduce
          imgSrc={brandInfo.logo}
          imgName={brandInfo.name}
          info={brandInfo.info}
        />
      <div style={{ margin: '30px 10px' }}>
>>>>>>> 82e80c0fa5b31144f2df06d9a5fbfe85c1d5b621
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4">
              <CardProduct
                imgSrc={product.image}
                imgAlt="Carpicture"
                name={product.name}
                price={product.price}
              />
            </div>
          ))}
        </div>
<<<<<<< HEAD
        </div>

        <div className="row">
            <div className="col-sm-3">

            </div>
            <div className="col-sm-6">
            <div className="pagination stylepag">
            <ul>
            <a className="page-link" href="#"><li>Previous</li></a>
            <a className="page-link" href="#"><li>1</li></a>
            <a className="page-link" href="#"><li>2</li></a>
            <a className="page-link is-active" href="#"><li>3</li></a>
            <a className="page-link" href="#"><li>4</li></a>
            <a className="page-link" href="#"><li>5</li></a>
            <a className="page-link" href="#"><li>6</li></a>
            <a className="page-link" href="#"><li>Next</li></a>
            </ul>
            </div>
            </div>
            <div className="col-sm-3">

            </div>
        </div>
        </>
    )
=======
      </div>
    </>
  );
>>>>>>> 82e80c0fa5b31144f2df06d9a5fbfe85c1d5b621
}

function CardProduct(props) {
  return (
    <div class="card">
      <div class="card_heart">
        <i style={{ fontSize: '2em' }} class='bx bxs-heart'></i>
      </div>
      <div class="card_cart">
        <i style={{ fontSize: '2em' }} class='bx bx-cart-alt'></i>
      </div>
      <img src={props.imgSrc} class="card-img-top" alt={props.imgAlt} />
      <div class="card-body text-center">
        <p className="card-text">{props.name}</p>
        <p className="card-text">{(parseInt(props.price)).toLocaleString()} VNĐ</p>
      </div>
    </div>
  );
}
  
  function Introduce(props) {
    return (
      <div className="introduce">
        <div>
          <h2 className="namelogo">{props.imgName}</h2>
          <img className="logoproduct" src={props.imgSrc} alt="logo" />
        </div>
        <p>{props.info}</p>
      </div>
    );
  }