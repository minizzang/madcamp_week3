import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Letter from './components/Letter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/letter" element={<Letter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
