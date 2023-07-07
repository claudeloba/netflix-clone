import "./row.css";
import useFetch from "../../Hooks/useFetch";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const { data: movies, pending } = useFetch(fetchURL);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const rows = movies.map((movie) => (
    <div
      className="row__card row__card--zoom"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <h3>{movie.title}</h3>
      <p>{truncate(movie.overview, 100)}</p>
      <img src="" alt="" />
    </div>
  ));

  if (pending) {
    return <p>Loading</p>;
  }

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row__cards">{rows}</div>
    </div>
  );
};

export default Row;
