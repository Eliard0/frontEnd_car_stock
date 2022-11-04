import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export default function ListCarro() {

  const [listCarros, setListCarros] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3003/getCarros").then((response) => {
      setListCarros(response.data)
    })
  }, []);

  const dados = typeof listCarros !== "undefined" &&
    listCarros.map((c, i) => {
      return <tr>
        <td key={i.id}> {c.id} </td>
        <td> {c.marca} </td>
        <td> {c.modelo} </td>
        <td> {c.cor} </td>
        <td> {c.ano_fabricacao} </td>
        <td> {c.ano_modelo} </td>
        <td> {c.tipo_cambio} </td>
      </tr>
    });

  console.log(listCarros);
  return (
    <div className='ml-5 mr-5 mt-5'>
      <h2>Lista de Carros</h2>
      <label>
        <span>Tipo de Cambio:</span>
        <select className="form-control" name="cambio">
          <option>Selecione</option>
          <option value="manual">Manual</option>
          <option value="automatico">Automático</option>
        </select>
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
    </div>
  )
}
