interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  compact?: boolean;
}
const Button: React.FC<Props> = ({ children, compact = false, ...props }) => {
  return (
    <button
      {...props}
      className={`rounded bg-indigo-400 text-lg text-white hover:bg-indigo-400 disabled:bg-gray-500 ${
        compact ? "px-2" : "px-4"
      } p-2`}
    >
      {children}
    </button>
  );
};

export default Button;
