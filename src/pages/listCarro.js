import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';


export default function ListCarro() {

  const [listCarros, setListCarros] = useState();
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3003/getCarros").then((response) => {
      setListCarros(response.data)
    })
  }, []);

  const dados = typeof listCarros !== "undefined" &&
    listCarros.filter((value) => {
      if (filtro === "") {
      return listCarros;
      } else if (value.tipo_cambio.toLowerCase().includes(filtro.toLowerCase())) {
        return value;
      }
    }).map((c) => {
      return <tr key={c.id}>
        <td > {c.id} </td>
        <td> {c.marca} </td>
        <td> {c.modelo} </td>
        <td> {c.cor} </td>
        <td> {c.ano_fabricacao} </td>
        <td> {c.ano_modelo} </td>
        <td> {c.tipo_cambio} </td>
      </tr>
    });

  return (
    <div className='ml-5 mr-5 mt-5'>
      <h2>Lista de Carros</h2>
      <label>
        <span>selecione o tipo de cambio: </span>
        <input type="text"
          value={filtro}
          onChange={(ev) => setFiltro(ev.target.value)} />
      </label>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Nº</th>
            <th scope="col">Marca</th>
            <th scope="col">Modelo</th>
            <th scope="col">Cor</th>
            <th scope="col">Ano de fabricação</th>
            <th scope="col">Ano do modelo</th>
            <th scope="col">tipo de cambio</th>
          </tr>
        </thead>
        <tbody>
          {dados}
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/">Voltar</Link>
    </div>
  )
}
