import "./NavMobile.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drapeau from "../DrapeauRoot";
import styles from "../DrapeauRoot.module.css";
import Search from "../Search";
import MenuBurger from "./MenuBurger";

//Import des images

import Logo from "../../../assets/images/GenkiAnimeLogo.webp";

function NavMobile() {
  const [active, setActive] = useState(false);
  const funcActive = () => {
    setActive(!active);
  };

  return (
    <div className="nav-mobile">
      <section className="NavBarre">
        <div>
          <Link to="/home">
            <img src={Logo} alt="Logo" className="Logo" />
          </Link>
        </div>
        <Search />
      </section>

      <h1 id="Autor">GenkiAnime</h1>

      <div className={`sideNav ${active ? "active" : ""}`} id="mySideNav">
        <div>
          <button
            id="closeBtn"
            className="ButtonClose"
            type="button"
            onClick={funcActive}
          >
            x
          </button>
        </div>

        <MenuBurger />

        <Drapeau
          moduleContainerDrapeau={styles.ContainerDrapeauMobile}
          moduleLanguageFR={styles.LanguageFRMobile}
          moduleLanguageEN={styles.LanguageENMobile}
          moduleImgDrapeau={styles.ImgDrapeauMobile}
        />
      </div>

      <button id="openBtn" type="button" onClick={funcActive}>
        <span className="menuBurger">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}

export default NavMobile;
