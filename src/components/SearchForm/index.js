import { useEffect, useState } from "react"
import APIURL from "../../apiurl"

export default function SearchForm () {
    const [userInput, setUserInput] = useState('');
    const [searchResults, setSearchResults] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const getSearchResults = async () => {
            try {
            const response = await fetch(`${APIURL.path}${APIURL.search}${userInput}`);
            const data = await response.json();
                setSearchResults(data.results)
                console.log(data.results)
            } catch(err) {
                console.error(err)
            } 
            
    }
    
    }

    


    return (<>
        <form onSubmit={handleSubmit}>
            <label htmlFor='search'>Find:</label>
            <input id='search' type="text" placeholder='Search' onChange={(e) => setUserInput(e.target.value)} />
            <input type="submit" value="Find" />
        </form>
        <h1>{searchResults}</h1>
        </>
        )
    
}