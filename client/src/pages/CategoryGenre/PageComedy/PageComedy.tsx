import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageComedy.css";
import PageComedyRoot from "../../../components/CategoryGenreMainRoot/PageComedyRoot/PageComedyRoot";

function PageComedy() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageComedy">
        <PageComedyRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageComedy;
