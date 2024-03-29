import { BiArchiveOut } from "react-icons/bi";
import { GrClearOption } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import React, { useState ,useEffect} from "react";
import InputMask from "react-input-mask";
import api from "../api/api";

function CadastroUser() {
  const navigate = useNavigate();
  
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [genero, setGenero] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [status, setStatus] = useState("");
  const [dados, setDados] = useState([]);

  
  const handleEnviar = (e) => {
    if (
      nome === "" ||
      sobrenome === "" ||
      genero === "" ||
      data_nascimento === "" ||
      email === "" ||
      telefone === "" ||
      cpf === "" ||
      senha === "" ||
      status === ""
    ) {
      alert("Preencha todos os campos CORRETAMENTE!");
    } else if (senha !== confirmarSenha) {
      alert("As senhas não conferem!");
    } else if (senha.length < 8) {
      alert("A senha deve conter no mínimo 8 caracteres!");
    } else if (cpf.length < 11) {
      alert("O CPF deve conter 11 caracteres!");
    } else if (telefone.length < 10) {
      alert("O telefone deve conter 10 caracteres!");
    } else {
      e.preventDefault();
      api
        .post("/api/usuarios", {
          nome: nome,
          sobrenome: sobrenome,
          genero: genero,
          data_nascimento: data_nascimento,
          cpf: cpf,
          telefone: telefone,
          email: email,
          senha: senha,
          status: status,
        })
        .then((response) => {
          setDados(response.data);
          alert("Cadastrado com sucesso!");
          navigate("/");
          console.log(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err.message);
          alert("Erro ao cadastrar!");
        }); 
    }
  };
  

  const handleLimpar = (e) => {
    e.preventDefault();
    setNome("");
    setSobrenome("");
    setGenero("");
    setData_nascimento("");
    setEmail("");
    setTelefone("");
    setCpf("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <div className="row col-10 p-3 m-2 ">
    <h4>Cadastro de Usuário </h4> <br />
    <form action="" className="d-block">
      <div className="row p-1 ">
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            Nome completo:
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              onChange={e => setNome(e.target.value)}
              name={nome}
              id="nome"
              placeholder="Digite seu nome"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            Sobrenome:
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              onChange={e => setSobrenome(e.target.value)}
              name={sobrenome}
              id="sobrenome"
              placeholder="Digite seu sobrenome"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            Gênero:
          </label>
          <div className="input-group">
            <select
              className="form-select"
              onChange={e => setGenero(e.target.value)}
              name={genero}
              id="genero"
              required
            >
              <option value="">Selecione</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            Data de Nascimento:
          </label>
          <div className="input-group">
            <InputMask
              
              type="date"
              className="form-control"
              onChange={e => setData_nascimento(e.target.value)}
              name={data_nascimento}
              id="data_nascimento"
              placeholder="Digite a data de nascimento"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            CPF:
          </label>
          <div className="input-group">
            <InputMask
              // mask="999.999.999-99"
              type="number"
              className="form-control"
              onChange={e => setCpf(e.target.value)}
              name={cpf}
              id="cnpj"
              placeholder="Digite seu CPF"
              required
            />
          </div>
        </div>
      </div>
      <div className="row p-1">
        <div className="col-4">
          <label className="form-label" htmlFor="nome">
            E-mail:
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              onChange={e => setEmail(e.target.value)}
              name={email}
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
              className="form-control"
              onChange={e => setTelefone(e.target.value)}
              name={telefone}
              id="telefone"
              placeholder="Digite o Telefone"
            />
          </div>
        </div>
      </div>
      <div className="row p-1"></div>
      <div className="row p-2">
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            Senha:
          </label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              minLength={8}
              onChange={e => setSenha(e.target.value)}
              name={senha}
              id="senha"
              placeholder="Digite a Senha"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            Confirmar Senha:
          </label>
          <div className="input-group">
            <input
              type="password"
              className="form-control"
              minLength={8}
              onChange={e => setConfirmarSenha(e.target.value)}
              name={confirmarSenha}
              id="confirmar_senha"
              placeholder="Digite a Senha"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <label className="form-label" htmlFor="nome">
            Status:
          </label>
          <div className="input-group">
            <select
              className="form-select"
              onChange={e => setStatus(e.target.value)}
              name={status}
              id="status"
              required
            >
              <option value="">Selecione</option>
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
          </div>
      </div>
      <div className="row p-3">
        <button
          className="btn btn-danger col-2 m-2"
          type="submit"
          onClick={handleEnviar}
        >
          Cadastrar
          <BiArchiveOut className="m-2" id="cdr" />
        </button>
        <button
          className="btn btn-warning col-2 m-2"
          type="reset"
          onClick={handleLimpar}
        >
          Limpar
          <GrClearOption className="m-2" id="lmp" />
        </button>
      </div>
    </form>
  </div>
);
}

export default CadastroUser;
