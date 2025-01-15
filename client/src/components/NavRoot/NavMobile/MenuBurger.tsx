import "./MenuBurger.css";
import { Link } from "react-router-dom";

function MenuBurger() {
  return (
    <ul className="menu">
      <li>
        <Link to="/home">Accueil</Link>
      </li>
      <li>
        <Link to="/home/recommendation">Recommendation</Link>
      </li>
      <li>
        <Link to="/genre">Genre</Link>
      </li>
    </ul>
  );
}

export default MenuBurger;
