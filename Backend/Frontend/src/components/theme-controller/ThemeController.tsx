import MoonIcon from "../../assets/icons/MoonIcon";
import SunIcon from "../../assets/icons/SunIcon";

const ThemeController = ({
  theme,
  setTheme,
}: {
  theme: string | null;
  setTheme: (theme: string) => void;
}) => {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" className="theme-controller" value="synthwave" />
      <SunIcon theme={theme} setTheme={setTheme} />
      <MoonIcon theme={theme} setTheme={setTheme} />
    </label>
  );
};

export default ThemeController;
