import { useState, useEffect } from "react";
import Anime from "../Anime";
import APIURL from "../../apiurl";
import "./style.css";
import SearchForm from "../SearchForm";

export default function Top() {
  const [topThreeImage, setTopThreeImage] = useState([]);

  const getTopThree = async () => {
    try {
      const res = await fetch(
        `${APIURL.path}${APIURL.search}${APIURL.order_by}${APIURL.sort}${APIURL.limit}`
      );
      const data = await res.json();
      console.log(data);
      setTopThreeImage(data.results);
    } catch (err) {
      console.error(err);
    }
  };
    
  useEffect(() => {
    getTopThree();
  }, []);

  return (
      <>
        <div className="top-container">
      {topThreeImage.map((anime) => {
        return <Anime anime={anime} key={anime.mal_id} />;
      })}
    </div>
    </>
  );
}