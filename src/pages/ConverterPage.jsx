import { useState } from "react";
import CurrencySelector from "../components/CurrencySelector";
import AmountDisplay from "../components/AmountDisplay";
import SwapButton from "../components/SwapButton";
import Keypad from "../components/Keypad";

function ConverterPage() {
  const [amount, setAmount] = useState("");

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col">
      
      <header className="p-4 text-center font-semibold text-lg bg-black">
        Currency Converter
      </header>

      <div className="flex-1 bg-gray-800 p-4 space-y-6">
        <div>
          <CurrencySelector />
          <AmountDisplay value={amount || "0"} />
        </div>

        <div className="flex justify-center">
          <SwapButton />
        </div>

        <div>
          <CurrencySelector />
          <AmountDisplay value="0.00" />
        </div>
      </div>

      <div className="bg-blue-700 p-4">
        <Keypad onInput={setAmount} value={amount} />
      </div>

    </div>
  );
}

export default ConverterPage;
