import React, { useState } from "react";
import Input from "./components/Input";
import Botao from "./components/Botao";
import "./index.css";

function App() {
  const [item, setItem] = useState("");
  const [preco, setPreco] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim() === "" || preco.trim() === "") return;

    // aceita vírgula ou ponto como separador decimal
    const precoNumero = parseFloat(preco.replace(",", "."));
    if (isNaN(precoNumero)) return;

    const novoItem = { nome: item.trim(), preco: precoNumero };
    setLista((prev) => [...prev, novoItem]);
    setItem("");
    setPreco("");
  };

  const removerItem = (index) => {
    setLista((prev) => prev.filter((_, i) => i !== index));
  };

  const total = lista.reduce((acc, curr) => acc + curr.preco, 0);

  return (
    <div className="app-container" style={{ textAlign: "left" }}>
      <h1>🛒 Lista de Compras</h1>

      <div className="form-row">
        <div className="inputs" style={{ flex: 1 }}>
          <Input
            placeholder="Nome do item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <Input
            placeholder="Preço (ex: 12.50 ou 12,50)"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>

        <Botao onClick={adicionarItem}>Adicionar</Botao>
      </div>

      <ul className="list">
        {lista.map((it, index) => (
          <li key={index} className="list-item">
            <div className="item-left">
              <div style={{ fontWeight: 600 }}>{it.nome}</div>
              <div>R$ {it.preco.toFixed(2)}</div>
            </div>

            <div>
              <Botao onClick={() => removerItem(index)}>Remover</Botao>
            </div>
          </li>
        ))}
      </ul>

      <div className="total">Total: R$ {total.toFixed(2)}</div>
    </div>
  );
}

export default App;
