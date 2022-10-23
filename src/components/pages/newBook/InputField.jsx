import { StyledInput, StyledInputLabel } from "./NewBook.styled";

export const InputField = ({ title, type, value, onChange, name, min }) => {
  return (
    <StyledInputLabel>
      {title}
      <StyledInput
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        min={min}
      />
    </StyledInputLabel>
  );
};
