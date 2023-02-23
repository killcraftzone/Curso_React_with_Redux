import React from "react"

export default function Parametro(props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    // E possivel processar um componente antes de 
    // rederizar o codigo, mais nao e possivel alterar as propriedades por serem leitura.
    const notaInt = Math.ceil(props.nota)

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno}</strong> tem nota {props.nota} e foi {status}!
            </p>
        </div>
    )
}
