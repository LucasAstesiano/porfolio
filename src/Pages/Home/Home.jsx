import styles from "../Home/Home.module.css";

export const Home = () => {
  return (
    <>
      <section className={styles.home} id="home">
        <div className={styles.box_info}>
          <h2 className={styles.presentacion}>
            Lucas Astesiano Full stack developer
          </h2>
          <div className={styles.logos}>
            <a
              href="https://github.com/LucasAstesiano"
              target="_blank"
              rel="noreferrer"
            >
              <img src="github (1).png" alt="logo" />
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-astesiano/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="linkedin (1).png" alt="logo" />
            </a>
          </div>
        </div>
        <div className={styles.box_info}>
          <div className={styles.perfil}>
            <img src="perfil-porfolio.jpg" alt="logo" />
          </div>
        </div>
      </section>
      <section className={styles.skills}>
        <div className={styles.subtitulo}>
          <h2 id="skills">Habilidades Principales</h2>
        </div>
        <div className={styles.skills_list}>
          <div className={styles.skill}>
            <img src="/react_logo.webp" alt="React" />
            <h3>React</h3>
          </div>
          <div className={styles.skill}>
            <img src="/JavaScript-logo.png" alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>
          <div className={styles.skill}>
            <img src="/HTML5_logo.png" alt="HTML" />
            <h3>HTML</h3>
          </div>
          <div className={styles.skill}>
            <img src="/CSS3_logo.png" alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div className={styles.skill}>
            <img src="/java.svg" alt="Java" />
            <h3>Java</h3>
          </div>
          <div className={styles.skill}>
            <img src="/Sql_logo.png" alt="SQL" />
            <h3>SQL</h3>
          </div>
          <div className={styles.skill}>
            <img src="/typescript_logo.png" alt="TypeScript" />
            <h3>TypeScript</h3>
          </div>
          <div className={styles.skill}>
            <img src="/Git-logo.png" alt="Git" />
            <h3>Git</h3>
          </div>
          <div className={styles.skill}>
            <img src="/mongodb_logo.webp" alt="MongoDb" />
            <h3>MongoDb</h3>
          </div>
          <div className={styles.skill}>
            <img src="/next-logo.png" alt="Next.js" />
            <h3>Next.js</h3>
          </div>
          <div className={styles.skill}>
            <img src="/MySQL-Logo.png" alt="mysql" />
            <h3>MySql</h3>
          </div>
          <div className={styles.skill}>
            <img src="/github-logo.png" alt="github" />
            <h3>Github</h3>
          </div>
          <div className={styles.skill}>
            <img src="/Tailwind_CSS_Logo.svg.png" alt="tailwind" />
            <h3>Tailwind</h3>
          </div>
        </div>
      </section>
      <section className={styles.proyectos}>
        <div className={styles.subtitulo}>
          <h2 id="proyectos">Proyectos</h2>
        </div>
        <section className={styles.section_proyectos}>
          <div className={styles.box}>
            <a className={styles.box}>
              <div className={styles.box_img}>
                <iframe
                  width="679"
                  height="383"
                  src="https://www.youtube.com/embed/zop7iWFqDew"
                  title="Hi Visit"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h3>HI VISIT</h3>
                <p>Sistema de gestion de visita para barrios privados</p>
              </div>
            </a>
          </div>
          <div className={styles.box}>
            <a className={styles.box} rel="noreferrer">
              <div className={styles.box_img}>
                {/*<img src="Captura de pantalla 2024-05-16 132150.png" alt="imagen" />*/}
                <iframe
                  width="679"
                  height="383"
                  src="https://www.youtube.com/embed/H9evzW9wUCc"
                  title="Shuffle Poet"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h3>Shuffle Poet</h3>
                <p>
                  Pagina para mezclar poemas y obtener inspiracion de los
                  resultados para crear nuevos.
                </p>
              </div>
            </a>
          </div>
          <div className={styles.box}>
            <a className={styles.box}>
              <div className={styles.box_img}>
                {/*<img src="Captura de pantalla 2024-05-16 135128.png" alt="imagen" />*/}
                <iframe
                  width="679"
                  height="383"
                  src="https://www.youtube.com/embed/SIfyrYRxBys"
                  title="DH   Ecommerce  Lucas Astesiano"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h3>DH Ecomerce</h3>
                <p>
                  Tienda vitual de productos con carrito,seccion de compras y un
                  amplio repertorio de opciones
                </p>
              </div>
            </a>
          </div>
          <div className={styles.box}>
            <a className={styles.box}>
              <div className={styles.box_img}>
                {/* <img src="Captura de pantalla 2024-05-17 142220.png" alt="imagen" /> */}
                <iframe
                  width="679"
                  height="383"
                  src="https://www.youtube.com/embed/WZDL3Z7ZFoM"
                  title="World Rent Car"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h3>World Rent Car</h3>
                <p>
                  Servivio de alquiler de vehiculos con registro de usuarios,
                  reservas y productos favoritos
                </p>
              </div>
            </a>
          </div>
        </section>
      </section>
      <section>
        <div className={styles.subtitulo}>
          <h2>Contacto</h2>
        </div>
        <div className={styles.contacto}>
          <div className={styles.lista}>
            <h2 id="contacto">Contactame</h2>
            <ul>
              <a
                href="https://wa.me/+5492612494435"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <img src="whatsapp.png" alt="" />
                  <span className={styles.app_contacto}>Whatsapp</span>{" "}
                  2612494435
                </li>
              </a>
              <a href="mailto:lucasagustinastesiano@gmail.com?subject= &body=Cuerpo del mensaje">
                <li>
                  <img src="gmail.png" alt="" />
                  <span className={styles.app_contacto}>Mail</span>{" "}
                  lucasagustinastesiano@gmail.com
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-astesiano/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <img src="linkedin (1).png" alt="" />
                  <span className={styles.app_contacto}>Linkedin</span>{" "}
                  www.linkedin.com/in/lucas-astesiano/
                </li>
              </a>
            </ul>
          </div>
          <div className={styles.saludo}>
            <img src="4.png" alt="logo" />
            <h2>
              Gracias por visitar mi pagina. <br /> Espero tu mensaje.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};
