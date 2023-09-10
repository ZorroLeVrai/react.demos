import styles from "./Button.module.css";

export default function Button({
  children,
  style = "primary",
  onClickHandler,
}) {
  const classNameContent = `btn btn-${style.toLowerCase()}`;
  return (
    <button className={styles.btn} onClick={onClickHandler}>
      {children}
    </button>
  );
}
