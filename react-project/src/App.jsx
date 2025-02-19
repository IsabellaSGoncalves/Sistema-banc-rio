import { useState } from 'react'
import './App.css'

function Banco() {
  const [bancoNome, setBanconome] = useState('')
  const [agenciaNome, setAgencianome] = useState('')
  const [numeroBanco, setNumerobanco] = useState('')
  const [numeroAgencia, setNumeroagencia] = useState('')
  const [saldo, setSaldo] = useState(0)
  const [tipo, setTipo] = useState('')
  const [conta, setConta] = useState(null)
  const [valor, setValor] = useState('')
  const [containerBanco, setContainerBanco] = useState(true)
  const [informacaoConta, setInformacaoConta] = useState(null)
  const [mostrarDeb, setMostrarDeb] = useState(false)
  const [mostrarCredito, setMostrarCredito] = useState(false)

  const abrirConta = (e) => {
    e.preventDefault()
    const novaConta = {
      tipo,
      saldo,
      agencia: { agenciaNome, numeroAgencia },
      banco: { bancoNome, numeroBanco }
    }
    setConta(novaConta)
    setContainerBanco(false)
    alert('Conta criada!')
  }

  const encerrarConta = () => {
    if (conta && conta.saldo < 0) {
      const contaEncerrada = { ...conta, tipo: 4 }
      setConta(contaEncerrada)
      setContainerBanco(false)
      return contaEncerrada
    }
    return null
  }

  const debitar = (valor) => {
    const valorDeb = parseFloat(valor)
    if (conta && conta.tipo !== 4) {
      const novaConta = { ...conta, saldo: conta.saldo - valorDeb }
      setConta(novaConta)
      setValor('')
      setMostrarDeb(false)
      alert('Débito realizado com sucesso!')
      return novaConta
    }
    if(conta.tipo == 4){
      alert("Sua conta está encerrada.")
    } else {
      alert('Valor inválido para crédito!')
    }

    return null
  }

  const creditar = (valor) => {
    const valorCred = parseFloat(valor)
    if (conta && conta.tipo !== 4) {
      const novaConta = { ...conta, saldo: conta.saldo + valorCred }
      setConta(novaConta)
      setValor('')
      setMostrarCredito(false)
      alert('Crédito realizado com sucesso!')
      return novaConta
    }
    if(conta.tipo == 4){
      alert("Sua conta está encerrada.")
    } else {
      alert('Valor inválido para crédito!')
    }
    return null
  }

  const consultarConta = () => {
    encerrarConta()
    if (conta) {
      setInformacaoConta(conta)
    }
  }


  return (
    <>
      {containerBanco ? (
        <div>
          <form onSubmit={abrirConta}>
            <h1>Criar conta</h1>
            <label>Nome da agência</label>
            <input type="text" name="agenciaName" id="agenciaName" value={agenciaNome} onChange={(e) => setAgencianome(e.target.value)} required />
            <label>Nome do banco</label>
            <input type="text" name="bancoName" id="bancoName" value={bancoNome} onChange={(e) => setBanconome(e.target.value)} required />
            <label>Número da agência</label>
            <input type="number" name="agenciaNumero" id="agenciaNumero" value={numeroAgencia} onChange={(e) => setNumeroagencia(e.target.value)} required />
            <label>Número do banco</label>
            <input type="number" name="bancoNumero" id="bancoNumero" value={numeroBanco} onChange={(e) => setNumerobanco(e.target.value)} required />
            <label>Tipo de conta</label>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
              <option value="">Selecione o tipo de conta</option>
              <option value="1">Conta Corrente</option>
              <option value="2">Conta Poupança</option>
              <option value="3">Conta Conjunta</option>
            </select>
            <button type="submit">Abrir Conta</button>
          </form>
        </div>
      ) : (
        <>
          <h1>Bem vindo!</h1>
          <ul>
            <li>
              <button onClick={() => { setMostrarDeb(true); setMostrarCredito(false) }}>Débito</button>
              {mostrarDeb && (
                <>
                  <input type="number" name="valor1" id="valor1" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor para debitar" required />
                  <button onClick={() => debitar(valor)}>Confirmar Débito</button>
                </>
              )}
            </li>
            <li>
              <button onClick={() => { setMostrarCredito(true); setMostrarDeb(false) }}>Creditar</button>
              {mostrarCredito && (
                <>
                  <input type="number" name="valor2" id="valor2" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Valor para Creditar" required />
                  <button onClick={() => creditar(valor)}>Confirmar Crédito</button>
                </>
              )}
            </li>
            <li><button onClick={consultarConta}>Consultar Conta</button></li>
          </ul>
          {informacaoConta && (
            <div>
              <h2>Informações da Conta:</h2>
              <p>Nome do banco: {informacaoConta.banco.bancoNome}</p>
              <p>Número do banco: {informacaoConta.banco.numeroBanco}</p>
              <p>Nome da agência: {informacaoConta.agencia.agenciaNome}</p>
              <p>Número da agência: {informacaoConta.agencia.numeroAgencia}</p>
              <p>Tipo da conta: {informacaoConta.tipo}</p>
              <p>Saldo: R${informacaoConta.saldo}</p>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Banco