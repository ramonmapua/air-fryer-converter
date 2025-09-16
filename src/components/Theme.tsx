import moon from "../assets/moon.svg"
import moonWhite from "../assets/moonwhite.svg"

interface ThemeProps {
  theme: boolean
  setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

function Theme({ theme, setTheme }: ThemeProps) {
    const changeTheme = () => {
    const root = document.querySelector(":root") as HTMLElement;
    const button = document.getElementById("theme-toggle") as HTMLImageElement;

    if (!theme) {
      root.setAttribute("data-theme", "light");
      button.src = moon;
      setTheme(true);
    } else {
      root.setAttribute("data-theme", "dark");
      button.src = moonWhite;
      setTheme(false);
    }
  }

  return (
    <div className="theme-toggle">
      <input
        type="image"
        src={theme ? moon : moonWhite}
        className="theme-toggler"
        id="theme-toggle"
        onClick={changeTheme}
      />
    </div>
  )
}

export default Theme