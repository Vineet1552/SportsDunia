import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Score } from './Page/ScorePage/Score';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route
          path="/scores"
          element={
              <Score />
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
