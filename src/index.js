// import _ from 'lodash';
import './style.css';
import add from './modules/addingfiles.js';
import newgame from './modules/newgame.js';
import load from './modules/loadingfiles.js';
import print from './modules/print.js';

const submit = document.querySelector('.submit');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const refresh = document.querySelector('.refresh');
const error = document.querySelector('.error');
const newbutton = document.querySelector('.newgame');
const popup = document.querySelector('.popup');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const closebutton = document.querySelector('.closebutton');


let key;
if (localStorage.getItem('key') === null) {
    key = 'fsXE2g6vIYQH9V5jn2Qo';
  } else {
    key = JSON.parse(localStorage.getItem('key'));
  }
submit.addEventListener('click', () => {
  function printmsg() {
    error.innerHTML = '';
    input1.value = '';
    input2.value = '';
  }

  async function additem(user, score) {
    await add(user, score, key);
    error.innerHTML = 'Score added successfully';
    setTimeout(printmsg, 3000);
  }
  if (input1.value !== '' && input2.value !== '') {
    additem(input1.value, input2.value);
  } else if (input1.value !== '') {
    error.innerHTML = 'Fill in the score';
    setTimeout(printmsg, 3000);
  } else if (input2.value !== '') {
    error.innerHTML = 'Fill in the name';
    setTimeout(printmsg, 3000);
  } else {
    error.innerHTML = 'Fill in the name and score';
    setTimeout(printmsg, 3000);
  }
});

async function loaditem() {
    const response = await load(key);
    print(response);
  }

refresh.addEventListener('click', () => {
  loaditem();
});

function openPopUp(){
    popup.classList.add("open");
}
function closePopUp(){
    popup.classList.remove("open");
}

newbutton.addEventListener('click', () => {
    openPopUp();
})

yes.addEventListener('click', () => {
    async function gamenew() {
        const response = await newgame();
        key = response.result.substring(14,34);
        localStorage.setItem('key', JSON.stringify(key));
        loaditem();
    }
    gamenew();
    closePopUp();
    
})

no.addEventListener('click', () => {
    closePopUp();
})

closebutton.addEventListener('click', () => {
    closePopUp();
})