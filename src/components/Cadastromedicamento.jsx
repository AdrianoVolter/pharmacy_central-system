import { useNavigate } from 'react-router-dom';

//const {nomeMedicamento, setNomeMedicamento, nomeLaboratorio, setNomeLaboratorio, dosagemMedicamento, setDosagemMedicamento, descricaoMedicamento, setDescricaoMedicamento, precoMedicamento, setPrecoMedicamento, tipoMedicamento, setTipoMedicamento, CadastrarMedicamento, limparCampos} = useContexto();

function CadastroMedicamento ( 


    nomeMedicamento,
    setNomeMedicamento,
    nomeLaboratorio,
    setNomeLaboratorio,
    dosagemMedicamento,
    setDosagemMedicamento,
    descricaoMedicamento,
    setDescricaoMedicamento,
    precoMedicamento,
    setPrecoMedicamento,
    tipoMedicamento,
    setTipoMedicamento,
    CadastrarMedicamento,
    limparCampos

) {
    
    //const {nomeMedicamento, setNomeMedicamento, nomeLaboratorio, setNomeLaboratorio, dosagemMedicamento, setDosagemMedicamento, descricaoMedicamento, setDescricaoMedicamento, precoMedicamento, setPrecoMedicamento, tipoMedicamento, setTipoMedicamento, CadastrarMedicamento, limparCampos} = useContexto(Contexto);
   
    return(
        <div className="row col-10 p-3 m-2 ">
            <h4>Cadastro de Medicamento</h4>
            <form>
            <div className="row ">
                <div className="col-6">
                    <label className='form-label'>Nome do medicamento</label>  <br/>
                    <input onChange={(e)=>setNomeMedicamento(e.target.value)} className="form-control" value={nomeMedicamento} type="text" name="nomeMedicamento" id="nomeMedicamento" placeholder="Digite o nome do medicamento" required/> <br/>
                </div>
                <div className="col-6">    
                    <label className='form-label'>Nome do laboratório</label>  <br/>
                    <input onChange={(e)=>setNomeLaboratorio(e.target.value)} className="form-control" value={nomeLaboratorio} type="text" name="nomeLaboratorio" id="nomeLaboratorio" placeholder="Digite o nome do laboratório" required/> <br/>
                </div>
            </div>
            <div className="row">
                    <div className="col-4">
                        <label className='form-label'>Dosagem do medicamento</label>  <br/>
                        <input onChange={(e)=>setDosagemMedicamento(e.target.value)} className="form-control" value={dosagemMedicamento} type="number" name="dosagemMedicamento" id="dosagemMedicamento" placeholder="Digite a dosagem do medicamento" required/> <br/>
                    </div>
                    <div className="col-4">
                    <label className='form-label'>Preço unitário do medicamento</label>  <br/>
                    <input onChange={(e)=>setPrecoMedicamento(e.target.value)} className="form-control" value={precoMedicamento} type="number" name="precoMedicamento" id="precoMedicamento" placeholder="Digite o preço unitário do medicamento" required/> <br/>
                    </div>
            
                    <div className="col-4">               
                        <label className='form-label'>Tipo do medicamento</label>  <br/>
                        <select onChange={(e)=>setTipoMedicamento(e.target.value)} className="form-control" value={tipoMedicamento} name="tipoMedicamento" id="tipoMedicamento">
                            <option value="medicamentoControlado">Medicamento controlado</option>
                            <option value="medicamentoComum">Medicamento comum</option>
                        </select> <br/>
                   </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <label className='form-label'>Descrição do medicamento</label>  <br/>
                    <textarea onChange={(e)=>setDescricaoMedicamento(e.target.value)} className="form-control " value={descricaoMedicamento} name="descricaoMedicamento" id="descricaoMedicamento" cols="30" rows="10" placeholder="Digite a descrição do medicamento"></textarea> <br/>
                    </div>
                
            </div>
            <div className="row">

                <button className='btn btn-secondary col-2 m-2' onClick={CadastrarMedicamento} type="submit">Cadastrar</button>
                <button className='btn btn-secondary col-2 m-2' onClick={limparCampos} type="reset">Limpar</button>
            </div>
            </form>
        </div>
    )

}

export default CadastroMedicamento









 // const [nomeMedicamento, setNomeMedicamento] = useState('');
    // const [nomeLaboratorio, setNomeLaboratorio] = useState('');
    // const [dosagemMedicamento, setDosagemMedicamento] = useState('');
    // const [descricaoMedicamento, setDescricaoMedicamento] = useState('');
    // const [precoMedicamento, setPrecoMedicamento] = useState('');
    // const [tipoMedicamento, setTipoMedicamento] = useState('');

    // const [nomeMedicamentos, setNomeMedicamentos] = useState([]);
    // const [nomeLaboratorios, setNomeLaboratorios] = useState([]);
    // const [dosagemMedicamentos, setDosagemMedicamentos] = useState([]);
    // const [descricaoMedicamentos, setDescricaoMedicamentos] = useState([]);
    // const [precoMedicamentos, setPrecoMedicamentos] = useState([]);
    // const [tipoMedicamentos, setTipoMedicamentos] = useState([]);

    // const navigate = useNavigate();

    

    // const handleNomeMedicamento = (e) => {
    //     setNomeMedicamento(e.target.value);
    // }

    // const handleNomeLaboratorio = (e) => {
    //     setNomeLaboratorio(e.target.value);
    // }

    // const handleDosagemMedicamento = (e) => {
    //     setDosagemMedicamento(e.target.value);
    // }

    // const handleDescricaoMedicamento = (e) => {
    //     setDescricaoMedicamento(e.target.value);
    // }

    // const handlePrecoMedicamento = (e) => {
    //     setPrecoMedicamento(e.target.value);
    // }

    // const handleTipoMedicamento = (e) => {
    //     setTipoMedicamento(e.target.value);
    // }

    // const handleCadastrar = (e) => {
    //      e.preventDefault();
    //     if (nomeMedicamento === '' || nomeLaboratorio === '' || dosagemMedicamento === '' || descricaoMedicamento === '' || precoMedicamento === '' || tipoMedicamento === '') {
    //         alert('Preencha todos os campos!');

    //         return  false;       
    //     } else {
    //         setNomeMedicamentos([...nomeMedicamentos, nomeMedicamento]);
    //         setNomeLaboratorios([...nomeLaboratorios, nomeLaboratorio]);
    //         setDosagemMedicamentos([...dosagemMedicamentos, dosagemMedicamento]);
    //         setDescricaoMedicamentos([...descricaoMedicamentos, descricaoMedicamento]);
    //         setPrecoMedicamentos([...precoMedicamentos, precoMedicamento]);
    //         setTipoMedicamentos([...tipoMedicamentos, tipoMedicamento]);

    //         localStorage.setItem('nomeMedicamentos', JSON.stringify([...nomeMedicamentos, nomeMedicamento]));
    //         localStorage.setItem('nomeLaboratorios', JSON.stringify([...nomeLaboratorios, nomeLaboratorio]));
    //         localStorage.setItem('dosagemMedicamentos', JSON.stringify([...dosagemMedicamentos, dosagemMedicamento]));
    //         localStorage.setItem('descricaoMedicamentos', JSON.stringify([...descricaoMedicamentos, descricaoMedicamento]));
    //         localStorage.setItem('precoMedicamentos', JSON.stringify([...precoMedicamentos, precoMedicamento]));
    //         localStorage.setItem('tipoMedicamentos', JSON.stringify([...tipoMedicamentos, tipoMedicamento]));

    //       alert('Dados salvos com sucesso!');
    //         navigate('/medicamentos');
    //     //   handleLimpar(e);
    //     }


       
    // }

    // const handleLimpar = (e) => {

    //     e.preventDefault();
       
    //         setNomeMedicamento(''),
    //         setNomeLaboratorio(''),
    //         setDosagemMedicamento(''),
    //         setDescricaoMedicamento(''),
    //         setPrecoMedicamento(''),
    //         setTipoMedicamento(''),
       
       
    //     console.log('Dados limpos com sucesso!');
    // }
