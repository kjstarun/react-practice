const Input = ({
  type,
  placeholder,
  value,
  onChange,
  inputplaceholder
}) => {
  console.log(type, placeholder, value);
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputplaceholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default Input;