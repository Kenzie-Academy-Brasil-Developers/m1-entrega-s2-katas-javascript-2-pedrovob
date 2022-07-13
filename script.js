function add(num1, num2) {
 let soma = num1 + num2

return soma
}


console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');



function multiply(num1, num2) {
 let result = 0
for (let counter = 1; counter <= num1; counter++) {
 result += add(num2, 0)
 }
 return result
}


console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');



function power(x, n) {
let result = x
for (let counter = 1; counter < n; counter++) {

 result = multiply(x, result)
}
  return result
}

console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


function factorial(num) {
if (num <= 1) {
return 1
} else {
 return num * factorial(num - 1)
 }

}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado')