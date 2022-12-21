const InputBox = ({ name, value, onChange, placeholder, type }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
      placeholder={placeholder}
    />
  );
};

InputBox.defaultProps = {
  type: "text",
  placeholder: "Enter text here!",
};

export default InputBox;