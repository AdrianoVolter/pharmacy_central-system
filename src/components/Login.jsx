

import React, { useState } from 'react'


function Login(){

   
const [email, setEmail] = useState('')
const [senha, setSenha] = useState('')


      
const handleEmail = (e) => {
    setEmail(e.target.value)
    };
      
const handleSenha = (e) => {
    setSenha(e.target.value)
    };
      
const handleEnviar = (e) => {
    if (email === '' || senha.length < 8) {
        alert('Preencha todos os campos CORRETAMENTE!')
        return;
    }else{
    e.preventDefault()
    alert('Dados salvos com sucesso!')

    
     } 
    }

    return(
        <div className=" col-12 container p-3">
            <div className="row col-6">
                <div className=" col-12 ">
                    <div className="">
                        <div className="">
                            <h4>Login</h4>
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