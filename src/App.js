import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import User from './Screen/User/User';
import Payment from "./component/Product/Payment";
import Product from "./component/Product/Product";
export default function App() {
  return (
    <div className="Body">
     <User /> 
    </div>
  );
}