import Button from "../UI/Button";
import Input from "../UI/Input";
import useInput from "../../hooks/use-input";
import classes from "./Form.module.css";

const Form = () => {
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: surnameInputValue,
    isValid: surnameInputIsValid,
    hasError: surnameInputHasError,
    valueChangeHandler: surnameChangeHandler,
    valueBlurHandler: surnameBlurHandler,
    reset: surnameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: passwordInputValue,
    isValid: passwordInputIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordInputReset,
  } = useInput((value) => value.trim().length > 8);

  const {
    value: confirmPasswordInputValue,
    isValid: confirmPasswordInputIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    valueBlurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordInputReset,
  } = useInput(
    (value) => value.trim().length > 8 && value === passwordInputValue
  );

  return (
    <form>
      <h1>Rejestracja</h1>
      <div className={classes["form-input"]}>
        <Input
          type="text"
          label="Twoje imie"
          placeholder="Wpisz imię..."
          value={nameInputValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          reset={nameInputReset}
        />
        <Input
          type="text"
          label="Twoje nazwisko"
          placeholder="Wpisz nazwisko..."
          value={surnameInputValue}
          onChange={surnameChangeHandler}
          onBlur={surnameBlurHandler}
          reset={surnameInputReset}
        />
        <Input
          type="password"
          label="Hasło"
          placeholder="Wpisz hasło..."
          value={passwordInputValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
          reset={passwordInputReset}
        />
        <Input
          type="password"
          label="Potwierdź hasło"
          placeholder="Potwierdź hasło..."
          value={confirmPasswordInputValue}
          onChange={confirmPasswordChangeHandler}
          onBlur={confirmPasswordBlurHandler}
          reset={confirmPasswordInputReset}
        />
        <Button />
      </div>
    </form>
  );
};

export default Form;
