import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import MedContext  from '../contexts/MedContext';
import { useContext } from 'react';

function ListaMedicamento() {

    const navigate = useNavigate();
    function handleCdMed() {
        navigate('/formulario_med');
        console.log(medicamentos);
    }
    const [show, setShow] = useState(false);
    const fecharModal = () => setShow(false);
    const abrirModal = () => setShow(true);

    //Verificar se o medicamento está cadastrado

    const { medicamentos, setMedicamentos,  } = useContext(MedContext);
    //const nome = useContext(MedContext);
   
    //const [listaMedicamentos, setListaMedicamentos] = useState([]);


    // useEffect(() => {
    //     let medicamentos = JSON.parse(localStorage.getItem('listaMedicamentos'));
    //     if (medicamentos === null) {
    //         medicamentos = [];
    //     }
    //     setListaMedicamentos(medicamentos);
    // }, []);

    useEffect(() => {
        localStorage.setItem('listaMedicamentos', JSON.stringify(medicamentos));
    }, [medicamentos]);

    useEffect(() => {
        setMedicamentos(medicamentos);
    }, [medicamentos]);

 

    return (
            <div className="col-12 container-fluid  p-3  ">
                
                {JSON.stringify(medicamentos)}
                <h4>Lista de Medicamentos</h4>  <input className="  col btn btn-secondary border p-2 m-2" type="button" value="Cadatrar medicamento "  onClick={(e) =>handleCdMed()}/>
                <div className="row d-lg-flex">
                    {medicamentos.map((medicamento, index) => (

                        <div className="col-4">

                            <div className="card p-2 m-2" key={index}>

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

  

 // const novaLista = medicamentos.map((medicamento, index) => (
    //     <div className="row col-4">
    //         <div className="card border border-secondary p-2 m-2">
    //             <div className="card-body" key={index}>
    //                 <h5 className="card-title">{medicamento.nome}</h5>
    //                 <h6 className="card-subtitle mb-2 text-muted">{medicamento.laboratorio}</h6>
    //                 <p className="card-text">{medicamento.descricao}</p>
    //                 <p className="card-text">R$ {medicamento.preco}</p>
    //                 <p className="card-text">{medicamento.dosagem}</p>
    //                 <p className="card-text">{medicamento.tipo}</p>
    //                 <button className="btn btn-primary" onClick={abrirModal}>Editar</button>
    //                 <button className="btn btn-danger">Excluir</button>
    //             </div>
    //         </div>
    //     </div>
    // ));









//const medicamentos = [
    //     {            
    //         "nome": "Medicamento 1",
    //         "dose": "10mg",
    //         "tiopo": "Medicamento comum",
    //         "laboratorio": "Lab-A",
    //         "preco": 10.99,
    //         "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
    //         },
    //       {   
    //         "nome": "Medicamento 2",
    //         "dose": "10mg",
    //         "tiopo": "Medicamento comum",
    //         "laboratorio": "Lab-A",
    //         "preco": 10.99,
    //         "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."      
    //     },
    //       { 
    //         "nome": "Medicamento 3",
    //         "dose": "10mg",
    //         "tiopo": "Medicamento comum",
    //         "laboratorio": "Lab-A",
    //         "preco": 10.99,
    //         "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
    //     },
    //       {
    //         "nome": "Medicamento 4",
    //         "dose": "10mg",
    //         "tiopo": "Medicamento comum",
    //         "laboratorio": "Lab-A",
    //         "preco": 10.99,
    //         "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
    //     },
    //       {
    //         "nome": "Medicamento 5",
    //         "dose": "10mg",
    //         "tiopo": "Medicamento comum",
    //         "laboratorio": "Lab-A",
    //         "preco": 10.99,
    //         "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
    //     },
    //       {
    //         "nome": "Medicamento 6",
    //         "dose": "10mg",
    //         "tiopo": "Medicamento comum",
    //         "laboratorio": "Lab-A",
    //         "preco": 10.99,
    //         "descricao": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
    //     },
    //    ]
  