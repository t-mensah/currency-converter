import ConverterPage from "./pages/ConverterPage";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-black flex justify-center">
      <div className="w-full max-w-sm flex flex-col">
        <header className="text-white text-center py-5 text-lg font-semibold">
          Currency Converter
        </header>

        <ConverterPage />
      </div>
    </div>
  );
}

export default App;
