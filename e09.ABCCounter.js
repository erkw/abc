//Developer: Eric Kwan

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

let letters = generateABC("aZzA");
console.log({ letters, size: letters.length });
