import { images } from "../js/images"

function Projects() {
    return (
        <main>
            <h2 style={{ width: "76%", margin: "auto" }}>Projects</h2>
            <div className="container flex jc-center ai-center">
                {images.map((image, index) => {
                    return (
                        <a key={index} href="#" className="flex-item">
                            <img src={image} />
                        </a>
                    )
                })}
            </div>
        </main>
    )
}

export default Projects