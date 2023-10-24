// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length
  }
  printNumbers() {
    //print the numbers in data
    console.table(this.data)
  }
  odds() {
    //return the odd numbers in data
    let oddNums = []
    for ( let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 === 1) {
        oddNums.push(this.data[i])
      }
    }
    return oddNums
  }
  evens() {
    //return the even numbers in data
    let evenNums = []
    for ( let i = 0; i < this.data.length; i++) {
      if (this.data[i] % !2 === 1) {
        evenNums.push(this.data[i])
      }
    }
    return evenNums
  }
  
  sum() {
    //return the sum of the numbers
    return this.data.reduce((total, current) => total + current)
  }
  product() { //multipling the numbers out
    //return the product of the numbers
    /*let prod = 1 //when using multiplication. Start at 1
    for (let index = 0; index < this.data.length; index++) {
      prod = prod * this.data[index]
      
    }*/

    return this.data.reduce((acc,num) => acc * num)
  }
  greaterThan(target) {
    //return the numbers greater than the target
    this.data.filter((num) => num > target) // only keeps the ones larger <--- did not know this one 
  }
  
  howMany(target) {
    //return the count of a given number

    let count = 0
    this.data.forEach((number) => {
      if (number == target) {
        count += 1
      }
    })

    return count
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number