export async function fetchRates(baseCurrency) {
  const url = `${import.meta.env.VITE_CURRENCY_API_URL}?apikey=${import.meta.env.VITE_CURRENCY_API_KEY}&base_currency=${baseCurrency}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch currency rates");
  }

  const data = await response.json();
  return data.data;
}
