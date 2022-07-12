function add(x, y) {
    return x + y
}
function multiply(x, y) {
    return x * y
}
function power(x, y) {
    return x ** y
}
function factorial(x) {
    if (x < 0) 
        return -1;
  else if (x == 0) 
      return 1;
  else {
      return (x * factorial(x - 1));
  } 
}

for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {

        console.log(`a soma de ${i} + ${j} = `,add(i,j))
        console.log(`a multiplicação de ${i} x ${j} = `,multiply(i,j))
        console.log(`a potencia de ${i} elevado a ${j} = `,power(i,j))
        console.log(`o fatorial de ${i} = `,factorial(i))
    }

}

