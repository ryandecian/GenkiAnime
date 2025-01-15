import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./PageScienceFictionPC.css";

import { useState } from "react";
import { dataPageScienceFiction } from "../../../../datas/DataCategoryGenre/DataPageScienceFiction/dataPageScienceFiction";
import DescriptionScienceFictionRoot from "../DescriptionScienceFictionRoot";

function PageScienceFictionPC() {
  const [dataAnimeScienceFiction, setDataAnimeScienceFiction] = useState(
    dataPageScienceFiction,
  );
  const [count, setCount] = useState(1);

  const DataAnimeScienceFictionPCAPI = () => {
    fetch(`https://api.jikan.moe/v4/anime?genres=24&page=${count}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const nouvelAnime = data.data;
          setDataAnimeScienceFiction((prevData) => [
            ...prevData,
            ...nouvelAnime,
          ]); // Concatène correctement
        } else {
          console.error("Données incorrectes reçues depuis l'API :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
    setCount((prevCount) => prevCount + 1);
  };

  const ButtonAnimeScienceFictionPC = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeScienceFictionPCAPI();
    }
  };

  return (
    <div className="PageScienceFictionPC">
      <DescriptionScienceFictionRoot />
      <section className={style.ContainerRootCardAnimeHomePC}>
        {dataAnimeScienceFiction.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              genre={
                anime.genres?.find((g) => g.mal_id === 24)?.name || "Inconnu"
              }
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
            ButtonAnimeScienceFictionPC();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default PageScienceFictionPC;
