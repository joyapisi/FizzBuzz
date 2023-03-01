module.exports = function () {
    // write your code here
  let fizzBuzz = [];
    for (let i = 1; i <= 100; i++) {
      // check if the number is a multiple of 3 and 5
      if(i % 3 === 0 && i % 5 === 0) {
        fizzBuzz.push('FizzBuzz')
      } // check if the number is a multiple of 3
        else if(i % 3 === 0) {
       fizzBuzz.push('Fizz')
      } // check if the number is a multiple of 5
        else if(i % 5 === 0) {
        fizzBuzz.push('Buzz')
      } else {
        fizzBuzz.push(i)
      }
    }
  return fizzBuzz;
  }