import {useEffect, useState} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/tickers");
      const json = await res.json()

      setCoins(json)
      setLoading(false)
    };
    fetchCoins();
  }, [])

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  }
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      const res = input / select;
      setPrice(res)
    }
  }
  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
  }


  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <div>
        <input onChange={handleChangeInput} onKeyUp={handleKeyUp}/>
      </div>
      <div>
        <h2>얼만큼 살 수 있게~? : {price} </h2>
      </div>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleChangeSelect}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
