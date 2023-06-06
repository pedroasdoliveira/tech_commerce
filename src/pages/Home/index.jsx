import React from "react";
import styles from "./Home.module.scss";
import relogio from "assets/inicial.png";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();

  const categorias = useSelector(state => state.categorias); //o hook pega todos os valores disponíveis no store 

  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={relogio}
        className={styles.header}
      />

      <div className={styles.categorias}>
        <div className={styles["categorias-title"]}>
          <h1>Categorias</h1>
        </div>
      </div>

      <div className={styles["categorias-container"]}>
        {categorias.map((categoria, index) => (
          <div key={index} onClick={() => navigate(`/categoria/${categoria.id}`)}>
            <img src={categoria.thumbnail} alt={categoria.nome} />
            <h1>{categoria.nome}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
