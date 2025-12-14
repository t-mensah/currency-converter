export async function fetchRates(from, to, amount) {
  const res = await fetch(
    `https://api.exchangerate-api.com/v4/latest/${from}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch rates");
  }

  const data = await res.json();
  const rate = data.rates[to];

  return (Number(amount) * rate).toFixed(2);
}
