//Developer: Eric Kwan

let x = [1, 2, 3, 4, 5, 6];

x.forEach((e, i) => {
    console.log({ e, i });
});

let y = x.reverse();

y.push("A");
y.push(['B', 'C']);
y.push([10, 20, 30, 40]);
let flat = y.flat();

console.log({ y,flat });
