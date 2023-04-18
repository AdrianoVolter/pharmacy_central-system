import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

// import { useContext } from 'react';
// import UseContext from '../contexts/UseContext';

//recebe lista de medicamentos por contexto e exibe cards  na tela

function ListaMedicamento({  }) {


    const navigate = useNavigate();
    const [show, setShow] = useState(false); //modal
    const fecharModal = () => setShow(false);
    const abrirModal = () => setShow(true);


    function handleCdMed() {
        navigate('/formulario_med');
    }

    const medicamentos = [
        {            
            "nome": "Medicamento 1",
            "dose": "10mg",
            "tiopo": "Medicamento comum",
            "laboratorio": "Lab-A",
            "preco": 10.99,
            "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
            },
          {   
            "nome": "Medicamento 2",
            "dose": "10mg",
            "tiopo": "Medicamento comum",
            "laboratorio": "Lab-A",
            "preco": 10.99,
            "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."      
        },
          { 
            "nome": "Medicamento 3",
            "dose": "10mg",
            "tiopo": "Medicamento comum",
            "laboratorio": "Lab-A",
            "preco": 10.99,
            "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
        },
          {
            "nome": "Medicamento 4",
            "dose": "10mg",
            "tiopo": "Medicamento comum",
            "laboratorio": "Lab-A",
            "preco": 10.99,
            "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
        },
          {
            "nome": "Medicamento 5",
            "dose": "10mg",
            "tiopo": "Medicamento comum",
            "laboratorio": "Lab-A",
            "preco": 10.99,
            "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
        },
          {
            "nome": "Medicamento 6",
            "dose": "10mg",
            "tiopo": "Medicamento comum",
            "laboratorio": "Lab-A",
            "preco": 10.99,
            "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
        },
       ]

    return (
            <div className="col-12 container-fluid  p-3  ">
                <h4>Lista de Medicamentos</h4>  <input className=" justify-content-end col-3 btn btn-secondary border p-2 m-2" type="button" value="Cadatrar medicamento "  onClick={(e) =>handleCdMed()}/>
                <div className="row">
                    {medicamentos.map((medicamento) => (
                        <div className="col-3">
                            <div className="card p-2 m-2">
                                <img src="src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <div className='row'>
                                    <div className='col-7'>
                                         <h6 className="card-title">{medicamento.nome}</h6>
                                    </div>
                                    <div className='col-5'>
                                        <p className="card-text">{medicamento.dose}</p>
                                    </div>
                                    </div>
                                    
                                    <Button 
                                        variant="primary" 
                                        onClick={
                                            () => {
                                                abrirModal()
                                                setTexto(medicamento.descricao)
                                                setNome(medicamento.nome)
                                                setMarca(medicamento.laboratorio)
                                                setPreco(medicamento.preco)
                                                
                                                
                                            }
                                        }
        
                                        >
                                            Detalhes
                                        </Button>
                                    <Modal className='modal' show={show} onHide={fecharModal}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>{medicamento.nome}</Modal.Title>
                                        </Modal.Header>
    
                                        <Modal.Body>
                                            <div className='row'>
                                                <div className='col-4'>
                                                <h6>Laboratorio: </h6><p>{medicamento.laboratorio}</p>
                                                </div>
                                                <div className='col-4'>
                                                <h6>Tipo de medicamento: </h6><p>Medicamento controlado</p>
                                                </div>
                                                <div className='col-4'>
                                                <h6>Preço: </h6><p>R$ {medicamento.preco}</p>
                                                </div>
                                            </div>
                                          
                                            <h5>Descrição:</h5> {medicamento.descricao}
                                            
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


export default ListaMedicamento;

        

































  