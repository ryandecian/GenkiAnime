import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageDrama.css";
import PageDramaRoot from "../../../components/CategoryGenreMainRoot/PageDramaRoot/PageDramaRoot";

function PageDrama() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageDrama">
        <PageDramaRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageDrama;
