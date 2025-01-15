import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageShoujo.css";
import PageShoujoRoot from "../../../components/CategoryGenreMainRoot/PageShoujoRoot/PageShoujoRoot";

function PageShoujo() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageShoujo">
        <PageShoujoRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageShoujo;
