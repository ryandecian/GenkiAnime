import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageAdventure.css";
import PageAdventureRoot from "../../../components/CategoryGenreMainRoot/PageAdventureRoot/PageAdventureRoot";

function PageAdventure() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageAdventure">
        <PageAdventureRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageAdventure;
