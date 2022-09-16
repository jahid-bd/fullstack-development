import Input from "../ui/Input";

const InputGroup = ({
  label,
  type,
  name,
  onChange,
  value,
  placeholder,
  error,
  onFocus,
  onBlur,
}) => {
  return (
    <div style={{ marginBottom: "1.2rem" }}>
      <label htmlFor={name} style={{ fontSize: "1rem" }}>
        {label}
      </label>
      <Input
        type={type}
        onChange={onChange}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        isValid={!error}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <span style={{ color: "#e60000" }}>{error}</span>}
    </div>
  );
};

export default InputGroup;
