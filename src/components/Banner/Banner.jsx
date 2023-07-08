import "./banner.css";
import requests from "../../server/req";
import useFetch from "../../Hooks/useFetch";

const Banner = () => {
  const {
    data: movie,
    pending,
    error,
  } = useFetch(requests.fetchNetflixOriginals);

  let randomMovie;
  if (movie && movie.length > 0) {
    const randomIndex = Math.floor(Math.random() * movie.length);
    randomMovie = movie[randomIndex];
  }

  if (pending) {
    return (
      <header className="banner__content">
        <div className="banner__title">Loading...</div>
      </header>
    );
  }

  if (error) {
    return (
      <header className="banner__content">
        <div className="banner__title">Error fetching content: {error}</div>
      </header>
    );
  }

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `
        linear-gradient(
            180deg,
            rgba(17, 17, 17, 0),    
            rgba(17, 17, 17, 0.1),
            rgba(17, 17, 17, 0.2),
            rgba(17, 17, 17, 0.3),
            rgba(17, 17, 17, 0.4),
            rgba(17, 17, 17, 0.5),
            rgba(17, 17, 17, 0.6),
            rgba(17, 17, 17, 0.7),
            rgba(17, 17, 17, 0.8),
            rgba(17, 17, 17, 0.9),
            rgba(17, 17, 17, 1)
        ),
        url("https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}")
    `,
        backgroundPosition: "center 10%",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More info</button>
        </div>
        <h1 className="banner__description">
          {truncate(randomMovie.overview, 170)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
