import {useState} from "react"

function App(){

  const [nome,setNome] = useState('Ronaldo')

  const Formulario = (props) => {
    return (
      <div>
        <input
      placeholder= {props.sombra}
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"
      type="text" />
      <button
      onClick={()=>{(props.mensagem) ? alert(props.mensagem) : alert("TEXTO PADRÃO") }}
      className="botao">
      { (props.textobotao !=null) ? props.textobotao : "CLIQUE AQUI"}
      </button>
      </div>
    )
  }

  return(

    <div>
      <h3>pizzaria 2c</h3>
      <Formulario sombra = "Digite seu nome" textobotao = "ENVIAR NOME" />
      <Formulario sombra = "Digite seu email" textobotao = "ENVIAR EMAIL"/>
      <Formulario sombra = "(11) 9000-0000" textobotao = "ENVIAR NÚMERO"/>
      <Formulario mensagem = "Mensagem enviada pelo app."/>


    



    </div>
  )


}

export default App 