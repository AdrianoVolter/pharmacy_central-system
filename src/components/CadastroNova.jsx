import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FarmContext } from "../contexts/FarmContext";
import { useContext } from "react";
//import { FarmProvider } from '../contexts/FarmContext';
import InputMask from "react-input-mask";

import { BiArchiveOut } from "react-icons/bi";
import { GrClearOption } from "react-icons/gr";

function CadastroNova() {
  const navegar = useNavigate();

  const { addFarmacia } = useContext(FarmContext);

  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [listaFarmacias, setListaFarmacias] = useState([]);

  const onBlur = (e) => {
    const { value } = e.target;
    const cep = value?.replace(/\D/g, "");

    if (cep?.length !== 8) {
      return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setCep(data.cep);
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
        console.log(data);
        if (data.erro === true) {
          alert("Cep não encontrado");
        }
      });
  };

  const CadastrarFarmacia = () => {
    let farmacia = {
      nome: nome,
      cnpj: cnpj,
      nomeFantasia: nomeFantasia,
      email: email,
      telefone: telefone,
      celular: celular,
      cep: cep,
      logradouro: logradouro,
      numero: numero,
      complemento: complemento,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
    };
    if (
      nome === "" ||
      cnpj === "" ||
      nomeFantasia === "" ||
      email === "" ||
      telefone === "" ||
      celular === "" ||
      cep === "" ||
      logradouro === "" ||
      numero === "" ||
      bairro === "" ||
      cidade === "" ||
      estado === ""
    ) {
      alert("Preencha todos os campos");
    } else {
      const novaListaFarmacias = [...listaFarmacias, farmacia];
      setListaFarmacias(novaListaFarmacias);
      localStorage.setItem(
        "listaFarmacias",
        JSON.stringify(novaListaFarmacias)
      );
      addFarmacia(farmacia);
      console.log(farmacia);
      navegar("/farmacias");
      console.log("Farmácia cadastrada com sucesso!");
    }
  };
  //

  const LimparFormulario = (e) => {
    e.preventDefault();
    setNome("");
    setCnpj("");
    setNomeFantasia("");
    setEmail("");
    setTelefone("");
    setCelular("");
    setCep("");
    setLogradouro("");
    setNumero("");
    setComplemento("");
    setBairro("");
    setCidade("");
    setEstado("");
    console.log("Dados limpos com sucesso!");
  };

  return (
    <div className="row col-10 p-3 m-2 ">
      <h4>Cadastro de nova Farmácia</h4> <br />
      <form action="" onSubmit={CadastrarFarmacia}>
        <div className="row p-1">
          <div className="col-4">
            <label className="form-label" htmlFor="nome">
              Razão Social:
            </label>
            <div className="input-group">
              <input
                type="text"
                onChange={(e) => setNome(e.target.value)}
                className="form-control"
                value={nome}
                name="nome"
                id="nome"
                placeholder="Digite a Razão Social"
                required
              />
            </div>
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="nome">
              CNPJ:
            </label>
            <div className="input-group">
              <InputMask
                mask="99.999.999/9999-99"
                type="text"
                onChange={(e) => setCnpj(e.target.value)}
                className="form-control"
                value={cnpj}
                name="cnpj"
                id="cnpj"
                placeholder="Digite o CNPJ"
                required
              />
            </div>
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="nome">
              Nome Fantasia:
            </label>
            <div className="input-group">
              <input
                type="text"
                onChange={(e) => setNomeFantasia(e.target.value)}
                className="form-control"
                value={nomeFantasia}
                name="nomeFantasia"
                id="nomeFantasia"
                placeholder="Digite o Nome Fantasia"
                required
              />
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-4">
            <label className="form-label" htmlFor="nome">
              E-mail:
            </label>
            <div className="input-group">
              <InputMask
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                value={email}
                name="email"
                id="email"
                placeholder="Digite o E-mail"
                required
              />
            </div>
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="nome">
              Telefone:
            </label>
            <div className="input-group">
              <InputMask
                mask="(99) 9999-9999"
                type="text"
                onChange={(e) => setTelefone(e.target.value)}
                className="form-control"
                value={telefone}
                name="telefone"
                id="telefone"
                placeholder="Digite o Telefone"
                required
              />
            </div>
          </div>
          <div className="col-4">
            <label className="form-label" htmlFor="nome">
              Celular:
            </label>
            <div className="input-group">
              <InputMask
                mask="(99) 99999-9999"
                type="text"
                onChange={(e) => setCelular(e.target.value)}
                className="form-control"
                value={celular}
                name="celular"
                id="celular"
                placeholder="Digite o Celular"
                required
              />
            </div>
          </div>
        </div>
        <hr />
      </form>
      <h4 className="m-2">Endereço</h4>
      <form action="" onSubmit={CadastrarFarmacia}>
        <div className="row p-2">
          <div className="col-3">
            <label className="form-label" htmlFor="cep">
              CEP:
            </label>
            <div className="input-group">
              <InputMask
                mask="99999-999"
                type="text"
                onBlur={(e) => onBlur(e)}
                className="form-control"
                name="cep"
                id="cep"
                placeholder="Digite o CEP"
                required
              />
            </div>
          </div>
          <div className="col-7">
            <label className="form-label" htmlFor="logradouro">
              Logradouro:
            </label>
            <div className="input-group mb-3 col-">
              <input
                type="text"
                onChange={(e) => setLogradouro(e.target.value)}
                className="form-control"
                value={logradouro}
                name="logradouro"
                id="logradouro"
                placeholder="Logradouro"
                required
              />
            </div>
          </div>
          <div className="col-2">
            <label className="form-label" htmlFor="numero">
              Nº:
            </label>
            <div className="input-group">
              <input
                type="text"
                onChange={(e) => setNumero(e.target.value)}
                className="form-control"
                value={numero}
                name="numero"
                id="numero"
                placeholder="Nº"
                required
              />
            </div>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-6">
            <label className="form-label" htmlFor="complemento">
              Complemento:
            </label>
            <div className="input-group">
              <input
                type="text"
                onChange={(e) => setComplemento(e.target.value)}
                className="form-control"
                value={complemento}
                name="complemento"
                id="complemento"
                placeholder="Complemento"
              />
            </div>
          </div>
          <div className="col-6">
            <label className="form-label" htmlFor="bairro">
              Bairro:
            </label>
            <div className="input-group">
              <input
                type="text"
                onChange={(e) => setBairro(e.target.value)}
                className="form-control"
                value={bairro}
                name="bairro"
                id="bairro"
                placeholder="Digite o Bairro"
                required
              />
            </div>
          </div>
        </div>

        <div className="row p-2">
          <div className="col-7">
            <label className="form-label" htmlFor="cidade">
              Cidade:
            </label>
            <div className="input-group">
              <input
                type="text"
                onChange={(e) => setCidade(e.target.value)}
                className="form-control"
                value={cidade}
                name="cidade"
                id="cidade"
                placeholder="Digite a Cidade"
                required
              />
            </div>
          </div>
          <div className="col-5">
            <label className="form-label" htmlFor="estado">
              Estado:
            </label>
            <div className="input-group">
              <input
                type="text"
                onChange={(e) => setEstado(e.target.value)}
                className="form-control"
                value={estado}
                name="estado"
                id="estado"
                placeholder="Digite o Estado"
                required
              />
            </div>
          </div>
        </div>
        <div className="row p-2">
          <button
            className="btn btn-danger col-2 m-2"
            type="submit"
            onClick={CadastrarFarmacia}
          >
            Cadastrar
            <BiArchiveOut className="m-2" />
          </button>
          <button
            className="btn btn-warning col-2 m-2"
            type="reset"
            onClick={LimparFormulario}
          >
            Limpar
            <GrClearOption className="m-2" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastroNova;

// function AdicionarLocalStorage() {
// let farmacia = JSON.parse(localStorage.getItem('farmacia'))
// if (farmacia === null) {
//     farmacia = [{'nome': nome,'cnpj': cnpj,'nomeFantasia': nomeFantasia,'email': email,'telefone': telefone,'celular': celular,'cep': cep,'logradouro': logradouro,'numero': numero,'complemento': complemento, 'bairro': bairro, 'cidade': cidade,'estado': estado}];}
// farmacia.push(objeto)
// //localStorage.setItem('farmacia', JSON.stringify(farmacia));
// }
