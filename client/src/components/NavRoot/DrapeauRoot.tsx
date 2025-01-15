import DrapeauEN from "../../assets/images/drapeau-anglais.png";
//Import des images
import DrapeauFR from "../../assets/images/drapeau-francais.png";

interface DrapeauProps {
  moduleContainerDrapeau: string;
  moduleLanguageFR: string;
  moduleLanguageEN: string;
  moduleImgDrapeau: string;
}

function Drapeau(props: DrapeauProps) {
  const {
    moduleContainerDrapeau,
    moduleLanguageFR,
    moduleLanguageEN,
    moduleImgDrapeau,
  } = props;
  return (
    <section className={moduleContainerDrapeau}>
      <div className={moduleLanguageFR}>
        <img
          src={DrapeauFR}
          alt="Langue français"
          className={moduleImgDrapeau}
        />
      </div>
      <div className={moduleLanguageEN}>
        <img
          src={DrapeauEN}
          alt="English language"
          className={moduleImgDrapeau}
        />
      </div>
    </section>
  );
}

export default Drapeau;
