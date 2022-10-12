const add = (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fsXE2g6vIYQH9V5jn2Qo/scores/', {
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