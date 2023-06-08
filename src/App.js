import Create from './Components/Create';
import Edit from './Components/Edit';
import Home from './Components/Home';
import Read from './Components/Read';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Create' element={<Create />}></Route>
        <Route path='/Edit/:id' element={<Edit />}></Route>
        <Route path='/Read/:id' element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
