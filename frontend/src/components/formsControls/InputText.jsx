import style from './InputText.module.css';

const InputText = ({ label, value, changeHandler, error }) => {
  const classModifier = error ? style.inputFieldError : '';
  const inputField = `${style.inputField} ${classModifier}`;

  return (
    <div className={style.inputContainer}>
      <label className={style.input}>
        <span className={style.inputLabel}>{label}</span>
        <input
          className={inputField}
          type='text'
          value={value}
          onChange={(ev) => {
            changeHandler(ev.target.value);
          }}
        />
      </label>
      {!!error && <p className={style.errorMessage}>{error}</p>}
    </div>
  );
};

export default InputText;
