import styles from "./Button.module.css";
const Button = ({ Buttons, handleClickedButton }) => {
  return (
    <button
      className={`${styles.button} ${Buttons === "=" ? styles.equalButton : ""}`}
      onClick={(buttonText) => handleClickedButton(buttonText.target.innerText)}
    >
      {Buttons}
    </button>
  );
};
export default Button;
