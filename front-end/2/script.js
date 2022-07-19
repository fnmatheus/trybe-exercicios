const cryptoList = (data) => {
  const list = document.getElementById('crypto-rank');
  data.filter((obj) => {
    if (obj.rank <= 10){
      const crypto = document.createElement('li');
      const text = `${obj.name} (${obj.symbol}): ${obj.priceUsd}`;
      crypto.innerHTML = text;
      list.appendChild(crypto);
    }
  })
}

const fetchCrypto = () => {
  fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then((data) => cryptoList(data.data))
    .catch((error) => console.log(error));
}

window.onload = fetchCrypto();
