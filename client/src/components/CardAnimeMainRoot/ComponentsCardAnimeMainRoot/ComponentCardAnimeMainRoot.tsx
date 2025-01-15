import { useParams } from "react-router-dom";

interface CardAnimeRootPros {
  src: string;
  title: string;
  yearStart: string;
  yearEnd: string;
  genre: string | undefined;
  synopsis: string | undefined;

  moduleContainerCardAnime: string;
  moduleCardAnimeImg: string;
  moduleContainerCardAnimeInfo: string;
  moduleTitleAnime: string;
  moduleGenreAnime: string;
  moduleYearAnime: string;
  moduleSynopsisAnime: string;
  moduleChildren1CardAnimeInfo: string;
  moduleChildren2CardAnimeInfo: string;
  moduleIDCardAnime: string;
}

function ComponentCardAnimeMainRoot(props: CardAnimeRootPros) {
  const {
    src,
    title,
    yearStart,
    yearEnd,
    genre,
    synopsis,
    moduleContainerCardAnime,
    moduleCardAnimeImg,
    moduleContainerCardAnimeInfo,
    moduleTitleAnime,
    moduleGenreAnime,
    moduleYearAnime,
    moduleSynopsisAnime,
    moduleChildren1CardAnimeInfo,
    moduleChildren2CardAnimeInfo,
    moduleIDCardAnime,
  } = props;

  const { id } = useParams();

  return (
    <section className={moduleContainerCardAnime}>
      <h1 className={moduleTitleAnime}>{title}</h1>

      <div className={moduleCardAnimeImg}>
        <img src={src} alt={title} />
      </div>

      <div className={moduleContainerCardAnimeInfo}>
        <div className={moduleChildren1CardAnimeInfo}>
          <h3 className={moduleYearAnime}>
            {yearStart} - {yearEnd}
          </h3>
          <div>
            <h3 className={moduleGenreAnime}>{genre}</h3>
            <h5 className={moduleIDCardAnime}>ID : {id}</h5>
          </div>
        </div>

        <div className={moduleChildren2CardAnimeInfo}>
          <p className={moduleSynopsisAnime}>{synopsis}</p>
        </div>
      </div>
    </section>
  );
}

export default ComponentCardAnimeMainRoot;
