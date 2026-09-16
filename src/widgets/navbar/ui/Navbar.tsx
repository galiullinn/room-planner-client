import { Link } from "react-router";
import { ThemeSwitcher } from "@/features/theme-switcher";
import LogoIcon from "@/shared/assets/icons/logo-icon.svg?react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.navbar} ${className ?? ""}`}>
      <Link to={"/"} className={styles.navbarLogo}>
        <LogoIcon width={40} />
        <span>Room Planner</span>
      </Link>
      <div className={styles.navbarActions}>
        <Link to={"/"}>Planner</Link>
        <Link to={"/guide"}>Guide</Link>
        <ThemeSwitcher />
      </div>
    </div>
  );
};