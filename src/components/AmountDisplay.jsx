function AmountDisplay({ fromCurrency, toCurrency, amount, converted }) {
  return (
    <div className="bg-black rounded-xl p-5 text-white space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-sm">{fromCurrency}</span>
        <span className="text-4xl font-bold border-b-2 border-pink-400 pb-1">
          {amount || "0"}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm">{toCurrency}</span>
        <span className="text-4xl font-bold border-b-2 border-pink-400 pb-1">
          {converted}
        </span>
      </div>
    </div>
  );
}

export default AmountDisplay;
