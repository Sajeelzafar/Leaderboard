const load = (key) => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'+ key +'/scores/')
  .then((res) => res.json())
  .then((output) => output);

export default load;