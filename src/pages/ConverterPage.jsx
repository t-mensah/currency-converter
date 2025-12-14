import { useEffect, useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import AmountDisplay from "../components/AmountDisplay";
import Keypad from "../components/Keypad";
import SwapButton from "../components/SwapButton";
import { fetchRates } from "../hooks/useExchangeRate";

function ConverterPage() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GHS");
  const [amount, setAmount] = useState("1");
  const [converted, setConverted] = useState("0");

  useEffect(() => {
    if (!amount) return;

    fetchRates(fromCurrency, toCurrency, amount)
      .then(setConverted)
      .catch(() => setConverted("—"));
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="flex-1 bg-blue-500 rounded-t-3xl px-5 pt-6 pb-8 space-y-5">
      <AmountDisplay
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        amount={amount}
        converted={converted}
      />

      <SwapButton onClick={swapCurrencies} />

      <CurrencySelector value={fromCurrency} onChange={setFromCurrency} />
      <CurrencySelector value={toCurrency} onChange={setToCurrency} />

      <Keypad value={amount} onChange={setAmount} />
    </div>
  );
}

export default ConverterPage;
