
import { useTheme } from '@/context/ThemeContext';

const ThemeToggleBtn = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <i className="bi bi-cloud-sun"></i>
      ) : (
       <i className="bi bi-cloud-moon"></i>
      )}
    </button>
  );
};

export default ThemeToggleBtn;