import "./NavPC.css";
import { Link } from "react-router-dom";
import Drapeau from "../DrapeauRoot";
import styles from "../DrapeauRoot.module.css";
import Search from "../Search";

//Import des images
import Logo from "../../../assets/images/GenkiAnimeLogo.webp";

function NavPC() {
  return (
    <div className="nav-desktop">
      <div className="ContainerPC-1">
        <div className="Logo">
          <Link to="/home">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="MenuPC Recommendation">
          <Link to="/home/recommendation">Recommendation</Link>
        </div>
        <div className="MenuPC Genre">
          <Link to="/genre">Genre</Link>
        </div>

        <div className="Container-Search-PC">
          <Search />
        </div>

        <Drapeau
          moduleContainerDrapeau={styles.ContainerDrapeauPC}
          moduleLanguageFR={styles.LanguageFRPC}
          moduleLanguageEN={styles.LanguageENPC}
          moduleImgDrapeau={styles.ImgDrapeauPC}
        />
      </div>

      <div className="ContainerPC-2">
        <h2 className={styles.Sacha}>Bienvenue chez GenkiAnime</h2>
      </div>
    </div>
  );
}

export default NavPC;
