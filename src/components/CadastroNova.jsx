import React, { useState } from 'react';



function CadastroNova ( ){

    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [celular, setCelular] = useState('');
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const handleNome =(e) => {
        setNome(e.target.value)
        };
    const handleCnpj =(e) => {
        setCnpj(e.target.value)
        };
    const handleNomeFantasia =(e) => {
        setNomeFantasia(e.target.value)
        };
    const handleEmail =(e) => {
        setEmail(e.target.value)
        };
    const handleTelefone =(e) => {
        setTelefone(e.target.value)
        };
    const handleCelular =(e) => {
        setCelular(e.target.value)
        };
    const handleCep =(e) => {
        setCep(e.target.value)
        };
    const handleLogradouro =(e) => {
        setLogradouro(e.target.value)
        };
    const handleNumero =(e) => {
        setNumero(e.target.value)
        };
    const handleComplemento =(e) => {
        setComplemento(e.target.value)
        };
    const handleBairro =(e) => {
        setBairro(e.target.value)
        };
    const handleCidade =(e) => {
        setCidade(e.target.value)
        };
    const handleEstado =(e) => {
        setEstado(e.target.value)
        };



    const handleCadastrar = (e) => {
        e.preventDefault();
        localStorage.setItem('nome', nome);
        localStorage.setItem('cnpj', cnpj);
        localStorage.setItem('nomeFantasia', nomeFantasia);
        localStorage.setItem('email', email);
        localStorage.setItem('telefone', telefone);
        localStorage.setItem('celular', celular);
        localStorage.setItem('cep', cep);
        localStorage.setItem('logradouro', logradouro);
        localStorage.setItem('numero', numero);
        localStorage.setItem('complemento', complemento);
        localStorage.setItem('bairro', bairro);
        localStorage.setItem('cidade', cidade);
        localStorage.setItem('estado', estado); 
        alert('Dados salvos com sucesso!');
    }

    const handleLimpar = (e) => {
        e.preventDefault();
        setNome('');
        setCnpj('');
        setNomeFantasia('');
        setEmail('');
        setTelefone('');
        setCelular('');
        setCep('');
        setLogradouro('');
        setNumero('');
        setComplemento('');
        setBairro('');
        setCidade('');
        setEstado('');
        console.log('Dados limpos com sucesso!');
    }

    




    return (
        <div className="row col-10 p-2 m-2 border border-4">


            <h4>Cadastro de nova Farmácia</h4> <br />
            <form action="" onSubmit={handleCadastrar}>
            <div className="row p-1">
                <div className="col-4">
                    <label className="form-label" htmlFor="nome">Razão Social:</label>
                    <div className="input-group">
                        <input type="text" onChange={handleNome} className="form-control" name="nome" id="nome" placeholder="Digite a Razão Social" required />
                    </div>
                </div>
                <div className="col-4">
                    <label className="form-label" htmlFor="nome">CNPJ:</label>
                    <div className="input-group">
                        <input type="text" onChange={handleCnpj} className="form-control" name="cnpj" id="cnpj" placeholder="Digite o CNPJ" required />
                    </div>
                </div>
                <div className="col-4">
                    <label className="form-label" htmlFor="nome">Nome Fantasia:</label>
                    <div className="input-group">
                        <input type="text" onChange={handleNomeFantasia} className="form-control" name="nomeFantasia" id="nomeFantasia" placeholder="Digite o Nome Fantasia" required />
                    </div>
                </div>
            </div>
            <div className="row p-2">
                <div className="col-4">
                    <label className="form-label" htmlFor="nome">E-mail:</label>
                    <div className="input-group">
                        <input type="email" onChange={handleEmail} className="form-control" name="email" id="email" placeholder="Digite o E-mail" required />
                    </div>
                </div>
                <div className="col-4">
                    <label className="form-label" htmlFor="nome">Telefone:</label>
                    <div className="input-group">
                        <input type="text" onChange={handleTelefone} className="form-control" name="telefone" id="telefone" placeholder="Digite o Telefone" required />
                    </div>
                </div>
                <div className="col-4">
                    <label className="form-label" htmlFor="nome">Celular:</label>
                    <div className="input-group">
                        <input type="text" onChange={handleCelular} className="form-control" name="celular" id="celular" placeholder="Digite o Celular" required />
                    </div>
                </div>
            </div>
            <hr />
            <h4>Endereço</h4> 
            <div className="row p-2">
            <div className="col-2">
                  <label className="form-label" htmlFor="cep">CEP:</label>
                  <div className="input-group">
                      <input type="text" onChange={handleCep} className="form-control" name="cep" id="cep" placeholder="Digite o CEP" required />
                  </div>
              </div>
          <div className="col-8">
              <label className="form-label" htmlFor="logradouro">Logradouro:</label>
              <div className="input-group mb-3 col-">
                  <input type="text" onChange={handleLogradouro} className="form-control" name="logradouro" id="logradouro" placeholder="Logradouro" required />
              </div>
          </div>
          <div className="col-2">
                  <label className="form-label" htmlFor="numero">Nº:</label>
                  <div className="input-group">
                      <input type="text" onChange={handleNumero} className="form-control" name="numero" id="numero" placeholder="Nº" required />
                  </div>
              </div>
        </div> 
          <div className="row p-2">
              <div className="col-6">
                  <label className="form-label" htmlFor="complemento">Complemento:</label>
                  <div className="input-group">
                      <input type="text" onChange={handleComplemento} className="form-control" name="complemento" id="complemento" placeholder="Complemento" />
                  </div>
              </div>
              <div className="col-6">
                  <label className="form-label" htmlFor="bairro">Bairro:</label>
                  <div className="input-group">
                      <input type="text" onChange={handleBairro} className="form-control" name="bairro" id="bairro" placeholder="Digite o Bairro" required />
                  </div>
              </div>
              
          </div> 
          
            <div className="row p-2">
            <div className="col-7">
                  <label className="form-label" htmlFor="cidade">Cidade:</label>
                  <div className="input-group">
                      <input type="text" onChange={handleCidade} className="form-control" name="cidade" id="cidade" placeholder="Digite a Cidade" required /> 
                  </div>
              </div>
              <div className="col-5">
                  <label className="form-label" htmlFor="estado">Estado:</label>
                  <div className="input-group">
                      <input type="text" onChange={handleEstado} className="form-control" name="estado" id="estado" placeholder="Digite o Estado" required />
                  </div>
            </div> 
          </div>
          <div className="row">
            <span className="col"></span>
            <button 
                className="btn btn-secondary col-2 m-1"
                type="reset"
                onClick={handleLimpar}
                >
            Limpar
            </button>
            <button 
                className="btn btn-secondary col-2 m-1"
                type="submit"
                onClick={handleCadastrar}
                >
            Salvar
            </button>
          </div>
          </form>
      </div>

    )

}

export default CadastroNova