const words = [
    "Web Developer",
    "B.Tech Student",
    "Frontend Designer"
];

let index = 0;

const typing = document.querySelector(".typing");

setInterval(() => {

    typing.textContent = words[index];

    index++;

    if(index >= words.length){
        index = 0;
    }

},2000);