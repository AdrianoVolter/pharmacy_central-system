import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { BiArchiveOut } from "react-icons/bi";
import api from "../api/api";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dados, setDados] = useState([]);
  const navegar = useNavigate();

  const handleEnviar = async (e)  => {
    if (email === "" || senha.length < 8) {
      alert("Preencha todos os campos CORRETAMENTE!");
      return;
    } else {
      e.preventDefault();
     await api
        .post("/api/usuarios/login", {
          email: email,
          senha: senha,
        })
        .then((response) => {
          setDados(response.data);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("id", response.data.id);
          alert("Logado com sucesso!");
          navegar("/farmacias");
        })
        .catch((err) => {
          alert("Erro ao logar!");
        });
    }
  }

  return (
    <div className=" col-12 container p-3">
      <div className="row col-6">
        <div className=" col-12 ">
          <div className="">
            <div className="">
              <h4>Login</h4>
            </div>
            <br />
            <div className="card-body">
              <form onSubmit={handleEnviar}>
                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Digite seu e-mail"
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>{" "}
                <br />
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Digite a senha"
                    onChange={e => setSenha(e.target.value)}
                    minLength={8}
                    required
                  />
                </div>
                <div className="row p-2 ">
                  <button
                    type="submit"
                    className="col-3 btn btn-warning p-2 m-2 "
                  >
                    Fazer Login
                    <BiLogIn />
                  </button>

                  <Link className="col-5 btn btn-danger m-2" to="/cadastro">
                    Faça seu Cadastro <BiArchiveOut />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
