import { useEffect, useState } from "react"
import APIURL from "../../apiurl";

export default function Category ({ category }) {
    const [categoryData, setCategoryData] =useState([])

    const getCategoryData = async () => {
        try {
            const res = await fetch(`${APIURL.path}genre/anime/${category.genre_id}`);
            const data = await res.json();
            setCategoryData(data.anime)
            console.log({data})
        }catch(err) {
            console.error(err)
        }
    }
    
    useEffect(() => {
        getCategoryData();
    },[])
    
console.log(category)
    return (
        <div>
            <h1>{category.name}</h1>
            {categoryData.map((anime, i) => {
                return (
                <div className='category' key={i}>
                    <img src={anime.image_url} alt={anime.title} />
                    <a href={anime.url}>{anime.title}</a>
                </div>
                )
            })}          
        </div>
    )
}