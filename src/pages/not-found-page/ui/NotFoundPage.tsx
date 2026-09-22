import styles from "./NotFoundPage.module.css";

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={`${styles.notFoundPage} ${className ?? ""}`}>
      Not Found
    </div>
  );
};

export default NotFoundPage;