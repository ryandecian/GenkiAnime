import FooterRoot from "../components/FooterRoot/FooterRoot";
import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";
import NavRoot from "../components/NavRoot/NavRoot";
import "./Home.css";

function Home() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainHome">
        <HomeMainRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default Home;
