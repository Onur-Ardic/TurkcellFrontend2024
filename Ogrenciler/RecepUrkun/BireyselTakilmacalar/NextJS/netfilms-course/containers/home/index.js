import React from 'react'

import Movies from "@/db/movies.json"
import Genres from "@/db/genres.json"

import FeaturedMovies from '@/components/featured-movies'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movies-section'

const HomeContainer = ({ selectedCategory }) => {

    let getCategoriesTitle = Genres.genres.find((tur) => tur.id == selectedCategory.id)

    return (
        <div>
            <FeaturedMovies movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0, 5)} />
            {
                selectedCategory.movies.length > 0 && (<MoviesSection title={getCategoriesTitle.name} movies={selectedCategory.movies} />)
            }
            <MoviesSection title="Popular Films" movies={Movies.results.slice(1, 7)} />
            <MoviesSection title="Your Favourites" movies={Movies.results.slice(7, 13)} />
        </div>
    )
}

export default HomeContainer