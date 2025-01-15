import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageShounen.css";
import PageShounenRoot from "../../../components/CategoryGenreMainRoot/PageShounenRoot/PageShounenRoot";

function PageShounen() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageShounen">
        <PageShounenRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageShounen;
