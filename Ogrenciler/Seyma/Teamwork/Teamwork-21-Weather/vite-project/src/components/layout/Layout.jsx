import { Navbar } from '../organisms/Navbar/Navbar';
import styles from "./Layout.module.css";
import WeatherCard from '../../organisms/WeatherCard/WeatherCard';


export const Layout = () => {
   
    
    return (
        <div>
            <Navbar />
            {image && <img src={image} alt="weather_image" className={styles.backgroundImage} />}
            {weather?.map((data, index) => <WeatherCard key={index} data={data}/>)}
        </div>
    );
}
