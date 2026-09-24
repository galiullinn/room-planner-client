import styles from "./Separator.module.css";

interface SeparatorProps {
  className?: string;
}

export const Separator = (props: SeparatorProps) => {
  const { className } = props;

  return (
    <span 
      className={`${styles.separator} ${className ?? ""}`}
      role="separator"
      aria-orientation='vertical'
    />
  );
};