import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./RecommandationPC.css";

import { useState } from "react";
import { dataPageRecommendation } from "../../../datas/DataHome/dataPageRecommendation";
import DescriptionRecommendationRoot from "../DescriptionRecommendationRoot";

function RecommendationPC() {
  const [dataAnimeRecommendation, setDataAnimeRecommendation] = useState(
    dataPageRecommendation,
  );

  const DataAnimeRecommendationPCAPI = () => {
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

  const ButtonAnimeRecommendationPC = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeRecommendationPCAPI();
    }
  };

  return (
    <div className="PageRecommendationPC">
      <DescriptionRecommendationRoot />
      <section className={style.ContainerRootCardAnimeHomePC}>
        {dataAnimeRecommendation.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              genre={anime.genres?.[0]?.name || "Inconnu"}
              yearStart={anime.aired?.prop?.from?.year || "Inconnu"}
              yearEnd={anime.aired?.prop?.to?.year || "En cours"}
              title={anime.title || "Sans titre"}
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
          className="ButtonCardAnimeHomePC"
          type="button"
          onClick={() => {
            ButtonAnimeRecommendationPC();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default RecommendationPC;
