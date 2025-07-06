export function Checkbox({ id, checked, onCheckedChange }) {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onCheckedChange}
      className="mr-2"
    />
  );
}