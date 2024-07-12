import Link from "next/link"

const ViewAllButton = () => {
    return (
        <Link href="/categories" className="text-decoration-none">
            <div className="viewAllButton-container d-flex justify-content-center">
                <button className="btn btn-light">View All</button>
            </div>
        </Link>
    )
}

export default ViewAllButton