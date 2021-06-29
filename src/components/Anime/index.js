export default function Anime ({anime}) {
    return (
        <div>
            <img src={anime.image_url} alt={anime.title} />
            <a href={anime.url}>{anime.title}</a>
        </div>
    )
}