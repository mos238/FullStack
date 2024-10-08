/* 
Our solution is written as a function expression and uses string interpolation, 
but it would be equally acceptable to use a function declaration and/or string concatenation
*/

const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
        let dateToday = new Date();
        let thisYear = dateToday.getFullYear();
    // It is totally ok if your function used the current year directly!
      
        const yearDifference = year - thisYear
        const newAge = age + yearDifference
        if (newAge > age) {
            return `You will be ${newAge} in the year ${year}`
        } else if (newAge < 0) {
            return `The year ${year} was ${-newAge} years before you were born`
        } else {
            return `You were ${newAge} in the year ${year}`
        }
    }
    // Examples of usage:
console.log(howOld(49, 2030));  // Future case
console.log(howOld(49, 1990));  // Before birth case
console.log(howOld(49, 2010));  // Past case