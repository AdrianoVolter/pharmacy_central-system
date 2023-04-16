import { useNavigate } from "react-router-dom"
//import {Card } from 'react-bootstrap'
function ListaDeFarmacias(props) {


    const navigate = useNavigate()
    const handleCdFarm=(e)=>{
       
        navigate('/formulario')
    }

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
            nome:'VolterFarma wwwwwwwww',
            email:'adriano.valter@hotmail.com',
            cidade:'Florianópolis'	,
            nomeFantasia:'VolterFarma eeeeeeee'	,
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
        <div className="col-10 container-fluid d-grid p-3 m-2 border border-4">

            <h4>Lista de Farmácias</h4>

            <div className='table-responsive'>
            <table className="table table-striped  align-middle">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Nome Fantasia</th>
                        <th>Telefone</th>
                        <th>Celular</th>
                        <th>CNPJ</th>
                        <th>CEP</th>
                        <th>Logradouro</th>
                        <th>Numero</th>
                        <th>Complemento</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Email</th>
                        
                    </tr>
                </thead>
                <tbody className=''>
                    {farmacias.map((farmacia, index) => {
                        return (

                            <tr key={index}>
                                <td>{farmacia.nome}</td>
                                <td>{farmacia.nomeFantasia}</td>
                                <td>{farmacia.telefone}</td>
                                <td>{farmacia.celular}</td>
                                <td>{farmacia.cnpj}</td>
                                <td>{farmacia.cep}</td>
                                <td>{farmacia.logradouro}</td>
                                <td>{farmacia.numero}</td>
                                <td>{farmacia.complemento}</td>
                                <td>{farmacia.bairro}</td>
                                <td>{farmacia.cidade}</td>
                                <td>{farmacia.estado}</td>
                                <td>{farmacia.email}</td>
                                
                            </tr>

                        )
                    })}
                </tbody>
            </table>
            </div>
                <input className="col-3 btn btn-secondary border p-2 m-2" type="button" value="Cadatrar ma nova Farmacia "  onClick={(e) =>handleCdFarm()}/>
        </div>
    )
}


export default ListaDeFarmacias
