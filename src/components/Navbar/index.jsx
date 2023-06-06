/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import styles from "./Navbar.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import classNames from "classnames";

import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Busca from "components/busca";

const iconeProps = {
  color: "white",
  size: 24,
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate("/")} />

      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === "/",
            })}
          >
            Pagina inicial
          </Link>
        </div>
      </div>

      <div className={styles.busca}>
        <Busca />
      </div>

      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === "/carrinho" ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
