import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let number = number
  let nome = nome
  const [saldo, setSaldo] = useState(0)
  const agencia = {nome, number}
  const banco = {nome, number}
  let tipo = tipo 
  const [ conta, setConta ] = useState({
    tipo, 
    saldo,
    agencia, 
    banco
  }) 
  
  const abrirConta = (conta, saldo = 0) => {
    return {
      conta: conta,
      saldo: saldo
    }
    setConta(conta)
  }

  const encerrarConta = (conta, saldo ) => {
      if (saldo < 0){
        conta.tipo = 4
        return conta
      }
  }

  const depositar = (conta, valor) => {
    if (conta.tipo !== 4) {
      conta.saldo -= valor
      return conta
    }
    return null 
  }
  
  const creditar= () => {
    if (conta.tipo !== 4) {
      conta.saldo += valor
      return conta
    }
    return null 
  }

  const consultarConta= (conta) => {
    return conta;
  }
  
  return (
    <>
      <div>
        <form> 
        <input type="text" name="agenciaName" id="name" value={agencia.nome} required/>
        <input type="text" name="bancoName" id="name" value={banco.nome} required/>
        <input type="number" name="agenciaNumero" id="number" value={agencia.nome} required/>
        <input type="number" name="bancoNumero" id="number" value={banco.nome} required/>
        </form>
        <button onClick={abrirConta}>
          Abrir Conta
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
