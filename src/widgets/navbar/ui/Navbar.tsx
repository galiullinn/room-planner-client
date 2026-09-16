import { Link } from 'react-router';
import styles from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;

  return (
    <div className={`${styles.navbar} ${className ?? ""}`}>
      <Link to={"/"}>Room Planner</Link>
      <div className={styles.navbarActions}>
        <Link to={"/"}>Planner</Link>
        <Link to={"/guide"}>Guide</Link>
      </div>
    </div>
  );
};