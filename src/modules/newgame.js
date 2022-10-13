const newgame = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    name: 'Cricket',
  }),
}).then((res) => res.json())
  .then((output) => output);

export default newgame;