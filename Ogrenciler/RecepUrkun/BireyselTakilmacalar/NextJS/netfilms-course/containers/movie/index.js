import FeaturedMovie from "@/components/featured-movies"

const MovieContainer = ({ movie }) => {
    return (
        <div><FeaturedMovie movie={movie} isCompact={false} /></div>
    )
}

export default MovieContainer