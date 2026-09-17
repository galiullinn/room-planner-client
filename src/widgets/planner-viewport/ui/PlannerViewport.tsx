import styles from "./PlannerViewport.module.css";

interface PlannerViewportProps {
  className?: string;
}

export const PlannerViewport = (props: PlannerViewportProps) => {
  const { className } = props;

  return (
    <div className={`${styles.plannerViewport} ${className ?? ""}`}>
      
    </div>
  );
};