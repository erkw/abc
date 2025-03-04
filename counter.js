//Developer: Eric Kwan

"use strict";

(function (citytech) {
  citytech.screen = citytech.screen || {};

  const querySelectorAll = "#screen-display > div";

  function clear() {
    let nodeSelections = document.querySelectorAll(querySelectorAll);
    let divSelectionsArray = [...nodeSelections];

    divSelectionsArray.forEach((element) => {
      element.classList.remove("highLight");
    });
  }
  citytech.screen.highLightDiv = function (mode) {
    clear();

    let method = undefined;
    switch (mode) {
      case "v":
        method = isVowel;
        break;
      case "c":
        method = isConsonant;
        break;
      case "a":
        method = isLetter;
        break;
      case "e":
        method = isEven;
        break;
      case "o":
        method = isOdd;
        break;
      case "5":
        method = isMultipleOf5;
        break;
      default:
        method = clear;
        break;
    }

    let nodeSelections = document.querySelectorAll(querySelectorAll);
    let divSelectionsArray = [...nodeSelections];

    divSelectionsArray
      .filter((e) => method(e.innerHTML))
      .forEach((element) => element.classList.add("highLight"));
  };

  function isVowel(text) {
    let pattern = /[AEIOUaeiou]/;
    let result = pattern.test(text);
    return result;
  }

  function isLetter(text) {
    let pattern = /[A-Za-z]/;
    let result = pattern.test(text);
    return result;
  }

  function isConsonant(text) {
    return !isVowel(text) && isLetter(text);
  }

  function isEven(text) {
    const number = parseInt(text, 10);
    return !isNaN(number) && number % 2 === 0;
  }

  function isOdd(text) {
    const number = parseInt(text, 10);
    return !isNaN(number) && number % 2 !== 0;
  }

  function isMultipleOf5(text) {
    const number = parseInt(text, 10);
    return !isNaN(number) && number % 5 === 0;
  }
})((window.citytech = window.citytech || {}));
