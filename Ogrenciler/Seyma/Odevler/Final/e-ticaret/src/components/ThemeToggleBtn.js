
import { useTheme } from '@/context/ThemeContext';
import '../app/globals.sass'
const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="btn"
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        
        <i className="bi bi-cloud-sun toggle"></i>
      ) : (
       <i className="bi bi-cloud-moon toggle"></i>
      )}
    </button>
  );
};

export default ThemeToggleBtn;