import { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function ListaMedicamento() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false); //modal
    const fecharModal = () => setShow(false);
    const abrirModal = () => setShow(true);

    const handleCdMed=(e)=>{
        navigate('/formulario_med')
    }
    
    const medicamentos = [
        {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 1",
            "marca": "Marca A",
            "preco": 10.99,
            "texto": "Lorem adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
          },
          {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 2",
            "marca": "Marca B",
            "preco": 15.99,
            "texto": "wwwwwsit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
          },
          {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 3",
            "marca": "Marca C",
            "preco": 20.49,
            "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
          },
          {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 4",
            "marca": "Marca D",
            "preco": 5.99,
            "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
          },
          {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 5",
            "marca": "Marca E",
            "preco": 12.79,
            "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
          },
          {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 6",
            "marca": "Marca F",
            "preco": 8.99,
            "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
          },
       ]

       return (
        <div className="col-12 container-fluid  p-3  ">
            <h4>Lista de Medicamentos</h4>  <input className=" justify-content-end col-3 btn btn-secondary border p-2 m-2" type="button" value="Cadatrar medicamento "  onClick={(e) =>handleCdMed()}/>
            <div className="row">
                {medicamentos.map((medicamento) => (
                    <div className="col-3">
                        <div className="card p-2 m-2">
                            <img src={medicamento.imagem} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{medicamento.nome}</h5>
                                <p className="card-text">{medicamento.marca}</p>
                                <p className="card-text">R$ {medicamento.preco}</p>
                                
                                <Button 
                                    variant="primary" 
                                    onClick={
                                        () => {
                                            abrirModal()
                                            setTexto(medicamento.texto)
                                            setNome(medicamento.nome)
                                            setMarca(medicamento.marca)
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
                                    <Modal.Body>{medicamento.texto}</Modal.Body>
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



