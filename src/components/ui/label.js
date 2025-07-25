export function Label({ children, htmlFor }) {
  return <label htmlFor={htmlFor} className="block font-medium">{children}</label>;
}