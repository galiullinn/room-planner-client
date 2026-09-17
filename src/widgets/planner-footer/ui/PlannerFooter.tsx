import styles from "./PlannerFooter.module.css";

interface PlannerFooterProps {
  className?: string;
}

export const PlannerFooter = (props: PlannerFooterProps) => {
  const { className } = props;

  return (
    <div className={`${styles.plannerFooter} ${className ?? ""}`}>
      
    </div>
  );
};