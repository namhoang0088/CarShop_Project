import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import User from './Screen/User/User';
import Authentication from './Screen/Authentication/Authentication';
export default function App() {
  return (
    <div className="Body">
    <Authentication />
    </div>
  );
}