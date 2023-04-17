import Cadastromedicamento from '../components/Cadastromedicamento'
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';

function FormularioMed() {

  //const {listaMedicamentos, setListaMedicamentos, nomeMedicamento, setNomeMedicamento, nomeLaboratorio, setNomeLaboratorio, dosagemMedicamento, setDosagemMedicamento, descricaoMedicamento, setDescricaoMedicamento, precoMedicamento, setPrecoMedicamento, tipoMedicamento, setTipoMedicamento} = React.useContext(Contexto);
   
  const [nomeMedicamento, setNomeMedicamento] = useState('');
  const [nomeLaboratorio, setNomeLaboratorio] = useState('');
  const [dosagemMedicamento, setDosagemMedicamento] = useState('');
  const [descricaoMedicamento, setDescricaoMedicamento] = useState('');
  const [precoMedicamento, setPrecoMedicamento] = useState('');
  const [tipoMedicamento, setTipoMedicamento] = useState('');
  const [listaMedicamentos, setListaMedicamentos] = useState([]);

  const navigate = useNavigate();

 function CadastrarMedicamento(){
    
   let lista = {'nome': nomeMedicamento, 'laboratorio': nomeLaboratorio, 'dosagem': dosagemMedicamento, 'descricao': descricaoMedicamento, 'preco': precoMedicamento, 'tipo': tipoMedicamento}
//validar campos
    if(nomeMedicamento === '' || nomeLaboratorio === '' || dosagemMedicamento === '' || descricaoMedicamento === '' || precoMedicamento === '' || tipoMedicamento === ''){
        alert('Preencha todos os campos');
       
    } else {
        setListaMedicamentos([...listaMedicamentos, lista]);
        alert('Medicamento cadastrado com sucesso!');
        console.log(lista);
        navigate('/medicamentos');
    }
  }

  function salvarDados(){
    localStorage.setItem('listaMedicamentos', JSON.stringify(listaMedicamentos));
  }

  useEffect((e) => {
    salvarDados();
    console.log(listaMedicamentos);

  }, [listaMedicamentos]);

  function limparCampos(){
    setNomeMedicamento('');
    setNomeLaboratorio('');
    setDosagemMedicamento('');
    setDescricaoMedicamento('');
    setPrecoMedicamento('');
    setTipoMedicamento('');
  }



  return (

    <div className="container p-3">
        <Cadastromedicamento
          

        nomeMedicamento={nomeMedicamento}
        setNomeMedicamento={setNomeMedicamento}
        nomeLaboratorio={nomeLaboratorio}
        setNomeLaboratorio={setNomeLaboratorio}
        dosagemMedicamento={dosagemMedicamento}
        setDosagemMedicamento={setDosagemMedicamento}
        descricaoMedicamento={descricaoMedicamento}
        setDescricaoMedicamento={setDescricaoMedicamento}
        precoMedicamento={precoMedicamento}
        setPrecoMedicamento={setPrecoMedicamento}
        tipoMedicamento={tipoMedicamento}
        setTipoMedicamento={setTipoMedicamento}
        CadastrarMedicamento={CadastrarMedicamento}
        limparCampos={limparCampos}

         />
        
    </div>
    )
}

export default FormularioMed