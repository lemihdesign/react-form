// import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button className="button" disabled={!props.disabled}>
      Zarejestruj
    </button>
  );
};

export default Button;
