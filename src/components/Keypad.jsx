function Keypad({ value, onChange }) {
  const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "C", "0", "."];

  const handleClick = (key) => {
    if (key === "C") {
      onChange("");
      return;
    }
    onChange(value + key);
  };

  return (
    <div className="bg-blue-800 rounded-2xl p-4">
      <div className="grid grid-cols-3 gap-4">
        {keys.map((key) => (
          <button
            key={key}
            onClick={() => handleClick(key)}
            className="
              h-14
              text-white
              text-xl
              font-medium
              rounded-lg
              hover:bg-blue-600
              active:scale-95
              transition
            "
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Keypad;
