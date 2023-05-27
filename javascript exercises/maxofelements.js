let array = [1, 20, 15, 4];
let max = 0;

for (i = 0; i < array.length; i++) {
  if (max < array[i]) {
    max = array[i];
  }
}

console.log(max);
