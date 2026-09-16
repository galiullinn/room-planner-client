import { Button } from "@/shared/ui/button";
import { toggleTheme, useTheme } from "../model/theme.store";
import LightIcon from "@/shared/assets/icons/light-icon.svg?react";
import DarkIcon from "@/shared/assets/icons/dark-icon.svg?react";
import styles from "./ThemeSwitcher.module.css";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const theme = useTheme();

  return (
    <Button 
      className={`${styles.themeSwitcher} ${className ?? ""}`}
      onClick={toggleTheme}
    >
      {
        theme === "dark"
        ? <DarkIcon width={20} />
        : <LightIcon width={20} />
      }
    </Button>
  );
};