import styles from '../Home/Home.module.css'

export const Home = () => {



  return (
    <>
      <section className={styles.home} id='home'>
        <div className={styles.box_info}>
          <h2 className={styles.presentacion}>Lucas Astesiano Full stack developer</h2>
          <div className={styles.logos}>
            <a href="https://github.com/LucasAstesiano" target="_blank" rel="noreferrer" ><img src="github (1).png" alt="logo" /></a>
            <a href="https://www.linkedin.com/in/lucas-astesiano/" target="_blank" rel="noreferrer"  ><img src="linkedin (1).png" alt="logo" /></a>
          </div>
        </div>
        <div className={styles.box_info} >
          <div className={styles.perfil}>
            <img src="perfil05.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <div className={styles.subtitulo}>
          <h2 id='skills'>Habilidades Principales</h2>
        </div>
        <div className={styles.skills_list}>
          <div className={styles.skill}>React</div>
          <div className={styles.skill}>Java Script</div>
          <div className={styles.skill}> HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>Java</div>
          <div className={styles.skill}>SQL</div>
          <div className={styles.skill}>Type Script</div>
          <div className={styles.skill} >Bash</div>
        </div>
      </section>
      <section className={styles.proyectos}>
        <div className={styles.subtitulo}>
          <h2 id='proyectos'>Proyectos</h2>
        </div>
        <section className={styles.section_proyectos}>
          <div className={styles.box}>
            <a href="https://lucasastesiano.github.io/Sp-Deploy/" target="_blank" className={styles.box} rel="noreferrer">
              <div className={styles.box_img}>
                <img src="Captura de pantalla 2024-05-16 132150.png" alt="imagen" />
              </div>
              <div>
                <h3>Shuffle Poet</h3>
                <p>Pagina para mezclar poemas y obtener inspiracion de los resultados para crear nuevos.</p>
              </div>
            </a>
          </div>
          <div className={styles.box}>
            <a href="https://lucasastesiano.github.io/Sp-Deploy/" className={styles.box}>
              <div className={styles.box_img}>
                <img src="Captura de pantalla 2024-05-16 135128.png" alt="imagen" />
              </div>
              <div>
                <h3>DH Ecomerce</h3>
                <p>Tienda vitual de productos con carrito,seccion de compras y un amplio repertorio de opciones</p>
              </div>
            </a>
          </div>
          <div className={styles.box}>
            <a href="https://lucasastesiano.github.io/Sp-Deploy/" className={styles.box}>
              <div className={styles.box_img}>
                <img src="Captura de pantalla 2024-05-17 142220.png" alt="imagen" />
              </div>
              <div>
                <h3>World Rent Car</h3>
                <p>Servivio de alquiler de vehiculos con registro de usuarios, reservas y productos favoritos</p>
              </div>
            </a>
          </div>
          <div className={styles.box}>
            <a href="https://lucasastesiano.github.io/Sp-Deploy/" className={styles.box}>
              <div className={styles.box_img}>
                <img src="flyer-construccion.jpg" alt="imagen" />
              </div>
              <div>
                <h3>Proyecto 4</h3>
                <p>Tienda vitual de productos con carrito,seccion de compras y un amplio repertorio de opciones</p>
              </div>
            </a>
          </div>
        </section>
      </section>
      <section >
        <div className={styles.subtitulo}>
          <h2>Contacto</h2>
        </div>
        <div className={styles.contacto}>
          <div className={styles.lista}>
            <h2 id='contacto'>Contactame</h2>
            <ul>
              <a href="https://api.whatsapp.com/message/YIAMTOCYY6QGE1?autoload=1&app_absent=0" target="_blank" rel="noreferrer">
                <li>
                  <img src="whatsapp.png" alt="" />
                  <span className={styles.app_contacto}>Whatsapp</span> 2612494435
                </li>
              </a>
              <a  href="mailto:lucasagustinastesiano@gmail.com?subject= &body=Cuerpo del mensaje">
              <li>
                <img src="gmail.png" alt="" />
                <span className={styles.app_contacto}>Mail</span> lucasagustinastesiano@gmail.com
              </li>
              </a>
              <a href="https://www.linkedin.com/in/lucas-astesiano/" target='_blank' rel="noreferrer">
                <li>
                  <img src="linkedin (1).png" alt="" />
                  <span className={styles.app_contacto}>Linkedin</span> www.linkedin.com/in/lucas-astesiano/
                </li>
              </a>
            </ul>
          </div>
          <div className={styles.saludo}>
            <img src="logoLA.jpeg" alt="" />
            <h2>Gracias por visitar mi pagina. <br /> Espero tu mensaje.</h2>
          </div>
        </div>
      </section>
    </>
  )
}
