import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { MedContext } from '../contexts/MedContext';
import { useContext } from 'react';

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


        <h4>Lista de Medicamentos</h4> <input className="  col btn btn-secondary border p-2 m-2" type="button" value="Cadatrar medicamento " onClick={(e) => handleCdMed()} />
        <div className="row d-lg-flex">
            {listaMedicamentos.map((objeto, index) => (

                <div className="col-3">

                    <div className="col-12 card p-2 m-2" key={index}>

                        <img src="src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg" className="col-12 card-img-top border" alt="..." />
                        <div className=" card-body">
                        <div className="">
                        <div className="row">
                            <h6 className="card-title  col-6">{objeto.nome}</h6>
                            {/* <p className="card-text">{objeto.descricao}</p> */}
                            <p className="card-text col-6">{objeto.dosagem} mg</p>
                            {/* <p className="card-text">{objeto.laboratorio}</p> */}
                            {/* <p className="card-text">{objeto.preco}</p> */}
                            {/* <p className="card-text">{objeto.tipo}</p> */}
                        </div> 

                        </div>
                            <Button variant="primary" onClick={() => abrirModal(index)

                            }>Detalhes</Button>
                            <Modal show={card === index} onHide={fecharModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Detalhes do medicamento</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <div className="row border">
                                    <h5>Nome: {objeto.nome}</h5>
                                    <p>Dosagem: {objeto.dosagem} mg</p>
                                    <p>Laboratório: {objeto.laboratorio}</p>
                                    <p>Preço: R$ {objeto.preco}</p>
                                    <p>Tipo: {objeto.tipo}</p>
                                    <p><h5>Descrição:</h5> {objeto.descricao}</p>
                                </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={fecharModal}>
                                        Fechar
                                    </Button>
                                </Modal.Footer>
                            </Modal>


                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
)

}

export default ListaMedicamento
