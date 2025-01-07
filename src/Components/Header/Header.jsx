import styles from "../Header/Header.module.css";
import { useState, useEffect } from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isFocus, setIsFocus] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsAtTop(scrollTop === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsFocus(true);
  };
  const handleMouseOut = () => {
    setIsFocus(false);
  };

  return (
    <div className={isAtTop ? styles.header : styles.header_desplegable}>
      <div className={styles.saludo}>
        <h3>¡Bienvenido!</h3>
        <h3>¡Welcome!</h3>
        <h3>¡Bem-vindo!</h3>
      </div>
      <div className={styles.nav}>
        <ul onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut}>
          <li>
            <a href="#home">
              {isFocus ? (
                "Home"
              ) : !isAtTop ? (
                <FontAwesomeIcon icon={faHome} />
              ) : (
                "Home"
              )}
            </a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
