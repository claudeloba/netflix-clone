import "./row.css";
import useFetch from "../../Hooks/useFetch";
import axios from "../../server/axios.mjs";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const { data: movies, pending } = useFetch(fetchURL);

  const { baseURL } = axios;
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const rows = movies.map((movie) => (
    <div
      className={`row__card ${isLargeRow && "row__card--large"}`}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${
          isLargeRow ? movie?.backdrop_path : movie?.poster_path
        }")`,
        backgroundPosition: "center center",
      }}
    >
      {isLargeRow && <div className="row__fade"></div>}
      {isLargeRow && (
        <h3 className="row__movieTitle">
          {movie?.title || movie?.name || movie?.original_name}
        </h3>
      )}

      {/* <p>{truncate(movie.overview, 100)}</p> */}
    </div>
  ));

  if (pending) {
    return <p>Loading</p>;
  }

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>
      <div className="row__cards">{rows}</div>
    </div>
  );
};

export default Row;
