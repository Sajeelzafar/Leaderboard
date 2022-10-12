const load = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fsXE2g6vIYQH9V5jn2Qo/scores/')
  .then((res) => res.json())
  .then((output) => output);

export default load;