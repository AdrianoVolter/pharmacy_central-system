import { useNavigate } from 'react-router-dom';
import { useState ,useEffect } from 'react';
//import UseContext from '../contexts/UseContext';
import MedContext from '../contexts/MedContext';
import { useContext } from 'react';


function CadastroMedicamento () {

  const [nomeMedicamento, setNomeMedicamento] = useState('');
  const [nomeLaboratorio, setNomeLaboratorio] = useState('');
  const [dosagemMedicamento, setDosagemMedicamento] = useState('');
  const [descricaoMedicamento, setDescricaoMedicamento] = useState('');
  const [precoMedicamento, setPrecoMedicamento] = useState('');
  const [tipoMedicamento, setTipoMedicamento] = useState('');
  const [listaMedicamentos, setListaMedicamentos] = useState([ ]);
    const { medicamentos, setMedicamentos } = useContext(MedContext);
  
  const navigate = useNavigate();

 function CadastrarMedicamento(){
   
    
 let lista = {'nome': nomeMedicamento, 'laboratorio': nomeLaboratorio, 'dosagem': dosagemMedicamento, 'descricao': descricaoMedicamento, 'preco': precoMedicamento, 'tipo': tipoMedicamento}
//validar campos
    if( nomeMedicamento === '' || nomeLaboratorio === '' || dosagemMedicamento === '' || descricaoMedicamento === '' || precoMedicamento === '' || tipoMedicamento === ''){
        alert('Preencha todos os campos');
       return;
    } else {  
        listaMedicamentos.push(lista);
        setListaMedicamentos(listaMedicamentos);
        
        limparCampos();
        alert('Medicamento cadastrado com sucesso');
        AdicionarLocalStorage();
        navigate('/medicamentos');
    }
        
    function AdicionarLocalStorage(){
        let medicamentos = JSON.parse(localStorage.getItem('listaMedicamentos'));
        if(medicamentos === null){
            medicamentos = [];
        }
        medicamentos.push(lista);
        localStorage.setItem('listaMedicamentos', JSON.stringify(medicamentos));
        console.log(medicamentos);
    }
  }

  function limparCampos(){
    
    setNomeMedicamento('');
    setNomeLaboratorio('');
    setDosagemMedicamento('');
    setDescricaoMedicamento('');
    setPrecoMedicamento('');
    setTipoMedicamento('');
  }

    return(
        <MedContext.Provider value={{medicamentos, setMedicamentos}}>
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
                        <label className='form-label'>Dosagem do medicamento mg</label>  <br/>
                        <input onChange={(e)=>setDosagemMedicamento(e.target.value)} className="form-control" value={dosagemMedicamento} type="number" name="dosagemMedicamento" id="dosagemMedicamento" placeholder="Digite a dosagem do medicamento" required/> <br/>
                    </div>
                    <div className="col-4">
                    <label className='form-label'>Preço unitário do medicamento R$</label>  <br/>
                    <input onChange={(e)=>setPrecoMedicamento(e.target.value)} className="form-control" value={precoMedicamento} type="number" name="precoMedicamento" id="precoMedicamento" placeholder="Digite o preço unitário do medicamento" required/> <br/>
                    </div>
            
                    <div className="col-4">               
                        <label className='form-label'>Tipo do medicamento</label>  <br/>
                        <select onChange={(e)=>setTipoMedicamento(e.target.value)} className="form-control" value={tipoMedicamento} name="tipoMedicamento" id="tipoMedicamento">
                            <option value="#">Escolha o tipo</option>
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

                <button className='btn btn-secondary col-2 m-2' onClick={(e) => {
                    CadastrarMedicamento (e)
                }
                    } type="submit">Cadastrar</button>
                <button className='btn btn-secondary col-2 m-2' onClick={limparCampos} type="reset">Limpar</button>
            </div>
            </form>
        </div>
        </MedContext.Provider>
    )

                

}

export default CadastroMedicamento

