function Box({ children, onClick, className }) {
  return (
    <div
      onClick={() => onClick()}
      className={`box place-center text-white ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
