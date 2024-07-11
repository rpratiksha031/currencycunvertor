import { useEffect, useState } from "react";
function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setfromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  useEffect(
    function () {
      async function convert() {
        // setIsloading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
      }
      if (fromCur === toCur) return setConverted(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );
  return (
    <div className="div">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="input"
      />
      <select
        value={fromCur}
        onChange={(e) => setfromCur(e.target.value)}
        className="select1"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        className="select2"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        Converted value:{converted} {toCur}
      </p>
    </div>
  );
}

export default App;
