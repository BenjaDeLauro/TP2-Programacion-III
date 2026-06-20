export default function Button({
  children,
  onClick,
  variant = "primary",
  type = "button",
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 hover:scale-105",
    secondary:
      "bg-slate-800 text-white hover:bg-slate-700 border border-cyan-400/20",
    danger:
      "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles[variant]} rounded-xl px-4 py-2 font-bold transition`}
    >
      {children}
    </button>
  );
}