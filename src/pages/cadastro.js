import React, { useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Cadastro = () => {

    const [valor, setValor] = useState();

    const handleDados = (e) => {
        setValor((prevValores) => ({
            ...prevValores,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        Axios.post("http://localhost:3003/cadastrar", {
            marca: valor.marca,
            modelo: valor.modelo,
            cor: valor.cor,
            ano: valor.ano,
            ano_modelo: valor.ano_modelo,
            cambio: valor.cambio,
        }).then((response) => {
            console.log(response)
        });
    }

    return (
        <div className='container-fluid'>

            <div className="ml-5 mr-5 mt-5 card text-center">
                <Link className="btn btn-primary" to="/lista">Ver lista de carros</Link>
                <div className="card-header">
                    <h5>
                        Cadastro de veiculo
                    </h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>
                                <span>Marca:</span>
                                <input type="text" className="form-control width_input" name="marca" placeholder='Digite a marca do veiculo' onChange={handleDados} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <span>Modelo:</span>
                                <input type="text" className="form-control width_input" name="modelo" placeholder='Digite o modelo do veiculo' onChange={handleDados} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <span>Cor:</span>
                                <input type="text" className="form-control width_input" name="cor" placeholder='Digite a cor do veiculo' onChange={handleDados} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <span>Ano de Fabricação:</span>
                                <input type="date" className="form-control width_input" name="ano" placeholder='ano de fabricação do veiculo veiculo' onChange={handleDados} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <span>Ano do Modelo:</span>
                                <input type="date" className="form-control width_input" name="ano_modelo" placeholder='Ano do modelo do veiculo' onChange={handleDados} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <span>Tipo de Cambio:</span>
                                <select className="form-control" name="cambio" onChange={handleDados} required>
                                    <option>Selecione</option>
                                    <option value="manual">Manual</option>
                                    <option value="automatico">Automático</option>
                                </select>
                            </label>
                        </div>
                        <div className="buttonCadastrar">
                            <Link to="/lista" className="btn btn-primary" onClick={() => handleSubmit()}>Cadastrar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cadastro