const storedList = document.querySelector(".storedList")
const print = (users) => {
    storedList.innerHTML = "";
    users.result.forEach(element => {
        const newli = document.createElement('li');
        newli.innerHTML = element.user + ": " + element.score;
        storedList.appendChild(newli);
    });

}

export default print;