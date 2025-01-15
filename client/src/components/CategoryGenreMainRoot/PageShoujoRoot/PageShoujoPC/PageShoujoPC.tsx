import { Link } from "react-router-dom";
import CardAnimeHomeMainRoot from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./PageShoujoPC.css";

import { useState } from "react";
import { dataPageShoujo } from "../../../../datas/DataCategoryGenre/DataPageShoujo/dataPageShoujo";
import DescriptionShoujoRoot from "../DescriptionShoujoRoot";

function PageShoujoPC() {
  const [dataAnimeShoujo, setDataAnimeShoujo] = useState(dataPageShoujo);
  const [count, setCount] = useState(1);

  const DataAnimeShoujoPCAPI = () => {
    fetch(`https://api.jikan.moe/v4/anime?genres=25&page=${count}`)
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const nouvelAnime = data.data;
          setDataAnimeShoujo((prevData) => [...prevData, ...nouvelAnime]); // Concatène correctement
        } else {
          console.error("Données incorrectes reçues depuis l'API :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
    setCount((prevCount) => prevCount + 1);
  };

  const ButtonAnimeShoujoPC = (nombreAppels = 1) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeShoujoPCAPI();
    }
  };

  return (
    <div className="PageShoujoPC">
      <DescriptionShoujoRoot />
      <section className={style.ContainerRootCardAnimeHomePC}>
        {dataAnimeShoujo.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              /*Pour la props Genre. Il était possible de cibler la clé démographics ou était référencé mal_id === 42
              pour que le genre affiché soit Shoujo mais l'API ne l'ayant pas référencé sur tout les animes, inconnu s'affichait souvent.
              J'ai donc préférer jouer sur le filtre fetch API qui me retoune bien des animes du genre Shoujo mais je vais forcé
              l'affichage du genre Shoujo grace au code ci-dessous. Le code qui devait être utilisé est le suivant : 

              genre={
                anime.demographics?.find((g) => g.mal_id === 42)?.name || "Inconnu"
              }
              Dans le composant Search type on aurait du rajouter le code suivant : 
              demographics: [
                {
                  mal_id: number,
                  name: string,
                }
              ],
              Enfin, dans le fichier dataPageShoujo.ts on aurais du rajouter ce code : 
               demographics: [
                {
                  mal_id: 25,
                  name: "Shoujo",
                }
              ],
              
              */
              genre={
                anime.genres?.find((g) => g.mal_id === 25)?.name || "Shoujo"
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
            ButtonAnimeShoujoPC();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default PageShoujoPC;
