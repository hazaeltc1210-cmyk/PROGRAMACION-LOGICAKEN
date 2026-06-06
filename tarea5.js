console.log("Números pares del 1 al 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Números impares del 1 al 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("Números primos del 1 al 20:");
for (let i = 2; i <= 20; i++) {
  let primo = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    console.log(i);
  }
}