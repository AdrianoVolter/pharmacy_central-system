import { useNavigate } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
import { FarmContext } from "../contexts/FarmContext"
import { useContext } from "react"

import { BiArchiveOut, BiCommentDetail} from 'react-icons/bi'
import {BsTelephoneInbound, BsXCircleFill} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


function ListaDeFarmacias() {

    

    const { listaFarmacias } = useContext(FarmContext)

    const [modal, setModal] = useState(null) // aqui eu estou criando um estado para controlar o modal
 
    const abrirModal = (index) => {
        setModal(index)
    }

    const fecharModal = () => {
        setModal(null)
    }

    const navigate = useNavigate()
    function handleCdFarm() {
        navigate('/formulario')
    }

    const celular = listaFarmacias[modal]?.celular;
    const celularSemMascara = celular ? celular.replace(/\D/g, "") : "";
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=55${celularSemMascara}&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20produto%20%3A`;


    return (

        // <FarmProvider>
        <div className="col-12 container-fluid  p-3  ">
            <h4>Lista de Farmácias</h4> 
            <button className="  col btn btn-light border p-2 m-2" variant="bg-warning" type="button" value="Cadatrar Farmácia " onClick={(e) => handleCdFarm()} >
                Cadastrar Farmácia
                <BiArchiveOut className=" m-2"/>
            </button>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr className="tr">
                            <th scope="col"  >Id</th>
                            <th scope="col">Nome da Farmácia</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaFarmacias.map((farmacia, index) => (
                            <tr className="tr">
                                <td><li scope="row" className="list-group-item" key={index}>{index + 1}</li></td>
                                <td>{farmacia.nome}</td>
                                <td>{farmacia.bairro}</td>
                                <td>{farmacia.cidade}</td>
                                <td>{farmacia.estado}</td>
                                <td><Button variant="primary" className="col btn btn-warning p-2 m-2" onClick={() => abrirModal(index)}>Detalhes{" "}<BiCommentDetail className=""/></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>      
            </div>
        <Modal show={modal !== null} onHide={fecharModal}>
            <Modal.Header closeButton>
                <Modal.Title><BiCommentDetail className="m-2"/>Detalhes da Farmácia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3 border bg-warning">
                    <div className="row">
                             <h5>Nome: {listaFarmacias[modal]?.nome}</h5> <br />
                        <div className="row">
                             <div className="col-6">
                                 <h6>Nome Fantasia: {listaFarmacias[modal]?.nomeFantasia}</h6> 
                             </div>
                            <div className="col-6">
                                 <p><strong>CNPJ:</strong> {listaFarmacias[modal]?.cnpj}</p>
                            </div>
                        </div>
                            <h5>Contato</h5>
                            <div className="row">
                                <div className="col-12">
                                    <p ><strong><BsTelephoneInbound/>
                                        {" "}Telefone : </strong>{listaFarmacias[modal]?.telefone}
                                    </p>
                                </div>
                                 <div className="col-12">
                                     <p><strong><BsWhatsapp/>{" "}Celular:</strong> {listaFarmacias[modal]?.celular}</p>
                                 </div>
                                 <div className="col-12">
                                     <p ><strong><BsWhatsapp/>{" "}Wattsapp:</strong> <a 
                                        href={linkWhatsApp}
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="text-danger"
                                        title="Clique para enviar uma mensagem"
                                        >
                                            {listaFarmacias[modal]?.celular}
                                        </a> </p>
                                 </div>
                               
                            </div>
                           
                            <p><strong><MdAlternateEmail/>{" "}E-mail:</strong> {listaFarmacias[modal]?.email}</p>
                        
                            <h5>Endereço</h5>
                            <div className="col-12">
                                     <p><strong>Logradouro:</strong> {listaFarmacias[modal]?.logradouro}</p>
                                </div>
                            <div className="row">
                                
                                <div className="col-6">
                                     <p><strong>Numero:</strong> {listaFarmacias[modal]?.numero}</p>
                                </div>
                                
                             <div className="col-6">
                                    <p><strong>Bairro:</strong> {listaFarmacias[modal]?.bairro}</p>
                                </div>
                            </div>
                            <div className="row">
                              
                                <div className="col-6">
                                    <p><strong>Complemento:</strong> {listaFarmacias[modal]?.complemento}</p>
                                </div>
                                 <div className="col-4">
                                     <p><strong>Cep:</strong> {listaFarmacias[modal]?.cep}</p>
                                </div>
                            </div>
                            
                            
                            <div className="row">
                                <div className="col-4">
                                      <p><strong>Cidade:</strong> {listaFarmacias[modal]?.cidade}</p>
                                </div>
                                <div className="col-4">
                                     <p><strong>Estado:</strong> {listaFarmacias[modal]?.estado}</p>
                                </div>
                               
                            </div>
                          
                           
                           
                      
                       
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={fecharModal}>
                    Fechar <BsXCircleFill className="m-2"/>
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}



export default ListaDeFarmacias



