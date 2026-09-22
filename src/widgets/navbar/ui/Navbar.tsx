import { Link } from "react-router";
import { ROUTES } from "@/shared/config/routers";
import styles from "./Navbar.module.css";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.navbar} ${className ?? ""}`}>
      <Link to={ROUTES.planner}>Planner</Link>
      <Link to={ROUTES.guide}>Guide</Link>
    </div>
  );
};