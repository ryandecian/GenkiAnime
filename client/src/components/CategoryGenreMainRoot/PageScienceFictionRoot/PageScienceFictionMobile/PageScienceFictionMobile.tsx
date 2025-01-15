import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./PageScienceFictionMobile.css";

import { useState } from "react";
import { dataPageScienceFiction } from "../../../../datas/DataCategoryGenre/DataPageScienceFiction/dataPageScienceFiction";
import DescriptionScienceFictionRoot from "../DescriptionScienceFictionRoot";

function PageScienceFictionMobile() {
  const [dataAnimeScienceFiction, setDataAnimeScienceFiction] = useState(
    dataPageScienceFiction,
  );
  const [count, setCount] = useState(1);

  const DataAnimeScienceFictionMobileAPI = () => {
    fetch(`https://api.jikan.moe/v4/anime?genres=24&page=${count}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const nouvelAnime = data.data;
          setDataAnimeScienceFiction((prevData) => [
            ...prevData,
            ...nouvelAnime,
          ]);
        } else {
          console.error("Données incorrectes reçues depuis l'API :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
    setCount((prevCount) => prevCount + 1);
  };

  const ButtonAnimeScienceFictionMobile = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeScienceFictionMobileAPI();
    }
  };

  return (
    <div className="PageScienceFictionMobile">
      <DescriptionScienceFictionRoot />
      <section className={style.ContainerRootCardAnimeHomeMobile}>
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
            ButtonAnimeScienceFictionMobile();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default PageScienceFictionMobile;
