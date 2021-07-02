import { useState } from "react"
import APIURL from "../../apiurl"

export default function SearchForm ({getSearchData}) {
    const [userInput, setUserInput] = useState('');
    const [searchResults, setSearchResults] = useState([])

    
    
    const getSearchResults = async (input) => {
        if (input.length >= 3) {
            try {
                const response = await fetch(`${APIURL.path}${APIURL.search}${input}&order_by=title${APIURL.sort}${APIURL.page}/&genre_exclude=12,9`);
                const data = await response.json();
                console.log(data)
                setSearchResults(data.results)
                console.log(data.results)
            } catch(err) {
                console.error(err)
            } 
        }
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.length < 3)  {
            return getSearchResults(`${userInput}aaa`)
        }
        return getSearchResults(userInput)
    }

    


    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Search:</label>
            <input className='search-field' id='search' type="text" placeholder='Search' onChange={(e) => setUserInput(e.target.value)} />
            <input className='search-button' type="submit" value="Find" />
        </form>
            <div>
                {searchResults.map((anime) => {
                    return (
                        <div className='search-results' key={anime.mal_id}>
                            <img src={anime.image_url} alt={anime.title} />
                            <a href={anime.url}>{anime.title}</a>
                        </div>
                    )
                })}
            </div>
        
        </>
        )
    
}