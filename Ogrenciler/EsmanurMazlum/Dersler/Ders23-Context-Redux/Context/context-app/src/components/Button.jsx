import {useTheme} from '../context/ThemeContext'

const Button = () => {
    const {theme, setTheme} = useTheme();

  return (
    <div>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Temayı değiştir</button>
    </div>
  )
}

export default Button