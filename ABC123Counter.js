//Developer:  Eric Kwan

function abc(mode) {
  let abc = "abcdefghijklmnopqrstuvwxyz"
  if (mode == "A" || mode == 'Z')
    abc = abc.toUpperCase();

  abc = abc.split("");

  if (mode == 'Z' || mode == 'z')
    abc = abc.reverse();

  return abc;
}

function i(mode) {
  let result = [];
  for (let i = 0; i <= 360; i++) {
    result.push(i.toString());
  }

  if (mode === "321") {
    result.reverse();
  }

  return result;
}


function generateABC(modes) {
  let letters = modes.split("");
  let results = [];

  letters.forEach(e => {
    let alphaBets = abc(e);
    console.log(alphaBets); 
    results.push(alphaBets);
  });

  return results.flat();
}


function generate123(modes) {
  let alphaBets = i(modes);
  return alphaBets;
}



function highLight(pThis) {
  let highLight = pThis.dataset.highlight;
  console.log({ highLight, dataset: pThis.dataset })
  let highLightSelected = document.getElementById("highLightSelected");
  highLightSelected.value = highLight;


  citytech.screen.highLightDiv(highLight);

}

function countFromRadio(pthis) {
  let mode = pthis.dataset.mode;
  updatePage(mode);

  let abcGenerator = document.getElementById("abcGenerator")
  abcGenerator.value = mode;

  let highLight = document.getElementById("highLightSelected").value;
  citytech.screen.highLightDiv(highLight);
}

function updatePage(mode) {
  let divABC = document.getElementById("screen-display");
  let results = generateABC(mode);
  console.log({ results });

  divABC.innerHTML = "";

  let style = "abc";

  if (mode.includes("A") || mode.includes("Z") || mode.includes("a")||mode.includes("z")){
    results = generateABC(mode);
    if (results.length > 53) {
      style = "abcS52";
    }
    else if (results.length < 30) {
      style = "abcS26"
    }
  }else{
    results = generate123(mode);
    style = "num"
  }

  let divCount = document.getElementById("rowCount");
  divCount.innerHTML = results.length;

  results.forEach(e => {
    let newElement = document.createElement('div');
    newElement.innerHTML = e;
    newElement.classList.add(style);
    divABC.appendChild(newElement);
  })
}