import styles from '../Header/Header.module.css'
import { useState,useEffect } from 'react';



const Header = () => {
    const [isAtTop, setIsAtTop] = useState(true);
  
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [])

  return (
    <div className={isAtTop ? styles.header : styles.header_desplegable  }>
      <ul>
        <li ><a href="#home">Home</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </div>
  )
}

export default Header