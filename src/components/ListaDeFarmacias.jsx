import { useNavigate } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
//import {Card } from 'react-bootstrap'
function ListaDeFarmacias(props) {


    const navigate = useNavigate()
    const handleCdFarm=(e)=>{
       
        navigate('/formulario')
    }

    const [show, setShow] = useState(false); //modal
    const fecharModal = () => setShow(false);
    const abrirModal = () => setShow(true);

 //Exemplo 
    const farmacias = [
        
        {
            logradouro:	'Servidão Manoel Braz do Nascimento',	
            telefone:	'4884687433'	,
            cep	:'88049500',	
            bairro:	'Tapera da Base',
            celular:'48984687433',
            cnpj:'45556666666',
            complemento:'Casa',	
            numero:'40',
            nome:'VolterFarma',
            email:'adriano.valter@hotmail.com',
            cidade:'Florianópolis'	,
            nomeFantasia: 'VolterFarma eeeeeeee'	,
            estado:'SC',

        },
        {
            logradouro:	'Servidão Manoel Braz do Nascimento',	
            telefone:	'4884687433'	,
            cep	:'88049500',	
            bairro:	'Tapera da Base',
            celular:'48984687433',
            cnpj:'45556666666',
            complemento:'Casa',	
            numero:'40',
            nome:'VolterFarma inc',
            email:'adriano.valter@hotmail.com',
            cidade:'Florianópolis'	,
            nomeFantasia:'VolterFarma'	,
            estado:'SC',

        },
        {
            logradouro:	'Servidão Manoel Braz do Nascimento',	
            telefone:	'4884687433'	,
            cep	:'88049500',	
            bairro:	'Tapera da Base',
            celular:'48984687433',
            cnpj:'45556666666',
            complemento:'Casa',	
            numero:'40',
            nome:'VolterFarma',
            email:'adriano.valter@hotmail.com',
            cidade:'Florianópolis'	,
            nomeFantasia:'VolterFarma'	,
            estado:'SC',
        }

    ]




    return (
        <div className="col-12 container-fluid  p-3  ">

            <h4>Lista de Farmácias</h4> 
            <input className="col-3 btn btn-secondary border p-2 m-2" type="button" value="Cadatrar nova farmacia "  onClick={(e) =>handleCdFarm()}/>
            <div className='table-responsive'>
            <table className="table table-striped  align-middle">
                <thead>
                    <tr>
                        <th>Nome da Farmácia</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Ver detalhes</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {farmacias.map((farmacia, index) => {
                        return (

                            <tr key={index}>
                                <td>{farmacia.nome}</td>
                                {/* <td>{farmacia.nomeFantasia}</td>
                                <td>{farmacia.telefone}</td>
                                <td>{farmacia.celular}</td>
                                <td>{farmacia.cnpj}</td>
                                <td>{farmacia.cep}</td>
                                <td>{farmacia.logradouro}</td>
                                <td>{farmacia.numero}</td>
                                <td>{farmacia.complemento}</td> */}
                                <td>{farmacia.bairro}</td>
                                <td>{farmacia.cidade}</td>
                                <td>{farmacia.estado}</td>
                                <td>
                                    <button className="btn btn-secondary border p-2 m-2" onClick={abrirModal}>Ver mais</button>
                                </td>
                                
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            </div>
            <Modal show={show} onHide={fecharModal}>
                <Modal.Header closeButton>
                    <Modal.Title><h4>{farmacias[0].nome}</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                     <div className="d-flex ">
                            <h5>Nome Fantasia: <span>{ farmacias[0].nomeFantasia}</span> </h5>
                        </div>
                    <div className="row">
                        <div className="col-6">
                            <h5>Telefone: {farmacias[0].telefone}</h5>
                        </div>
                        <div className="col-6">
                            <h5>Celular: {farmacias[0].celular}</h5>
                        </div>
                    </div> <br />
                    <div className="row">
                        <div className="col-6">
                            <h5>CNPJ: {farmacias[0].cnpj}</h5>
                        </div>
                        <div className="col-6">
                            <h5>CEP: {farmacias[0].cep}</h5>
                        </div>
                    </div> <br />
                        <div>
                            <h5>Logradouro: {farmacias[0].logradouro}</h5>
                        </div>
                        <div>
                            <h5>Número: {farmacias[0].numero}</h5>
                        </div> 
                        <div>
                            <h5>Complemento: {farmacias[0].complemento}</h5>
                        </div> <br />
                        <div>
                            <h5>Bairro: {farmacias[0].bairro}</h5>
                        </div>
                        <div>
                            <h5>Cidade: {farmacias[0].cidade}</h5>
                        </div>
                        <div>
                            <h5>Estado: {farmacias[0].estado}</h5>
                        </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={fecharModal}>
                        Close
                    </Button>
                  
                </Modal.Footer>
            </Modal>
                    

                
        </div>
    )
}


export default ListaDeFarmacias
