export function Button({ children, onClick, size = "md", variant = "default" }) {
  return (
    <button onClick={onClick} className="border rounded px-3 py-1 bg-blue-600 text-white">
      {children}
    </button>
  );
}