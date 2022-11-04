import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from './pages/cadastro';
import ListCarro from './pages/listCarro';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/lista" element={<ListCarro/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
