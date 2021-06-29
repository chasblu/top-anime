import { useState, useEffect } from "react"

export default function Top () {
    const  [topThreeImage, setTopThreeImage] = useState([])

    const API = {
        endpoint: 'https://api.jikan.moe/v3/top/anime',
    }

    const getTopThree = async () => {
        try {
        const res = await fetch(`${API.endpoint}`);
        const data = await res.json();
        console.log(data)
        setTopThreeImage(data.top[0].title)
        }catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getTopThree();
    })
    return (
        <h2>{topThreeImage.top[0].title}</h2>
    )
}