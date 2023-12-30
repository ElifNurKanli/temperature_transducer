import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const convertToFahrenheit = () => {
    const fahrenheitValue = (parseFloat(number) * 9) / 5 + 32;
    setConvertedValue(fahrenheitValue.toFixed(2)); // Dönüşüm sonucunu saklamak için state'i güncelleme
  };

  const convertToKelvin = () => {
    const kelvinValue = parseFloat(number) + 273.15;
    setConvertedValue(kelvinValue.toFixed(2)); // Dönüşüm sonucunu saklamak için state'i güncelleme
  };

  return (
    <div>
      <input
        type="number"
        id="numberInput"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        style={{
          margin: "0 auto",
          width: "50%",
          height: "35px",
          textAlign: "center",
          marginTop: "250px",
          marginLeft: "350px",
        }}
        placeholder="°C"
      />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          type="button"
          id="clickButtonFahrenheit"
          style={{
            margin: "0 auto",
            width: "20%",
            height: "60px",
            textAlign: "center",
            marginTop: "50px",
            marginLeft: "380px",
          }}
          onClick={convertToFahrenheit}
        >
          Convert to Fahrenheit
        </button>
        <button
          type="button"
          id="clickButtonKelvin"
          style={{
            margin: "0 auto",
            width: "20%",
            height: "60px",
            textAlign: "center",
            marginTop: "50px",
            marginRight: "430px",
          }}
          onClick={convertToKelvin}
        >
          Convert to Kelvin
        </button>
      </div>
      <input
        value={convertedValue}
        style={{
          margin: "0 auto",
          width: "20%",
          height: "35px",
          textAlign: "center",
          marginTop: "50px",
          marginLeft: "550px",
        }}
        placeholder="Result"
        readOnly
      />
    </div>
  );
}

export default App;
