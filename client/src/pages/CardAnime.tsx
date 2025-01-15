import CardAnimeMainRoot from "../components/CardAnimeMainRoot/CardAnimeMainRoot";
import FooterRoot from "../components/FooterRoot/FooterRoot";
import NavRoot from "../components/NavRoot/NavRoot";
import "./CardAnime.css";

function CardAnime() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainCardAnime">
        <CardAnimeMainRoot />
      </main>

      <FooterRoot />
    </>
  );
}
export default CardAnime;
