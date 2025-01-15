import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageSports.css";
import PageSportsRoot from "../../../components/CategoryGenreMainRoot/PageSportsRoot/PageSportsRoot";

function PageSports() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageSports">
        <PageSportsRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageSports;
