
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer';
import Slide from './component/Slide';
import TopProduct from './component/Home/TopProduct';
import News from './component/Home/News';
import Sidebar from './component/Product/Sidebar';
import Products from './component/Product/Products';
export default function App(){
  return (
    <div className='Body'>
    <CarProduct />
    </div>
    );
}


function CarProduct(){
  return(
    <div>
    <Header />
      <div className='row'>
        <div className='col-lg-3'>
          <Sidebar />
        </div>
        <div className='col-lg-9'>
          <Products />
        </div>
      </div>
    <Footer />
    </div>
  )
}

function CarHome(){
  return(
    <div>
      <Header />
      <Slide />
      <TopProduct />
      <News />
      <Footer />
    </div>
  )
}