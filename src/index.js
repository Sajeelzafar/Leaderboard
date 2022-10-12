// import _ from 'lodash';
import './style.css';
import add from './modules/addingfiles.js';
import load from './modules/loadingfiles.js';
import print from './modules/print.js';

const submit = document.querySelector(".submit");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const refresh = document.querySelector(".refresh");
const error = document.querySelector(".error");

submit.addEventListener("click", () => {

    function printmsg() {
        error.innerHTML = ""
    }
    
    async function additem(user, score) {
        await add(user, score);
        error.innerHTML = "Score added successfully"
        setTimeout(printmsg, 3000)
    }
    if(input1.value !== "" && input2.value !== ""){
        additem(input1.value, input2.value);
    }
    else if (input1.value !== ""){
        error.innerHTML = "Fill in the score"
    }
    else if (input2.value !== ""){
        error.innerHTML = "Fill in the name"
    }
    else {
        error.innerHTML = "Fill in the name and score"
    }
})

refresh.addEventListener("click", () => {
    
    async function loaditem() {
        const response = await load();
        print(response);
    }
    
    loaditem();
    
})



// import newgame from './modules/newgame.js';

// async function gamenew() {
//     console.log("starting to process");
//     const response = await newgame();
//     console.log("Response is", response);
// }

// gamenew();






/*
async function getitems{
    getresponse from API using external module
    print data
}

Eventlistener on submit button{
    async function add item{
        addresponse to API using external module
    }
}

Eventlistener on refresh button{
    async function getitems;
}
*/