
import HomeContainer from "@/containers/home";

import Movies from "@/db/movies.json"

const delay = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function HomePage({ params }) {
    await delay(5000)

    let selectedCategory;
    if (params.category?.length > 0) selectedCategory = true;

    return (
        <HomeContainer
            selectedCategory={{
                id: params.category?.[0] ?? "",
                movies: selectedCategory ? Movies.results.slice(1, 7) : []
            }
            } />
    );
}
export default HomePage