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
          <Route path="/lista" element={<ListCarro/>}
            // typeof listCarros !== "undefined" &&
            // listCarros.map((value) => {
            //   return <ListCarro
            //     key={value.id}
            //     id={value.id}
            //     marca={value.marca}
            //     modelo={value.modelo}
            //     cor={value.cor}
            //     ano={value.ano_fabricacao}
            //     ano_modelo={value.ano_modelo}
            //     cambio={value.tipo_cambio}
            //   />
            // })}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
