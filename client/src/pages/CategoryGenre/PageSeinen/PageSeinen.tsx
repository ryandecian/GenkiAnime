import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageSeinen.css";
import PageSeinenRoot from "../../../components/CategoryGenreMainRoot/PageSeinenRoot/PageSeinenRoot";

function PageSeinen() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageSeinen">
        <PageSeinenRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageSeinen;
