//Developer:  Eric Kwan

function abc(mode) {
  let abc = "abcdefghijklmnopqrstuvwxyz";

  if (mode == "A" || mode == "Z") {
    abc = abc.toUpperCase();
  }

  abc = abc.split("");

  if (mode == "Z" || mode == "z") {
    abc = abc.reverse();
  }

  return abc;
}

function generateABC(modes) {
  let letters = modes.split("");
  let results = [];

  letters.forEach((e) => {
    let alphabets = abc(e);
    results.push(alphabets);
  });

  return results.flat();
}

function updatePage(mode) {
  let divABC = document.getElementById("screen-display");
  let results = generateABC(mode);
  console.log({ results });

  divABC.innerHTML = "";

  let style = "abc"
  if (results.length > 26){
    style = "abcS52"
  }

  let divCount = document.getElementById("counter");
  divCount.innerHTML = results.length;

  results.forEach((e) => {
    let newElement = document.createElement("div");
    newElement.innerHTML = e;
    newElement.classList.add(style);
    divABC.appendChild(newElement);
  });
}

function countFromRadio(){
  console.log({test: new Date})
}