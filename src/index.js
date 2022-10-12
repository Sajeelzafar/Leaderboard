// import _ from 'lodash';
import './style.css';
import add from './modules/addingfiles.js';
import load from './modules/loadingfiles.js';
import print from './modules/print.js';

const submit = document.querySelector('.submit');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const refresh = document.querySelector('.refresh');
const error = document.querySelector('.error');

submit.addEventListener('click', () => {
  function printmsg() {
    error.innerHTML = '';
  }

  async function additem(user, score) {
    await add(user, score);
    error.innerHTML = 'Score added successfully';
    setTimeout(printmsg, 3000);
  }
  if (input1.value !== '' && input2.value !== '') {
    additem(input1.value, input2.value);
  } else if (input1.value !== '') {
    error.innerHTML = 'Fill in the score';
  } else if (input2.value !== '') {
    error.innerHTML = 'Fill in the name';
  } else {
    error.innerHTML = 'Fill in the name and score';
  }
});

refresh.addEventListener('click', () => {
  async function loaditem() {
    const response = await load();
    print(response);
  }

  loaditem();
});

// import newgame from './modules/newgame.js';

// async function gamenew() {
//     const response = await newgame();
//     alert("The key is", reponse.result.key)
// }

// gamenew();
