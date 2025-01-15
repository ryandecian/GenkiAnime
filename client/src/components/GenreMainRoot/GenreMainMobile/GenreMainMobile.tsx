import "./GenreMainMobile.css";
import CardGenreRoot from "../ComponentsGenreMainRoot/CardGenreRoot";
import style from "../ComponentsGenreMainRoot/CardGenreRoot.module.css";

function GenreMainMobile() {
  return (
    <section className="GenreMainMobile">
      <div className="DescriptionGenreMobile">
        <h3>Quel genre d'aventure animée vous attire aujourd'hui ?</h3>
      </div>

      <CardGenreRoot moduleContainerCardGenreRoot={style.CardGenreMobile} />
    </section>
  );
}

export default GenreMainMobile;
