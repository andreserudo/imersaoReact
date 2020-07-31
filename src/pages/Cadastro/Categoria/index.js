import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(infoDoEvento) {
    
    setValor(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value,
    );
  }

  // ============

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);


  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);
        
      }}
      >
        <FormField
          label="Nome "
          type="text"
          value={valores.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Descricao "
          type="textarea"
          value={valores.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor "
          type="color"
          value={valores.cor}
          name="nome"
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>

        <ul>
          {
            categorias.map((categoria, indice) => (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            ))
          }
        </ul>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
