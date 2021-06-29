import { useState, useEffect } from "react"
import Anime from "../Anime"
import APIURL from "../../apiurl"

export default function Top () {
    const  [topThreeImage, setTopThreeImage] = useState([])

    const getTopThree = async () => {
        try {
        const res = await fetch(`${APIURL.path}${APIURL.search}${APIURL.order_by}${APIURL.sort}${APIURL.limit}`);
        const data = await res.json();
        console.log(data)
        setTopThreeImage(data.results)
        }catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getTopThree();
    },[])

    return (
        <div>
            {topThreeImage.map((anime, i) => {
                return <Anime anime={anime} key={i} />
            })}
        </div>
    )
}