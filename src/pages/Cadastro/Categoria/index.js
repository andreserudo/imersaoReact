import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais ={
    nome: '',
    descricao: '',
    cor: ''
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor){
    setValores({
      ...valores,
      [chave]: valor
    });
  }

  function handleChange(infoDoEvento){
    // setValores(e.target.value);
    setValor(
      infoDoEvento.target.getAttribute('name'),
      infoDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(infoEvento){
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          valores
        ]);

        console.log(categorias);
      }}>
        <FormField            
          label="Nome: "   
          type="text"
          value={valores.nome}              
          name="nome"
          onChange={handleChange}                           
        />

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={valores.descricao}           
              name="descricao"
              onChange={handleChange}                           
            />            
          </label>
        </div>

        <FormField            
          label="Cor: "   
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
            categorias.map((categoria, indice) => {
              return (
                <li key={`${categoria}${indice}`}>
                  {categoria.nome}
                </li>
              )
            })
          }
        </ul>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;