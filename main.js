"use strict";

function updateRowCount() {
    let divSelections = document.querySelectorAll("div.abc");
    console.log({lengthByDeveloper : divSelections.length});
    let span = document.getElementById("rowCount");
    span.innerHTML = divSelections.length;
}

function highLight() {
    let nodeSelections = document.querySelectorAll("div.abc");
    let divSelectionArray = [...nodeSelections];

    divSelectionArray.forEach(element => {
        let text = element.innerHTML;

        if (isConsonant(text)){
            element.classList.add("highLight");
        }
    });
}

function isVowel(text) {
    let pattern = /[AEIOUaeiou]/;
    let result = pattern.test(text);
    return result;
}

function isConsonant(text){
    return !isVowel(text);
}

updateRowCount();
