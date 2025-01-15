import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageAction.css";
import PageActionRoot from "../../../components/CategoryGenreMainRoot/PageActionRoot/PageActionRoot";

function PageAction() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageAction">
        <PageActionRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageAction;
