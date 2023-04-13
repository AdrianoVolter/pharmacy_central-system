
import { useState } from 'react';


function CadastroMedicamento (){

    const [nomeMedicamento, setNomeMedicamento] = useState('');
    const [nomeLaboratorio, setNomeLaboratorio] = useState('');
    const [dosagemMedicamento, setDosagemMedicamento] = useState('');
    const [descricaoMedicamento, setDescricaoMedicamento] = useState('');
    const [precoMedicamento, setPrecoMedicamento] = useState('');
    const [tipoMedicamento, setTipoMedicamento] = useState('');

    const handleNomeMedicamento = (e) => {
        setNomeMedicamento(e.target.value);
    }

    const handleNomeLaboratorio = (e) => {
        setNomeLaboratorio(e.target.value);
    }

    const handleDosagemMedicamento = (e) => {
        setDosagemMedicamento(e.target.value);
    }

    const handleDescricaoMedicamento = (e) => {
        setDescricaoMedicamento(e.target.value);
    }

    const handlePrecoMedicamento = (e) => {
        setPrecoMedicamento(e.target.value);
    }

    const handleTipoMedicamento = (e) => {
        setTipoMedicamento(e.target.value);
    }

    const handleCadastrar = (e) => {
        e.preventDefault();
        localStorage.setItem('nomeMedicamento', nomeMedicamento);
        localStorage.setItem('nomeLaboratorio', nomeLaboratorio);
        localStorage.setItem('dosagemMedicamento', dosagemMedicamento);
        localStorage.setItem('descricaoMedicamento', descricaoMedicamento);
        localStorage.setItem('precoMedicamento', precoMedicamento);
        localStorage.setItem('tipoMedicamento', tipoMedicamento);
        alert('Dados salvos com sucesso!');
    }

    const handleLimpar = (e) => {
        e.preventDefault();
        setNomeMedicamento('');
        setNomeLaboratorio('');
        setDosagemMedicamento('');
        setDescricaoMedicamento('');
        setPrecoMedicamento('');
        setTipoMedicamento('');
        console.log('Dados limpos com sucesso!');
    }

    return(
        <div className="row col-10 p-2 m-2 border border-4">
            <h2>Cadastro de Medicamento</h2>
            <form onSubmit={handleCadastrar}>
            <div className="row ">
                <div className="col-6">
                    <label className='form-label'>Nome do medicamento</label>  <br/>
                    <input onChange={handleNomeMedicamento} className="form-control" type="text" name="nomeMedicamento" id="nomeMedicamento" placeholder="Digite o nome do medicamento" required/> <br/>
                </div>
                <div className="col-6">    
                    <label className='form-label'>Nome do laboratório</label>  <br/>
                    <input onChange={handleNomeLaboratorio} className="form-control" type="text" name="nomeLaboratorio" id="nomeLaboratorio" placeholder="Digite o nome do laboratório" required/> <br/>
                </div>
            </div>
            <div className="row">
                    <div className="col-4">
                        <label className='form-label'>Dosagem do medicamento</label>  <br/>
                        <input onChange={handleDosagemMedicamento} className="form-control" type="text" name="dosagemMedicamento" id="dosagemMedicamento" placeholder="Digite a dosagem do medicamento" required/> <br/>
                    </div>
                    <div className="col-4">
                    <label className='form-label'>Preço unitário do medicamento</label>  <br/>
                    <input onChange={handlePrecoMedicamento} className="form-control" type="text" name="precoMedicamento" id="precoMedicamento" placeholder="Digite o preço unitário do medicamento" required/> <br/>
                    </div>
            
                    <div className="col-4">               
                        <label className='form-label'>Tipo do medicamento</label>  <br/>
                        <select onChange={handleTipoMedicamento} className="form-control" name="tipoMedicamento" id="tipoMedicamento">
                            <option value="medicamentoControlado">Medicamento controlado</option>
                            <option value="medicamentoComum">Medicamento comum</option>
                        </select> <br/>
                   </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <label className='form-label'>Descrição do medicamento</label>  <br/>
                    <textarea onChange={handleDescricaoMedicamento} className="form-control " name="descricaoMedicamento" id="descricaoMedicamento" cols="30" rows="10" placeholder="Digite a descrição do medicamento"></textarea> <br/>
                    </div>
                
            </div>
            <div className="row">

                <button className='btn btn-secondary col-2 m-2' onClick={handleCadastrar} type="submit">Cadastrar</button>
            
            </div>
            </form>
        </div>
    )

}

export default CadastroMedicamento