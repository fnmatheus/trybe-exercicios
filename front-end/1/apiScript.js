// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch('https://icanhazdadjoke.com/', myObject)
    .then((response) => response.json())
    .then((data) => showJoke(data.joke))
    .catch((error) => console.log(`Deu erro: ${error}`));
};

const showJoke = (joke) => {
  const jokeText = document.getElementById('jokeContainer');
  jokeText.innerText = joke;
}

window.onload = () => fetchJoke();