import logo from './logo.svg';
import './App.css';
import HotelList from './components/HotelList';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HotelDetails from './components/HotelDetails';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HotelList/>}/>
          <Route path='/hotelDetails/:id'element={<HotelDetails/>}/>
          <Route path='/confirmation'element={<Confirmation/>}/>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
