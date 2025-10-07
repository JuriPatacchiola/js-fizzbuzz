// Stampo i numeri da 1 a 100
// ma sostituendo multipli di 3 con "Fizz",
// multipli di 5 con "Buzz",
// e multipli di entrambi con "FizzBuzz".


for (let i = 1; i <= 100; i++) {
  // Se il numero è divisibile sia per 3 che per 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`il numero ${i} è FizzBuzz`);
  }

  // Se è solo divisibile per 3
  else if (i % 3 === 0) {
    console.log(`il numero ${i} è Fizz`);
  }
  // Se è solo divisibile per 5
  else if (i % 5 === 0) {
    console.log(`il numero ${i} è Buzz`);
  }

  // Se non è divisibile né per 3 né per 5
  else {
    console.log(i);
  }
}