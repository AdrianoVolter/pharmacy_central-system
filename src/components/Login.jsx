import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Login(){

   
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')
const history = useHistory();
      
const handleEmail = (e) => {
    setEmail(e.target.value)
    };
      
const handleSenha = (e) => {
    setSenha(e.target.value)
    };
      
const handleEnviar = (e) => {
    if (email === '' || senha === '') {
        alert('Preencha todos os campos!')
    }else{
    e.preventDefault()
    localStorage.setItem('email', email)
    localStorage.setItem('senha', senha)

    alert('Dados salvos com sucesso!')
    history.push('/farmacias')
     } 
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 ">
                    <div className="card">
                        <div className="card-header">
                            <h3>Login</h3>
                        </div><br />
                        <div className="card-body">
                            <form 
                                onSubmit={handleEnviar}
                            >
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Digite seu e-mail" 
                                        onChange={handleEmail}
                                        required
                                        />
                                </div> <br />
                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    <input 
                                        type="password" 
                                        className="form-control"  
                                        placeholder="Digite a senha" 
                                        onChange={handleSenha}
                                        minLength={8}
                                        required
                                        />
                                </div> <br />
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    >
                                        Enviar
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login