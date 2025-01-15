import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./PageRomancePC.css";

import { useState } from "react";
import { dataPageRomance } from "../../../../datas/DataCategoryGenre/DataPageRomance/dataPageRomance";
import DescriptionRomanceRoot from "../DescriptionRomanceRoot";

function PageRomancePC() {
  const [dataAnimeRomance, setDataAnimeRomance] = useState(dataPageRomance);
  const [count, setCount] = useState(1);

  const DataAnimeRomancePCAPI = () => {
    fetch(`https://api.jikan.moe/v4/anime?genres=22&page=${count}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const nouvelAnime = data.data;
          setDataAnimeRomance((prevData) => [...prevData, ...nouvelAnime]); // Concatène correctement
        } else {
          console.error("Données incorrectes reçues depuis l'API :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
    setCount((prevCount) => prevCount + 1);
  };

  const ButtonAnimeRomancePC = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeRomancePCAPI();
    }
  };

  return (
    <div className="PageRomancePC">
      <DescriptionRomanceRoot />
      <section className={style.ContainerRootCardAnimeHomePC}>
        {dataAnimeRomance.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              genre={
                anime.genres?.find((g) => g.mal_id === 22)?.name || "Inconnu"
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
            ButtonAnimeRomancePC();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default PageRomancePC;
