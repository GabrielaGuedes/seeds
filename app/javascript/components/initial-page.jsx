import React from "react";
import logoLeitura from "../../assets/images/logo-leitura-aproxima.png";
import "./initial-page.css";
import { Link } from "react-router-dom";

const numbers = [1, 2, 3, 4, 5, 6];

const colecoes = [
  "Luta feminista e direitos",
  "Amor-poesia e amizade",
  "Saúde financeira",
  "Cultura digital e tecnologia",
  "Histórias para se inspirar",
  "Respeitar para ser respeitado",
];

const listCollectinons = colecoes.map((colecao, index) => (
  <div>
    <img src={require(`../../assets/images/colecoes/capa${index}.JPG`)} />
    <p>{colecao}</p>
  </div>
));

const handleInitialClick = () => {
  window.location.href = "../";
};

function InitialPage() {
  return (
    <div className="Indexcontainer">
      <nav className="Navtop">
        <div className="Navwhite">
          <ul className="Navlist">
            <li onClick={handleInitialClick} style={{ cursor: "pointer" }}>
              Início
            </li>
          </ul>
        </div>
      </nav>
      <main className="Indexwrapper">
        <section className="Destaques">
          <h2>Destaques</h2>
          <div className="ListInlineContainer">
            {numbers.map((number) => (
              <Link to="/pequeno-principe" style={{ textDecoration: "none" }}>
                <img
                  src={require("../../assets/images/continuarlendo/capa6.jpg")}
                  alt="O pequeno príncipe"
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="ContinuarLendo">
          <h2>Continuar Lendo</h2>
          <div className="ContinuarContainer">
            <Link to="/pequeno-principe" style={{ textDecoration: "none" }}>
              <img
                src={require("../../assets/images/continuarlendo/capa6.jpg")}
                alt="O pequeno príncipe"
              />
              <p>O Pequeno Príncipe</p>
              <p>Antoine de Saint-Exupéry</p>
              <span>Livro</span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default InitialPage;
