import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { MedContext } from '../contexts/MedContext';
import { useContext } from 'react';

import { BiArchiveOut, BiCommentDetail} from 'react-icons/bi'
import {BsX} from 'react-icons/bs'
//import {GiMedicines} from 'react-icons/gi'

function ListaMedicamento() {

    const { listaMedicamentos } = useContext(MedContext); // aqui eu estou pegando a lista de medicamentos do contexto

    const [card, setCard] = useState(null); // aqui eu estou criando um estado para controlar o modal

    const abrirModal = (index) => {
        setCard(index);
    }

    const fecharModal = () => {
        setCard(null);
    }


const navigate = useNavigate();
function handleCdMed() {
    navigate('/formulario_med');
}

return (

    <div className="col-12 container-fluid  p-3  ">


        <h4>Lista de Medicamentos</h4> <button className="  col btn btn-light border p-2 m-2" type="button" value="Cadatrar medicamento " onClick={(e) => handleCdMed()} > 
        Cadastrar medicamento
        <BiArchiveOut className=" m-2"/>
        </button>
        <div className="container-fluid ">
            <div className="col-12 row ">
            {listaMedicamentos.map((medicamento, index) => (

                <div className="col-3 ">

                    <div className="col-12 card p-3 m-2" key={index}>

                        <img src="src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg" className="col-12 card-img-top  p-2" alt="..." />
                        <div className=" card-body p-2"> <br />
                        <div className="">
                       
                            <h6 className="card-title  col-12 ">{medicamento.nome}</h6>
                            <p className="card-text col-12"><strong>{medicamento.dosagem}</strong> mg</p>
                        
                        </div>
                            <Button className='' variant="warning" onClick={() => abrirModal(index)

                            }>Detalhes <BiCommentDetail className="m-2"/>
                            </Button>
                            <Modal show={card === index} onHide={fecharModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title> <BiCommentDetail className="m-2"/>
                                        Detalhes do medicamento</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <div className="row col-12 border bg-warning">
                                      <h5>Nome: {medicamento.nome}</h5>
                                     <div className="col-6">
                                          <p><strong>Laboratório:</strong> {medicamento.laboratorio}</p>
                                          
                                    </div> 
                                    <div className="col-6">
                                         <p><strong>Dosagem:</strong> {medicamento.dosagem} mg</p>
                                        </div>  
                                    <div className="col-6">
                                         <p><strong>Preço:</strong> R$ {medicamento.preco}</p>
                                    </div>
                                   <div className="col-6">
                                     <p><strong>Tipo:</strong> {medicamento.tipo}</p>
                                   </div>
                                    <div className="col-12">
                                    <p><h5>Descrição:</h5> {medicamento.descricao}</p>
                                    </div>
                                </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={fecharModal}>
                                        Fechar  <BsX className="m-2"/>
                                    </Button>
                                </Modal.Footer>
                            </Modal>


                        </div>
                    </div>
                </div>
            ))}
        </div>
        </div>
        
        
    </div>
)

}

export default ListaMedicamento
