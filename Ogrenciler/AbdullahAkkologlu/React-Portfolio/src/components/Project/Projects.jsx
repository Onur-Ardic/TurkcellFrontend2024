import { Container } from "../../styles";
import Project from "./Project";

const Projects = () => {
  return (
    <Container>
      <Project
        gif="assets/bookify.gif"
        name="Bookify"
        techs={["sass", "bootstrap", "js"]}
        desc="With the Bookify project, you can create your own library, use it as a
        wishlist or keep track of the books you read. In this project, I used
        Bootstrap and SCSS in the UI to create a modern design. I used
        JSON-Server to save the data and performed all frontend operations with
        Vanilla JavaScript."
      />
      <Project
        gif="assets/flight.gif"
        name="FlyPqs"
        techs={["tailwind", "react"]}
        desc="FlyPqs is a dynamic web application that enables users to search and list flights on specific dates and at airports. It stands out with its intuitive interface and visual animation presented at first use. Flight information is showcased with easy sorting and filtering features, prioritizing user experience."
      />
      <Project
        gif="assets/movie.gif"
        name="Watchlyst"
        techs={["tailwind", "react"]}
        desc="Watchlyst, using the TMDB API, is a React-based platform allowing users to easily create and manage personalized watchlists. Discover the latest and popular movies, search for specific titles, and access detailed information on individual movie pages. Tailwind CSS ensures a sleek design. After watching, effortlessly remove movies from your watchlist. Streamlining movie discovery and user control, Watchlyst offers a concise and user-friendly experience."
      />
      <Project
        gif="assets/xox.gif"
        name="Tic-Tac-Toe"
        techs={["css", "js"]}
        desc="With the Bookify project, you can create your own library, use it as a
        wishlist or keep track of the books you read. In this project, I used
        Bootstrap and SCSS in the UI to create a modern design. I used
        JSON-Server to save the data and performed all frontend operations with
        Vanilla JavaScript."
      />
      <Project
        gif="assets/wormhole.gif"
        name="Wormhole"
        techs={["css", "sass", "bootstrap"]}
        desc="With the Bookify project, you can create your own library, use it as a
        wishlist or keep track of the books you read. In this project, I used
        Bootstrap and SCSS in the UI to create a modern design. I used
        JSON-Server to save the data and performed all frontend operations with
        Vanilla JavaScript."
      />
      <Project
        gif="assets/rock.gif"
        name="Rock-Paper-Scissors"
        techs={["css", "js"]}
        desc="With the Bookify project, you can create your own library, use it as a
        wishlist or keep track of the books you read. In this project, I used
        Bootstrap and SCSS in the UI to create a modern design. I used
        JSON-Server to save the data and performed all frontend operations with
        Vanilla JavaScript."
      />
      <Project
        gif="assets/memory.gif"
        name="Memory Game"
        techs={["css", "js"]}
        desc="With the Bookify project, you can create your own library, use it as a
        wishlist or keep track of the books you read. In this project, I used
        Bootstrap and SCSS in the UI to create a modern design. I used
        JSON-Server to save the data and performed all frontend operations with
        Vanilla JavaScript."
      />
    </Container>
  );
};

export default Projects;
