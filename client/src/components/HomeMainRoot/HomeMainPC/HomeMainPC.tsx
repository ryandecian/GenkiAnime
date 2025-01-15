import "./HomeMainPC.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../../contexts/SearchContext";
import { structureDataAnime } from "../../../datas/DataHome/structureDataAnime";
import CardAnimeHomeMainRoot from "../ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import DescriptionHomeMainRoot from "../ComponentsHomeMainRoot/DescriptionHomeMainRoot";

function HomeMainPC() {
  const { animeSearch } = useSearch();
  const [dataAnime, setDataAnime] = useState(structureDataAnime);

  const DataAnimePCAPI = () => {
    fetch("https://api.jikan.moe/v4/random/anime")
      .then((response) => response.json())
      .then((data) => {
        setDataAnime((ancienDonnee) => [...ancienDonnee, data.data]);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  };

  const ButtonCardAnimeHomePC = (nombreAppels = 10) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimePCAPI();
    }
  };

  return (
    <div className="HomeMainPC">
      <div className="ContainerResultSearchPC">
        {animeSearch && animeSearch.length > 0 ? (
          <Link to={`/anime/data/${animeSearch[0]?.mal_id}`}>
            <CardAnimeHomeMainRoot
              key={animeSearch[0]?.mal_id}
              src={animeSearch[0]?.images?.jpg?.large_image_url}
              genre={animeSearch[0]?.genres?.[0]?.name || "Inconnu"}
              yearStart={animeSearch[0]?.aired?.prop?.from?.year || "Inconnu"}
              yearEnd={animeSearch[0]?.aired?.prop?.to?.year || "En cours"}
              title={animeSearch[0]?.title || "Sans titre"}
              moduleContainerCardAnimeHome={style.ContainerCardAnimeHomeMobile}
              moduleCardAnimeHomeImg={style.CardAnimeHomeImgMobile}
              moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoMobile}
              moduleTitleAnimeHome={style.TitleAnimeHomeMobile}
              moduleGenreAnimeHome={style.GenreAnimeHomeMobile}
              moduleYearAnimeHome={style.YearAnimeHomeMobile}
            />
          </Link>
        ) : (
          <p className={style.NoResults}>Aucun résultat trouvé.</p>
        )}
      </div>
      <DescriptionHomeMainRoot />

      {/* La classe de cette section et Link sont liées au module CardAnimeHomeMainRoot.module.css */}
      <section className={style.ContainerRootCardAnimeHomePC}>
        {dataAnime.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              // Données de la card
              src={anime.images?.jpg?.large_image_url}
              genre={anime.genres[0]?.name || "Inconnu"}
              yearStart={anime.aired?.prop?.from?.year || "Inconnu"}
              yearEnd={anime.aired?.prop?.to?.year || "En cours"}
              title={anime.title || "Sans titre"}
              // Données des classes liées au module CardAnimeHomeMainRoot.module.css
              moduleContainerCardAnimeHome={style.ContainerCardAnimeHomePC}
              moduleCardAnimeHomeImg={style.CardAnimeHomeImgPC}
              moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoPC}
              moduleTitleAnimeHome={style.TitleAnimeHomePC}
              moduleGenreAnimeHome={style.GenreAnimeHomePC}
              moduleYearAnimeHome={style.YearAnimeHomePC}
            />
          </Link>
        ))}
      </section>

      <div>
        <button
          type="button"
          className="ButtonCardAnimeHomePC"
          onClick={() => {
            ButtonCardAnimeHomePC();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default HomeMainPC;
