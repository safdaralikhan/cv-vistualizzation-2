import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Home from './pages/Home';
import Chart from "./components/chart/Index"
import Timelin from './pages/Timeline';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Chart' element={<Chart />} />
        <Route path='/Timeline' element={<Timelin />} />


      </Routes >
    </BrowserRouter >
  );
}

export default App;
