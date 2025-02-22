import { useState } from 'react'
import '../styles/App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import svg_pig from '../images/svg_pig.png'

function Banco() {
  const [nome, setNome] = useState('')
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
    if (isNaN(valor) || valor.trim() === '') { 
      alert("Insira um número!")
      return null
    }

    const valorDeb = parseFloat(valor)

    if (isNaN(valorDeb)) {
      alert("Insira um número válido!")
      return null
    }

    if (conta && conta.tipo !== 4 ) {
      if(valor == isNaN){
        return null
      }
      const novaConta = { ...conta, saldo: conta.saldo - valorDeb }
      setConta(novaConta)
      setValor('')
      setMostrarDeb(false)
      encerrarConta()
      alert('Débito realizado com sucesso!')
      setInformacaoConta(false)
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
    if (isNaN(valor) || valor.trim() === '') { 
      alert("Insira um número!")
      return null
    }
  
    const valorCred = parseFloat(valor)

    if (isNaN(valorCred)) {
      alert("Insira um número válido!")
      return null;
    }
    if (conta && conta.tipo !== 4) {
      encerrarConta()
      const novaConta = { ...conta, saldo: conta.saldo + valorCred }
      setConta(novaConta)
      setValor('')
      setMostrarCredito(false)
      setInformacaoConta(false)
      encerrarConta()
      if(novaConta.saldo > 0){
        alert('Crédito realizado com sucesso!')
        return novaConta
      }else{
        alert("Sua conta está encerrada.")
      }
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
        <div className="body-home">
          <Header />
          <div className='container-home'>
            <div className='grid-home'>
              <div>
            <h1>Sistema Bancário</h1>
            <h3>Facilite suas transações a qualquer hora, em qualquer lugar.</h3> 
            <div className='buttons-home'>
            <button id="btn-acc"><a href='#container-form'>Abrir Conta</a></button>
            <button id="btn-more"><a href='#footer'>Saiba mais</a></button>
            </div>
            </div>
            <div>
            <img src={svg_pig} alt="Imagem porco"></img>
            </div>
          </div>
            </div>
            <div id="container-form" className='container-form'>
          <form onSubmit={abrirConta} className='form-conta'>
            <h1>Criar conta</h1>
            <label>Nome</label>
            <input type="text" name="Name" id="Name" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <label>Nome da agência</label>
            <input type="text" name="agenciaName" id="agenciaName" value={agenciaNome} onChange={(e) => setAgencianome(e.target.value)} required />
            <label>Número da agência</label>
            <input type="number" name="agenciaNumero" id="agenciaNumero" value={numeroAgencia} onChange={(e) => setNumeroagencia(e.target.value)} required />
            <label>Nome do banco</label>
            <input type="text" name="bancoName" id="bancoName" value={bancoNome} onChange={(e) => setBanconome(e.target.value)} required />
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
          <Footer/>
        </div>
      ) : (
        <>
        <div className='body-conta'>
          <div className='body-btn-out'>
        <button id="btn-out"><a href=''>SAIR</a></button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="svg-conta" viewBox="0 0 1440 320"><path fill="#6b70db" fill-opacity="1" d="M0,192L40,181.3C80,171,160,149,240,117.3C320,85,400,43,480,74.7C560,107,640,213,720,256C800,299,880,277,960,245.3C1040,213,1120,171,1200,149.3C1280,128,1360,128,1400,128L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
          <div className='content-conta'>
          <h1>Bem vindo!, {nome}.</h1>
          <h2> Pronto para debitar, creditar ou consultar? Tudo ao seu alcance!</h2>
          <h3> Saldo disponível: {conta.saldo}</h3>
          </div>
          <div className='grid-conta'>
          <div className='body-actions'>
          <div className='actions-conta'>
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
          </div>
          </div>
          <div className='body-info'>
          {informacaoConta && (
            <div className='container-info'>
              <h2>Informações da Conta:</h2>
              <p>Nome do banco: {informacaoConta.banco.bancoNome}</p>
              <p>Número do banco: {informacaoConta.banco.numeroBanco}</p>
              <p>Nome da agência: {informacaoConta.agencia.agenciaNome}</p>
              <p>Número da agência: {informacaoConta.agencia.numeroAgencia}</p>
              <p>Tipo da conta: {informacaoConta.tipo}</p>
              <p>Saldo: R${informacaoConta.saldo}</p>
            </div>
          )}
          </div>
          </div>
          </div>
          <div><Footer/></div>
        </>
      )}
    </>
  )
}

export default Banco