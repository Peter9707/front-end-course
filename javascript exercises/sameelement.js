let array = [1, 2, 5, 2, 6, 2, 5, 2];
let counter = 0;
const x = 2;

for (i = 0; i < array.length; i++) {
  if (x === array[i]) {
    counter++;
  }
}

console.log(counter);
