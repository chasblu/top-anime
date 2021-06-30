import { useEffect, useState } from "react"
import APIURL from "../../apiurl"

export default function SearchForm () {
    const [userInput, setUserInput] = useState('');
    const [searchResults, setSearchResults] = useState([])

    
    
    const getSearchResults = async (input) => {
        try {
        const response = await fetch(`${APIURL.path}${APIURL.search}${input}&order_by=title${APIURL.sort}${APIURL.page}`);
        const data = await response.json();
            console.log(data)
            setSearchResults(data.results)
            console.log(data.results)
        } catch(err) {
            console.error(err)
        } 
    
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.length < 3)  {
            getSearchResults('')
        }
        getSearchResults(userInput)
    }

    


    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Find:</label>
            <input id='search' type="text" placeholder='Search' onChange={(e) => setUserInput(e.target.value)} />
            <input type="submit" value="Find" />
        </form>
            <div>
                {searchResults.map((anime) => {
                    return (
                        <h1 key={anime.mal_id}>{anime.title}</h1>
                    )
                })}
            </div>
        
        </>
        )
    
}