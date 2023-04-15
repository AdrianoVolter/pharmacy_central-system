import { useState, useEffect } from 'react'

function ListaMedicamento() {
    //const [medicamentos, setMedicamentos] = useState([])
    const [texto, setTexto] = useState("")
    useEffect(() => {
        console.log(texto)
    }, [texto])


    const medicamentos = [
        {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 1",
            "marca": "Marca A",
            "preco": 10.99,
            "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
          },
          {
            "imagem": "src/assets/garrafa-e-caixa-de-medicamentos-700-93492520.jpg",
            "nome": "Medicamento 2",
            "marca": "Marca B",
            "preco": 15.99,
            "texto": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sit amet aliquam luctus, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet nisl."
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

    const mostrarTexto = (e) => {
        setTexto(e.target.textContent)
    }

    

    const modal = (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        ...{texto}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )

        

    return (
        <div className="col-10 container-fluid d-grid p-3">
            <h4>Lista de Medicamentos</h4>
            <div className="row">
                {medicamentos.map((medicamento) => (
                    <div className="col-3">
                        <div className="card p-2 m-2"  onClick={mostrarTexto}

                          >
                            <img src={medicamento.imagem} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{medicamento.nome}</h5>
                                <p className="card-text">{medicamento.marca}</p>
                                <p className="card-text">R$ {medicamento.preco}</p>
                                {/* <a href="#" className="btn btn-primary">Comprar</a> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ListaMedicamento