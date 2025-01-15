import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageTrancheDeVie.css";
import PageTrancheDeVieRoot from "../../../components/CategoryGenreMainRoot/PageTrancheDeVieRoot/PageTrancheDeVieRoot";

function PageTrancheDeVie() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageTrancheDeVie">
        <PageTrancheDeVieRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageTrancheDeVie;
