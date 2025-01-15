import "./GenreMainPC.css";
import CardGenreRoot from "../ComponentsGenreMainRoot/CardGenreRoot";
import style from "../ComponentsGenreMainRoot/CardGenreRoot.module.css";

function GenreMainPC() {
  return (
    <section className="GenreMainPC">
      <div className="DescriptionGenrePC">
        <h3>Quel genre d'aventure animée vous attire aujourd'hui ?</h3>
      </div>

      <CardGenreRoot moduleContainerCardGenreRoot={style.CardGenrePC} />
    </section>
  );
}

export default GenreMainPC;
