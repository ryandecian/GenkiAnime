import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../../contexts/SearchContext";
import ComponentCardAnimeMainRoot from "../ComponentsCardAnimeMainRoot/ComponentCardAnimeMainRoot";
import style from "../ComponentsCardAnimeMainRoot/ComponentsCardAnimeMainRoot.module.css";
import "./CardAnimeMainMobile.css";

function CardAnimeMainMobile() {
  const { id } = useParams<{ id: string }>();
  const animeIdMobile = Number(id);
  const { animeSearch } = useSearch();
  const [animeDetailsMobile, setAnimeDetailsMobile] = useState(null);

  useEffect(() => {
    if (!animeSearch || animeSearch.length === 0) {
      fetch(`https://api.jikan.moe/v4/anime/${animeIdMobile}`)
        .then((response) => response.json())
        .then((data) => {
          setAnimeDetailsMobile(data.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails :", error);
        });
    }
  }, [animeIdMobile, animeSearch]);

  /*Si animeSearch n'est pas null alors utilise find.

        find va rechercher dans animeSearch si la clé mal_id est === à l'id de l'URL.

        parseInt(id) permet de convertir l'id récupéré dans l'URL en un nombre entier pour 
        effectuuer la comparaison.*/
  const anime =
    animeSearch?.find((e) => e.mal_id === animeIdMobile) || animeDetailsMobile;

  /*Si les données ne sont pas disponible, afficher un message d'attente*/
  if (!anime) {
    return <p className="ChargementMobile">Chargement...</p>;
  }

  return (
    <section className="CardAnimeMainMobile">
      <ComponentCardAnimeMainRoot
        title={anime.title || "Sans titre"}
        src={anime.images?.jpg?.large_image_url}
        genre={anime.genres?.[0]?.name || "Inconnu"}
        yearStart={anime.aired?.prop?.from?.year || "Inconnu"}
        yearEnd={anime.aired?.prop?.to?.year || "En cours"}
        synopsis={anime?.synopsis}
        // Données des classes liées au module CardAnimeHomeMainRoot.module.css
        moduleContainerCardAnime={style.ContainerCardAnimeMobile}
        moduleCardAnimeImg={style.CardAnimeImgMobile}
        moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoMobile}
        moduleTitleAnime={style.TitleAnimeMobile}
        moduleGenreAnime={style.GenreAnimeMobile}
        moduleYearAnime={style.YearAnimeMobile}
        moduleSynopsisAnime={style.SynopsisAnimeMobile}
        moduleChildren1CardAnimeInfo={style.Children1CardAnimeInfoMobile}
        moduleChildren2CardAnimeInfo={style.Children2CardAnimeInfoMobile}
        moduleIDCardAnime={style.IDCardAnimeMobile}
      />
    </section>
  );
}

export default CardAnimeMainMobile;
