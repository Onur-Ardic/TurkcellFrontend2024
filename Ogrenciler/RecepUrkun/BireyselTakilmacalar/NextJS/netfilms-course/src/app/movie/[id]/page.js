import MovieContainer from '@/containers/movie'
import Movies from "@/db/movies.json"
import { notFound } from 'next/navigation'

const delay = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const MoviePage = async ({ params, searchParams }) => {
    await delay(2000)
    const movieDetail = Movies.results.find((movie) => movie.id == params.id)
    if (!movieDetail) notFound()
    if (searchParams.error == 'true') {
        throw new Error("Error Happened")
    }

    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage