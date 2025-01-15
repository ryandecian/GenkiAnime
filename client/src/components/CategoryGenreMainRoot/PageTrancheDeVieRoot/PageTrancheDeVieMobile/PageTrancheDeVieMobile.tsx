import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./PageTrancheDeVieMobile.css";

import { useState } from "react";
import { dataPageTrancheDeVie } from "../../../../datas/DataCategoryGenre/DataPageTrancheDeVie/dataPageTrancheDeVie";
import DescriptionTrancheDeVieRoot from "../DescriptionTrancheDeVieRoot";

function PageTrancheDeVieMobile() {
  const [dataAnimeTrancheDeVie, setDataAnimeTrancheDeVie] =
    useState(dataPageTrancheDeVie);
  const [count, setCount] = useState(1);

  const DataAnimeTrancheDeVieMobileAPI = () => {
    fetch(`https://api.jikan.moe/v4/anime?genres=36&page=${count}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const nouvelAnime = data.data;
          setDataAnimeTrancheDeVie((prevData) => [...prevData, ...nouvelAnime]);
        } else {
          console.error("Données incorrectes reçues depuis l'API :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
    setCount((prevCount) => prevCount + 1);
  };

  const ButtonAnimeTrancheDeVieMobile = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeTrancheDeVieMobileAPI();
    }
  };

  return (
    <div className="PageTrancheDeVieMobile">
      <DescriptionTrancheDeVieRoot />
      <section className={style.ContainerRootCardAnimeHomeMobile}>
        {dataAnimeTrancheDeVie.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              genre={
                anime.genres?.find((g) => g.mal_id === 36)?.name || "Inconnu"
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
            ButtonAnimeTrancheDeVieMobile();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default PageTrancheDeVieMobile;
