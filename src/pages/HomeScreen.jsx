import Banner from "../components/Banner/Banner";
import NavBar from "../components/NavBar/NavBar";
import Row from "../components/Row/Row";
import "./homescreen.css";
import requests from "../server/req";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <Row title="Trending" fetchURL={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
