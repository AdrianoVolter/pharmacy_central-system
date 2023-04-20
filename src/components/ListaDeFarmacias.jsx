import { useNavigate } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
import { FarmContext } from "../contexts/FarmContext"
import { useContext } from "react"
//import { FarmProvider } from "../contexts/FarmContext"

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
            <input className="  col btn btn-secondary border p-2 m-2" type="button" value="Cadatrar Farmácia " onClick={(e) => handleCdFarm()} />
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col" >Id</th>
                            <th scope="col">Nome da Farmácia</th>
                            <th scope="col">Bairro</th>
                            <th scope="col">Cidade</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaFarmacias.map((objeto, index) => (
                            <tr >
                                <td><li scope="row" key={index}>{index + 1}</li></td>
                                <td>{objeto.nome}</td>
                                <td>{objeto.bairro}</td>
                                <td>{objeto.cidade}</td>
                                <td>{objeto.estado}</td>
                                <td><Button variant="primary" onClick={() => abrirModal(index)}>Detalhes</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>      
            </div>
        <Modal show={modal !== null} onHide={fecharModal}>
            <Modal.Header closeButton>
                <Modal.Title>Detalhes da Farmácia</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container p-3 border">
                    <div className="row">
                        <h5>Nome: {listaFarmacias[modal]?.nome}</h5>
                        <h6>Nome Fantasia: {listaFarmacias[modal]?.nomeFantasia}</h6>
                        <p>CNPJ: {listaFarmacias[modal]?.cnpj}</p>
                        <h5>Contato</h5>
                        <p>Telefone: {listaFarmacias[modal]?.telefone}</p>
                        <p>E-mail: {listaFarmacias[modal]?.email}</p>
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
                    Fechar
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}



export default ListaDeFarmacias



