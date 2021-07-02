import './style.css'

export default function Anime ({anime}) {
    return (
        <div className='container'>
            <img src={anime.image_url} alt={anime.title} />
            <a href={anime.url}>{anime.title}</a>
        </div>
    )
}