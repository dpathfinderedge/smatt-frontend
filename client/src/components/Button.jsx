const Button = ({ text, bg, classProps, handleClick }) => {

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ backgroundColor: `${bg}` }}
      className={`${classProps} text-sm font-semibold px-3 py-2 md:w-32 w-full rounded-lg uppercase`}
    >
      {text}
    </button>
  );
};

export default Button;
