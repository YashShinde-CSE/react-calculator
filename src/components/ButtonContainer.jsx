import styles from "./ButtonContainer.module.css";
import Button from "./Button";
const ButtonContainer = ({ handledClickedButton }) => {
  let buttons = [
    "C",
    "*",
    "/",
    "Del",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    ".",
    "0",
    "=",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttons.map((item) => (
        <Button
          Buttons={item}
          handleClickedButton={handledClickedButton}
        ></Button>
      ))}
    </div>
  );
};
export default ButtonContainer;
