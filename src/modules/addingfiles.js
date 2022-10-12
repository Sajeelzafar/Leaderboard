const add = (user, score, key) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/' + key + '/scores/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  }).then((res) => res.json())
    .then((output) => output);
};

export default add;