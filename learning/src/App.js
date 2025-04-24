import { useState } from 'react'

const App = () => {
  const [ contador, setContador ] = useState(0)
  console.log('renderizando componentes do contador', contador)
  
  const aumentarUm = () => {
    console.log('aumentando valor', contador)
    setContador(contador + 1)
  }
  const diminuirUm = () => {
    console.log('diminuindo valor', contador)
    setContador(contador - 1)
  }
  const zerarContador = () => {
    console.log('zerando valor', contador)
    setContador(0)
  }
  
  // Desestruturação
  const Exibir = ({contador}) => <div>{contador}</div>
  const Botao = ({onClick, texto}) => <button onClick={onClick}>{texto}</button>

  return (
    <div>
      <Exibir contador={contador}/>
      <Botao onClick={aumentarUm} texto='Mais+'/>
      <Botao onClick={zerarContador} texto='Zerar'/>
      <Botao onClick={diminuirUm} texto='Menos-'/>
    </div>  
  )
}

export default App