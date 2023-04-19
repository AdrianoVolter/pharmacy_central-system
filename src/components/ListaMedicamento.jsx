import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function ListaMedicamento() {

const [show, setShow] = useState(false);
const fecharModal = () =>setShow(false);
const abrirModal = () =>setShow(true);

const navigate = useNavigate();
function handleCdMed() {
    navigate('/formulario_med');
}

return (

    <div className="col-12 container-fluid  p-3  ">


        <h4>Lista de Medicamentos</h4> <input className="  col btn btn-secondary border p-2 m-2" type="button" value="Cadatrar medicamento " onClick={(e) => handleCdMed()} />
        <div className="row d-lg-flex">
            {medicamentos.map((medicamento, index) => (

                <div className="col-4">

                    <div className="card p-2 m-2" key={index}>

                        <img src="src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{medicamento.nome}</h5>
                            <p className="card-text">{medicamento.laboratorio}</p>
                            <p className="card-text">{medicamento.dosagem}</p>
                            <p className="card-text">{medicamento.descricao}</p>
                            <p className="card-text">{medicamento.preco}</p>
                            <p className="card-text">{medicamento.tipo}</p>
                            <Button variant="primary" onClick={abrirModal}>Detalhes</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <Modal show={show} onHide={fecharModal}>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes do medicamento</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Nome: {medicamentos.nome}</p>
                <p>Laboratório: {medicamentos.laboratorio}</p>
                <p>Dosagem: {medicamentos.dosagem}</p>
                <p>Descrição: {medicamentos.descricao}</p>
                <p>Preço: {medicamentos.preco}</p>
                <p>Tipo: {medicamentos.tipo}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={fecharModal}>
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
)

}

export default ListaMedicamento


































































































//     const navigate = useNavigate();
//     function handleCdMed() {
//         navigate('/formulario_med');
//     }

//     const [show, setShow] = useState(false);
//     const fecharModal = () => 

//         setShow(false);

//     const abrirModal = () => 

//         setShow(true);

//     const medicamentos = [
//         {
//             nome: 'Dipirona',
//             dose: '500mg',
//             laboratorio: 'Bayer',
//             descricao: 'Dor de cabeça',
//             preco: 'R$ 5,00',
//             tipo: 'Comprimido'
//         },
//         {
//             nome: 'Anador',
//             dose: '500mg',
//             laboratorio: 'Farma',
//             descricao: 'Dor de cabeça',
//             preco: 'R$ 5,00',
//             tipo: 'Comprimido'
//         }
//     ]

//     return (
//             <div className="col-12 container-fluid  p-3  ">
                
                
//                 <h4>Lista de Medicamentos</h4>  <input className="  col btn btn-secondary border p-2 m-2" type="button" value="Cadatrar medicamento "  onClick={(e) =>handleCdMed()}/>
//                 <div className="row d-lg-flex">
//                     {medicamentos.map((medicamento, index) => (

//                         <div className="col-4">

//                             <div className="card p-2 m-2" key={index}>

//                                 <img src="src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg" className="card-img-top" alt="..."/>
//                                 <div className="card-body">
//                                     <div className='row'>

//                                     <div className='col-7'>

//                                          <h6 className="card-title">{medicamento.nome}</h6>

//                                     </div>
//                                     <div className='col-5'>
//                                         <p className="card-text">{medicamento.dose}</p>
//                                     </div>


//                                      <Button 
//                                         variant="primary" 
//                                         onClick={(e) => {abrirModal()
//                                             console.log(medicamento.nome)

//                                             }
//                                         }
        
//                                         >
//                                             Detalhes
//                                         </Button>

                                      
//                                     <Modal key={index} className='modal'  show={show} onHide={fecharModal}>
//                                         <Modal.Header closeButton>
//                                             <Modal.Title>
//                                             {
//                                                 medicamento.nome
                                            
//                                             }
                                            
//                                             </Modal.Title>
//                                         </Modal.Header>
    
//                                         <Modal.Body>
//                                             <div className='row'>
//                                                 <div className='col-4'>
//                                                 <h6>Laboratorio: </h6><p>{medicamento.laboratorio}</p>
//                                                 </div>
//                                                 <div className='col-4'>
//                                                 <h6>Tipo de medicamento: </h6><p>Medicamento controlado</p>
//                                                 </div>
//                                                 <div className='col-4'>
//                                                 <h6>Preço: </h6><p>R$ {medicamento.preco}</p>
//                                                 </div>
//                                             </div>
                                          
//                                             <h5>Descrição:</h5> {medicamento.descricao}
                                            
//                                         </Modal.Body>
//                                         <Modal.Footer>
//                                             <Button variant="secondary" onClick={fecharModal}>
//                                                 Fechar
//                                             </Button>
//                                         </Modal.Footer>
//                                     </Modal>
                              
//                                     </div>
                                    
                                   
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
                
//             </div>
        
//         )
//     }


// export default ListaMedicamento;

  
