interface CardAnimeHomeMainRootPros {
  key: number;
  src: string;
  title: string;
  yearStart: string;
  yearEnd: string;
  genre: string;

  moduleContainerCardAnimeHome: string;
  moduleCardAnimeHomeImg: string;
  moduleContainerCardAnimeInfo: string;
  moduleTitleAnimeHome: string;
  moduleGenreAnimeHome: string;
  moduleYearAnimeHome: string;
}

function CardAnimeHomeMainRoot(props: CardAnimeHomeMainRootPros) {
  const {
    key,
    src,
    title,
    yearStart,
    yearEnd,
    genre,
    moduleContainerCardAnimeHome,
    moduleCardAnimeHomeImg,
    moduleContainerCardAnimeInfo,
    moduleTitleAnimeHome,
    moduleGenreAnimeHome,
    moduleYearAnimeHome,
  } = props;

  return (
    <section className={moduleContainerCardAnimeHome}>
      <div className={moduleCardAnimeHomeImg}>
        <img src={src} alt={title} />
      </div>

      <div className={moduleContainerCardAnimeInfo} key={key}>
        <h1 className={moduleTitleAnimeHome}>{title}</h1>
        <h3 className={moduleGenreAnimeHome}>{genre}</h3>
        <h3 className={moduleYearAnimeHome}>
          {yearStart} - {yearEnd}
        </h3>
      </div>
    </section>
  );
}

export default CardAnimeHomeMainRoot;
