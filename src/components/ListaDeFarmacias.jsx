import { useNavigate } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
import { FarmContext } from "../contexts/FarmContext"
import { useContext } from "react"
//import { FarmProvider } from "../contexts/FarmContext"

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
                        {listaFarmacias.map((objeto, index) => (
                            <tr className="tr">
                                <td><li scope="row" className="list-group-item" key={index}>{index + 1}</li></td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.bairro}</td>
                                <td>{objeto.cidade}</td>
                                <td>{objeto.estado}</td>
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
                <div className="container p-3 border bg-warning">
                    <div className="row">
                        <h5>Nome: {listaFarmacias[modal]?.nome}</h5>
                        <h6>Nome Fantasia: {listaFarmacias[modal]?.nomeFantasia}</h6>
                        <p>CNPJ: {listaFarmacias[modal]?.cnpj}</p>
                        <h5>Contato</h5>
                        <p><BsTelephoneInbound/>{" "}Telefone : {listaFarmacias[modal]?.telefone}</p>
                        <p><BsWhatsapp/>{" "}Celular: {listaFarmacias[modal]?.celular}</p>
                        <p><MdAlternateEmail/>{" "}E-mail: {listaFarmacias[modal]?.email}</p>
                       
                        <h5>Endereço</h5>
                        <p>Logradouro: {listaFarmacias[modal]?.logradouro}</p>

                        <p>Bairro: {listaFarmacias[modal]?.bairro}</p>
                        <p>Cidade: {listaFarmacias[modal]?.cidade}</p>
                        <p>Estado: {listaFarmacias[modal]?.estado}</p>
                        <p>Cep:{listaFarmacias[modal]?.cep}</p>
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



