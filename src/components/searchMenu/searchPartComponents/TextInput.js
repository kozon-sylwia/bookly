export const TextInput = ({ name, labelText, callback }) => {
  return (
    <label htmlFor={name}>
      {labelText}
      <input
        name={name}
        type="text"
        onChange={(event) => callback(event.currentTarget.value)}
      />
    </label>
  );
};
