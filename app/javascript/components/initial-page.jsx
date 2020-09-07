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
            <li>Categorias</li>
            <li>Banca</li>
            <li>Indicados</li>
            <li>Conquistas</li>
            <li>Atividades</li>
            <li>Favoritos</li>
            <li>Meus e-books</li>
          </ul>
        </div>
      </nav>
      <main className="Indexwrapper">
        <div className="IndexBanner">
          <img
            src={logoLeitura}
            className="logoLeitura"
            alt="A leitura aproima"
          />
          <span>
            Compartilhe seus livros preferidos com os leitores da Árvore!
          </span>
          <span> ></span>
        </div>

        <section className="Destaques">
          <h2>Destaques</h2>
          <div className="ListInlineContainer">
            {numbers.map((number) => (
              <div>
                <img
                  src={require(`../../assets/images/destaques/capa${number}.jpg`)}
                  alt="Capa do livro"
                />
              </div>
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

        <section className="Colecoes">
          <h2>Coleções</h2>
          <div className="ListInlineContainer">{listCollectinons}</div>
        </section>
      </main>
    </div>
  );
}

export default InitialPage;
