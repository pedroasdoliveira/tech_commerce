import React from "react";
import styles from "./Header.module.scss";
import TituloSemImagem from "./TituloSemImagem";
import TituloComImagem from "./TituloComImage";

const Header = ({ titulo, descricao, className = "", imagem }) => {
  return (
    <header className={styles.header}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao} />
      )}

      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      )}
    </header>
  );
};

export default Header;
