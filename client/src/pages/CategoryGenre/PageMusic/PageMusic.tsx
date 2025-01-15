import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageMusic.css";
import PageMusicRoot from "../../../components/CategoryGenreMainRoot/PageMusicRoot/PageMusicRoot";

function PageMusic() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageMusic">
        <PageMusicRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageMusic;
