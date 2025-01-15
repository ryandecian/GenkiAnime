import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./PageShounenMobile.css";

import { useState } from "react";
import { dataPageShounen } from "../../../../datas/DataCategoryGenre/DataPageShounen/dataPageShounen";
import DescriptionShounenRoot from "../DescriptionShounenRoot";

function PageShounenMobile() {
  const [dataAnimeShounen, setDataAnimeShounen] = useState(dataPageShounen);
  const [count, setCount] = useState(1);

  const DataAnimeShounenMobileAPI = () => {
    fetch(`https://api.jikan.moe/v4/anime?genres=27&page=${count}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const nouvelAnime = data.data;
          setDataAnimeShounen((prevData) => [...prevData, ...nouvelAnime]);
        } else {
          console.error("Données incorrectes reçues depuis l'API :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
    setCount((prevCount) => prevCount + 1);
  };

  const ButtonAnimeShounenMobile = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeShounenMobileAPI();
    }
  };

  return (
    <div className="PageShounenMobile">
      <DescriptionShounenRoot />
      <section className={style.ContainerRootCardAnimeHomeMobile}>
        {dataAnimeShounen.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              /*Pour la props Genre. Il était possible de cibler la clé démographics ou était référencé mal_id === 42
              pour que le genre affiché soit Shounen mais l'API ne l'ayant pas référencé sur tout les animes, inconnu s'affichait souvent.
              J'ai donc préférer jouer sur le filtre fetch API qui me retoune bien des animes du genre Shounen mais je vais forcé
              l'affichage du genre Shounen grace au code ci-dessous. Le code qui devait être utilisé est le suivant : 

              genre={
                anime.démographics?.find((g) => g.mal_id === 42)?.name || "Inconnu"
              }
              Dans le composant Search type on aurait du rajouter le code suivant : 
              demographics: [
                {
                  mal_id: number,
                  name: string,
                }
              ],
              Enfin, dans le fichier dataPageShounen.ts on aurais du rajouter ce code : 
               demographics: [
                {
                  mal_id: 27,
                  name: "Shounen",
                }
              ],

              */
              genre={
                anime.genres?.find((g) => g.mal_id === 27)?.name || "Shounen"
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
            ButtonAnimeShounenMobile();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default PageShounenMobile;
