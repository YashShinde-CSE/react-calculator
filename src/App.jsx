import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  const [calValue, setCalValue] = useState("");
  const handledClickedButton = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      const ans = eval(calValue);
      setCalValue(ans);
    } else if (buttonText === "Del") {
      let remaining = calValue.slice(0, -1);
      setCalValue(remaining);
    } else {
      setCalValue(calValue + buttonText);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayVal={calValue}></Display>
      <ButtonContainer
        handledClickedButton={handledClickedButton}
      ></ButtonContainer>
    </div>
  );
}

export default App;
