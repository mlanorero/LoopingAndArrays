let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
par.forEach( e => counts[e] = 0 );
const letters = par.split("");
const results = letters.reduce( (acc, curr) => {
        if (acc.hasOwnProperty(curr)) { acc[curr] += 1; }
  return acc;
}, counts);

console.log(counts);