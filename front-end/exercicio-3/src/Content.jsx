import React, {Component} from "react";
import "./App.css"

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const newArray = conteudos.map((item) => ({
  'O conteúdo é': item.conteudo,
  'Status': item.status,
  'Bloco': item.bloco
}));

class Content extends Component {
  render() {
    console.log(newArray.map((item) => Object.entries(item)));
    return (
      conteudos.map((item) => {
        return (
          <li className="item">
            <span className="item-content">O conteúdo é: {item.conteudo}</span>
            <span className="item-content">Status: {item.status}</span>
            <span className="item-content">Bloco: {item.bloco}</span>
          </li>
        )
      })
    );
  }
}

export default Content;
