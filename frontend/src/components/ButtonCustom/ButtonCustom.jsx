export const ButtonCustom = ({
  onClick,
  type,
  disabled,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};
