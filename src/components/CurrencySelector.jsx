const currencies = ["USD", "EUR", "GBP", "GHS", "NGN"];

function CurrencySelector({ value, onChange }) {
  return (
    <select
      className="w-full p-3 rounded-lg bg-black text-white outline-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {currencies.map((cur) => (
        <option key={cur} value={cur}>
          {cur}
        </option>
      ))}
    </select>
  );
}

export default CurrencySelector;
