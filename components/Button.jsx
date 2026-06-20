export default function Button({ children, onClick, variant = "primary", type = "button" }) {
  const styles = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[variant]} px-4 py-2 rounded-lg font-semibold transition`}
    >
      {children}
    </button>
  );
}