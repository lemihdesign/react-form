import Button from "../UI/Button";
import Input from "../UI/Input";
import useInput from "../../hooks/use-input";
import Logo from "../UI/Logo";
// import classes from "./Form.module.css";

const Form = (props) => {
  const {
    value: nameInputValue,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInputValue,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  const {
    value: passwordInputValue,
    isValid: passwordInputIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordInputReset,
  } = useInput((value) => value.trim().length > 7);

  const {
    value: confirmPasswordInputValue,
    isValid: confirmPasswordInputIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    valueBlurHandler: confirmPasswordBlurHandler,
    reset: confirmPasswordInputReset,
  } = useInput(
    (value) => value.trim().length > 7 && value === passwordInputValue
  );

  let formIsValid = false;
  if (
    nameInputIsValid &&
    emailInputIsValid &&
    passwordInputIsValid &&
    confirmPasswordInputIsValid
  ) {
    formIsValid = true;
  }

  const nameInputClasses = !nameInputHasError
    ? "form-input"
    : "form-input invalid";

  const emailInputClasses = !emailInputHasError
    ? "form-input"
    : "form-input invalid";

  const passwordInputClasses = !passwordInputHasError
    ? "form-input"
    : "form-input invalid";

  const confirmInputClasses = !confirmPasswordInputHasError
    ? "form-input"
    : "form-input invalid";

  let emailErrorMsg = "";
  if (emailInputHasError && emailInputValue.trim() === "") {
    emailErrorMsg = <p>Email nie mo??e by?? pusty!</p>;
  }

  if (
    emailInputHasError &&
    emailInputValue.trim() !== "" &&
    !emailInputValue.includes("@")
  ) {
    emailErrorMsg = <p>Email musi by?? poprawny!</p>;
  }

  let confirmPasswordErrorMsg = "";
  if (
    confirmPasswordInputHasError &&
    confirmPasswordInputValue.trim().length < 8
  ) {
    confirmPasswordErrorMsg = <p>Has??o musi mie?? minimum 8 znak??w.</p>;
  }

  if (
    confirmPasswordErrorMsg &&
    confirmPasswordInputValue.trim().length > 8 &&
    confirmPasswordInputValue.trim() !== passwordInputValue.trim()
  ) {
    confirmPasswordErrorMsg = <p>Has??a musz?? by?? takie same!</p>;
  }

  const onSubmitForm = (e) => {
    e.preventDefault();

    nameInputReset();
    emailInputReset();
    passwordInputReset();
    confirmPasswordInputReset();
  };

  return (
    <form onSubmit={onSubmitForm}>
      <Logo />
      <h1>Hello Again!</h1>
      <p>Nice to see you! Feel free to create an acount!</p>
      <div className="form-group">
        <div className={nameInputClasses}>
          <Input
            type="text"
            label="Twoje imie"
            placeholder="Wpisz imi??..."
            value={nameInputValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            reset={nameInputReset}
          />
        </div>
        {nameInputHasError && <p>Imie nie mo??e by?? puste!</p>}
        <div className={emailInputClasses}>
          <Input
            type="email"
            label="Adres email"
            placeholder="Adres email..."
            value={emailInputValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            reset={emailInputReset}
          />
        </div>
        {emailErrorMsg}
        <div className={passwordInputClasses}>
          <Input
            type="password"
            label="Has??o"
            placeholder="Wpisz has??o..."
            value={passwordInputValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            reset={passwordInputReset}
          />
        </div>
        {passwordInputHasError && <p>Has??o musi mie?? minimum 8 znak??w!</p>}
        <div className={confirmInputClasses}>
          <Input
            type="password"
            label="Potwierd?? has??o"
            placeholder="Potwierd?? has??o..."
            value={confirmPasswordInputValue}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            reset={confirmPasswordInputReset}
          />
        </div>
        {confirmPasswordErrorMsg}
        <Button disabled={formIsValid} />
      </div>
    </form>
  );
};

export default Form;
