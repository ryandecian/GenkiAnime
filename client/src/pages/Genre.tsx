import FooterRoot from "../components/FooterRoot/FooterRoot";
import GenreMainRoot from "../components/GenreMainRoot/GenreMainRoot";
import NavRoot from "../components/NavRoot/NavRoot";
import "./Genre.css";

function Genre() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainGenre">
        <GenreMainRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default Genre;
