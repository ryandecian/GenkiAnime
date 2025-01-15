import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../../../contexts/SearchContext";
import ComponentCardAnimeMainRoot from "../ComponentsCardAnimeMainRoot/ComponentCardAnimeMainRoot";
import style from "../ComponentsCardAnimeMainRoot/ComponentsCardAnimeMainRoot.module.css";
import "./CardAnimeMainPC.css";

function CardAnimeMainPC() {
  const { id } = useParams();
  const animeIdPC = Number(id);
  const { animeSearch } = useSearch();
  const [animeDetailsPC, setAnimeDetailsPC] = useState(null);

  useEffect(() => {
    if (!animeSearch || animeSearch.length === 0) {
      fetch(`https://api.jikan.moe/v4/anime/${animeIdPC}`)
        .then((response) => response.json())
        .then((data) => {
          setAnimeDetailsPC(data.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des détails :", error);
        });
    }
  }, [animeIdPC, animeSearch]);

  /*Si animeSearch n'est pas null alors utilise find.

        find va rechercher dans animeSearch si la clé mal_id est === à l'id de l'URL.

        parseInt(id) permet de convertir l'id récupéré dans l'URL en un nombre entier pour 
        effectuuer la comparaison.*/
  const anime =
    animeSearch?.find((e) => e.mal_id === animeIdPC) || animeDetailsPC;

  /*Si les données ne sont pas disponible, afficher un message d'attente*/
  if (!anime) {
    return <p className="ChargementPC">Chargement...</p>;
  }

  return (
    <section className="CardAnimeMainPC">
      <ComponentCardAnimeMainRoot
        title={anime.title || "Sans titre"}
        src={anime.images?.jpg?.large_image_url}
        genre={anime.genres?.[0]?.name || "Inconnu"}
        yearStart={anime.aired?.prop?.from?.year || "Inconnu"}
        yearEnd={anime.aired?.prop?.to?.year || "En cours"}
        synopsis={anime?.synopsis}
        // Données des classes liées au module CardAnimeHomeMainRoot.module.css
        moduleContainerCardAnime={style.ContainerCardAnimePC}
        moduleCardAnimeImg={style.CardAnimeImgPC}
        moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoPC}
        moduleTitleAnime={style.TitleAnimePC}
        moduleGenreAnime={style.GenreAnimePC}
        moduleYearAnime={style.YearAnimePC}
        moduleSynopsisAnime={style.SynopsisAnimePC}
        moduleChildren1CardAnimeInfo={style.Children1CardAnimeInfoPC}
        moduleChildren2CardAnimeInfo={style.Children2CardAnimeInfoPC}
        moduleIDCardAnime={style.IDCardAnimePC}
      />
    </section>
  );
}

export default CardAnimeMainPC;
