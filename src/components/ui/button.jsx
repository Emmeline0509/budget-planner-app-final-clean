export function Button({ children, onClick, variant = "default", size = "md" }) {
  const base = "rounded px-3 py-1";
  const variants = {
    default: "bg-blue-600 text-white",
    outline: "border border-gray-400",
    destructive: "bg-red-500 text-white"
  };
  const sizes = {
    sm: "text-sm",
    md: "text-base"
  };
  return <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]}`}>{children}</button>;
}
