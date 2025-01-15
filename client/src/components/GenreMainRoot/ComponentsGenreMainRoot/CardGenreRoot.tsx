import { Link } from "react-router-dom";

interface CardGenreRootProps {
  moduleContainerCardGenreRoot: string;
}

function CardGenreRoot(props: CardGenreRootProps) {
  const { moduleContainerCardGenreRoot } = props;
  return (
    <div className={moduleContainerCardGenreRoot}>
      <Link to="/home/genre/action">Action</Link>

      <Link to="/home/genre/adventure">Aventure</Link>

      <Link to="/home/genre/comedy">Comédie</Link>

      <Link to="/home/genre/drama">Drama</Link>

      <Link to="/home/genre/fantasy">Fantastique</Link>

      <Link to="/home/genre/music">Musique</Link>

      <Link to="/home/genre/romance">Romance</Link>

      <Link to="/home/genre/science-fiction">Science-Fiction</Link>

      <Link to="/home/genre/seinen">Seinen</Link>

      <Link to="/home/genre/shounen">Shônen</Link>

      <Link to="/home/genre/shoujo">Shôjo</Link>

      <Link to="/home/genre/sports">Sports</Link>

      <Link to="/home/genre/supernatural">Supernaturel</Link>

      <Link to="/home/genre/tranche-de-vie">Tranche-de-Vie</Link>
    </div>
  );
}

export default CardGenreRoot;

<div className="card">
  <div className="card-sup">
    <Link to="/genre/action">Action</Link>
  </div>
  <div className="blob blob--1" />
</div>;
