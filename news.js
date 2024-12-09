const newsEl = document.getElementById("newsfeed");

const carrer = ["Yourtuber"];

let carrerIndex = 0;
let characterIndex = 0;

function updateText () {


newsEl.innerHTML = `
<p > I'm a web development enthusiast currently pursuing a degree in BSIT. 
        My passion lies in creating responsive, user-friendly websites and applications. 
        With a growing skill set in HTML, CSS, JavaScript, and modern frameworks, 
        I’m always eager to learn more and tackle new challenges in the web development world. ${carrer[carrer.index].slice(0,characterIndex)} </p>`;
        characterIndex++
        setTimeout(updateText, 400);
    }