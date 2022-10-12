// import _ from 'lodash';
import './style.css';
import add from './modules/addingfiles.js';
import load from './modules/loadingfiles.js';

const submit = document.querySelector(".submit");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const refresh = document.querySelector(".refresh");

submit.addEventListener("click", (e) => {
    
    async function additem(user, score) {
        await add(user, score);
        
    }
    if(input1.value !== "" && input2.value !== ""){
        
        additem(input1.value, input2.value);
    }
})

refresh.addEventListener("click", () => {
    async function loaditem() {
        console.log("Loading started");
        const response = await load();
        console.log("Response is", response);
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