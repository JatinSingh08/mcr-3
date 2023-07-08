import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Restaurant } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/restaurant/:resId' element={<Restaurant />}/>
      </Routes>
    </div>
  );
}

export default App;
