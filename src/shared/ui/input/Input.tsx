import { useId, type InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const Input = (props: InputProps) => {
  const { className, label, id, disabled, ...rest } = props;

  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input 
        className={styles.input}
        id={inputId}
        disabled={disabled}
        {...rest}
      />
    </div>
  );
};