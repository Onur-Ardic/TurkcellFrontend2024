import { useTheme } from '../context/ThemeContext'

const Button = () => {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme(theme === 'light' ? 'dark ' : 'light')}>button</button>
}

export default Button
