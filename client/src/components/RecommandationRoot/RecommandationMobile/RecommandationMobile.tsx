import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./RecommandationMobile.css";

import { useState } from "react";
import { dataPageRecommendation } from "../../../datas/DataHome/dataPageRecommendation";
import DescriptionRecommendationRoot from "../DescriptionRecommendationRoot";

function RecommendationMobile() {
  const [dataAnimeRecommendation, setDataAnimeRecommendation] = useState(
    dataPageRecommendation,
  );

  const DataAnimeRecommendationMobileAPI = () => {
    fetch("https://api.jikan.moe/v4/random/anime")
      .then((response) => response.json())
      .then((data) => {
        setDataAnimeRecommendation((ancienDonnee) => [
          ...ancienDonnee,
          data.data,
        ]);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  };

  const ButtonAnimeRecommendationMobile = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeRecommendationMobileAPI();
    }
  };

  return (
    <div className="PageRecommendationMobile">
      <DescriptionRecommendationRoot />
      <section className={style.ContainerRootCardAnimeHomeMobile}>
        {dataAnimeRecommendation.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              genre={
                anime.genres?.find((g) => g.mal_id === 2)?.name || "Inconnu"
              }
              yearStart={anime.aired?.prop?.from?.year || "Inconnu"}
              yearEnd={anime.aired?.prop?.to?.year || "En cours"}
              title={anime.title || "Sans titre"}
              moduleContainerCardAnimeHome={style.ContainerCardAnimeHomeMobile}
              moduleCardAnimeHomeImg={style.CardAnimeHomeImgMobile}
              moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoMobile}
              moduleTitleAnimeHome={style.TitleAnimeHomeMobile}
              moduleGenreAnimeHome={style.GenreAnimeHomeMobile}
              moduleYearAnimeHome={style.YearAnimeHomeMobile}
            />
          </Link>
        ))}
      </section>

      <div>
        <button
          className="ButtonCardAnimeHomeMobile"
          type="button"
          onClick={() => {
            ButtonAnimeRecommendationMobile();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default RecommendationMobile;
