import React from "react";
import "./Sidebar.css";
export default function Sidebar(){
    return(
        <div className="sidebar">
        <h3>A</h3>
        <div className="cardtitle">
            <Brand imgSrc="https://brademar.com/wp-content/uploads/2022/05/Audi-Logo-PNG-3.png" nameBrand="Audi" />
            <Brand imgSrc="https://medias.fcacanada.ca//specs/alfaromeo/media/images/badge//current-badge_457d965994803bd415fc9735d023d1eb.png" nameBrand="AlfaRomeo" />
        </div>

<<<<<<< HEAD
        <h3>B</h3>
        <div className="cardtitle">
            <Brand imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" nameBrand="BMW" />
            <Brand imgSrc="https://static.wixstatic.com/media/f2bf43_36492964b7d648b0b9cb12bb76fd3b46~mv2.png" nameBrand="Baic" />
            <Brand imgSrc="https://www.carlogos.org/car-logos/bentley-logo-1400x800.png" nameBrand="Bentley" />
            <Brand imgSrc="https://preview.thenewsmarket.com/Previews/TNML/StillAssets/1920x1440/518313.png" nameBrand="Bugatti" />
        </div>

        <h3>P</h3>
        <div className="cardtitle">
            <Brand imgSrc="https://logos-world.net/wp-content/uploads/2021/04/Porsche-Logo.png" nameBrand="Porsche" />
            <Brand imgSrc="https://logos-world.net/wp-content/uploads/2021/09/Pagani-Logo.png" nameBrand="Pagani" />
        </div>
        </div>
    )
}

function Brand(props){
    return(
        <div className="brand" style={{display:"flex"}}>
            <img src={props.imgSrc} alt="brand" />
            <p>{props.nameBrand}</p>
        </div>
    )
}
=======
function Sidebar(props) {
  const [brands, setBrands] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost/test-react/webcar-ui/BE/Model/Brand-data.php")
      .then((response) => setBrands(response.data))
      .catch((error) => console.log(error));
  }, []);
  
  const handleBrandClick = (brand) => {
    props.onBrandClick(brand);
  }
  
  const groupedBrands = [];
  let currentLetter = null;
  
  brands
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((brand) => {
      const firstLetter = brand.name.charAt(0).toUpperCase();
      if (firstLetter !== currentLetter) {
        currentLetter = firstLetter;
        groupedBrands.push(
          <React.Fragment key={firstLetter}>
            <h3>{firstLetter}</h3>
            <div className="cardtitle">
              <Brand
                imgSrc={brand.logo}
                nameBrand={brand.name}
                onClick={() => handleBrandClick(brand.name)}
              />
            </div>
          </React.Fragment>
        );
      } else {
        groupedBrands.push(
          <div className="cardtitle" key={brand.brand_id}>
            <Brand
              imgSrc={brand.logo}
              nameBrand={brand.name}
              onClick={() => handleBrandClick(brand.name)}
            />
          </div>
        );
      }
    });
  
  return <div className="sidebar">{groupedBrands}</div>;
}

function Brand(props){
  return(
    <div className="brand" style={{display:"flex"}} onClick={props.onClick}>
      <img src={props.imgSrc} alt="brand" />
      <p>{props.nameBrand}</p>
    </div>
  );
}

export default Sidebar;
>>>>>>> 82e80c0fa5b31144f2df06d9a5fbfe85c1d5b621
