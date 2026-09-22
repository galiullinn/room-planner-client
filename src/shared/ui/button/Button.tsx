import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { className, children, ...rest } = props;

  return (
    <button 
      className={`${styles.button} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};