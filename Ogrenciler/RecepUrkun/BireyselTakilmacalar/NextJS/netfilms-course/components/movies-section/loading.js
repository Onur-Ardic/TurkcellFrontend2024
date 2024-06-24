import stlyes from "./styles.module.css"
import Skeleton from "@/components/skeleton"

const MoviesSectionLoading = () => {
    return (
        <div className={stlyes.moviesSection}>
            <Skeleton width={128} height={36} />
            <div className={stlyes.movies}>
                {Array(5).fill(null).map((_, index) =>
                    <Skeleton key={index} />)}
            </div>
        </div>
    )
}

export default MoviesSectionLoading