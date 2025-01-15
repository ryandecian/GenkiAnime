import FooterRoot from "../components/FooterRoot/FooterRoot";
import NavRoot from "../components/NavRoot/NavRoot";
import "./PageRecommendation.css";
import PageRecommendationRoot from "../components/RecommandationRoot/RecommandationRoot";

function PageRecommendation() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageRecommendation">
        <PageRecommendationRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageRecommendation;
