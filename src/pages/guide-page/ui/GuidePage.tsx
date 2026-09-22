import styles from "./GuidePage.module.css";

interface GuidePageProps {
  className?: string;
}

const GuidePage = (props: GuidePageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.guidePage} ${className ?? ""}`}>
      Guide
    </div>
  );
};

export default GuidePage;