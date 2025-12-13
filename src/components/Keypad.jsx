function Keypad({ value, onInput }) {
  const handleClick = (key) => {
    if (key === "⌫") {
      onInput(value.slice(0, -1));
      return;
    }

    if (key === ".") {
      if (value.includes(".")) return;
    }

    onInput(value + key);
  };

  return (
    <div className="grid grid-cols-3 gap-3 text-center text-xl font-semibold">
      {["1","2","3","4","5","6","7","8","9",".","0","⌫"].map((key) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          className="py-3 rounded bg-blue-600 hover:bg-blue-500"
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
