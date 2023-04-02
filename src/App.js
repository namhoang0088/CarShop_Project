
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer';
import Slide from './component/Slide';
import TopProduct from './component/Home/TopProduct';
import News from './component/Home/News';
import Sidebar from './component/Product/Sidebar';
export default function App(){
  return (
    <div className='Body'>
      <Header />
      <Slide  />
      <TopProduct />
      <News />
      <Footer />
    </div>
    );
}