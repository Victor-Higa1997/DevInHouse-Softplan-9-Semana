
import { useState, useEffect } from 'react';
import './App.css';
import { Repositorio } from './components/data';
import { Resumo } from './components/data/Resumo';
import { mapToRepoObject } from './components/data/data-utils'


function App() {
  const lista_repositorios = [
    { id: '1', titulo: 'Back-end Developer', descricao: '- Dsenvolvedor Back-end, utilizando C#.', destacar: true },
    { id: '2', titulo: 'DBA', descricao: '- Criação de BD, utilizando o SQL Server. ', destacar: true }
  ]

  const [repositorios, setRepositorios] = useState(lista_repositorios)
  //const [idSelecionado, setIdSelecionado] = useState('2')

  const [nomeUsuario, setNomeUsuario] = useState('')

  const fecthDadosDoUsuario = () => {
    (async () => {
      try {
        /* const response = await fetch('https://api.github.com/users/victor-higa1997/repos') */
        const response = await fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        var res = await response.json()

        const resultadoMapeado = mapToRepoObject(res)

        setRepositorios(resultadoMapeado)
        console.log(resultadoMapeado)

        console.log(lista_repositorios)

      } catch (error) {
        console.log(error)
      }
    })()

  }

  useEffect(() => {
    fecthDadosDoUsuario()
  }, [])

  const handleNomeUsuario = nomeUsuario => {
    setNomeUsuario(nomeUsuario)
  }
  const handleBuscar = () => {
    fecthDadosDoUsuario()
  }

  return (
    <div className="App">

      <div className='container'>

        <section>
          <h1>{Date()}</h1>
          <hr></hr>
          <Resumo />

          <hr></hr>

          <input type="text" onChange={(event) => handleNomeUsuario(event.target.value)} />
          <input type='button' value='Consultar' onClick={(event) => handleBuscar()} />

          {
            repositorios.length === 0 ? (<p>Nenhum Repositório Disponivel</p>)
              :
              (repositorios.map((array) => (
                <Repositorio titulo={array.titulo} descricao={array.descricao} />
              )))

            /* (repositorios.map((array) => (
              <Repositorio destacar={array.id === idSelecionado} titulo={array.titulo} descricao={array.descricao} />
            ))) */

          }
        </section>

      </div>

    </div>
  );
}

export default App;
