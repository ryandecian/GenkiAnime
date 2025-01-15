import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageSupernatural.css";
import PageSupernaturalRoot from "../../../components/CategoryGenreMainRoot/PageSupernaturalRoot/PageSupernaturalRoot";

function PageSupernatural() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageSupernatural">
        <PageSupernaturalRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageSupernatural;
