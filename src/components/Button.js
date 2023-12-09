const Button = ({ name }) => {
  return (
    <div>
      <button
        className={`${
          name === "All" ? "bg-black text-white" : "bg-[rgba(0,0,0,0.05)]"
        } font-semibold px-3 py-1 rounded-lg text-[15px]`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
