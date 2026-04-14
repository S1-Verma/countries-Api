import { useTheme } from "./Hooks/useTheme";

const Header = () => {
  const [isDark, setIsDark] = useTheme();
  // yaha par hum value ko ko destructure kar rahe he and uske bad is use kar rahe he

  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Were in the world? </a>
        </h2>
        <p
          className="theme-changer"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
          &nbsp; &nbsp;{isDark ? "light" : "dark"} Mode
        </p>
      </div>
    </header>
  );
};

export default Header;
