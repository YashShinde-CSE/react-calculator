import styles from "./Display.module.css";
const Display = ({ displayVal }) => {
  return (
    <input type="text" value={displayVal} className={styles.display} readOnly />
  );
};
export default Display;
