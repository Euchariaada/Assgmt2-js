//a for loop that returns an array of even numbers from 1-100
function evenNumbers() {
    for (let i=1; i<=100; i++) {
        if(i % 2 === 0) {
            console.log(i)
        }    
    }
}
evenNumbers()

//a function that returns even numbers between two numbers A and B
function returnEvenNum(a,b) {
    for(let i = a; i<=b; i++) {
        if(i%2===0) {
            console.log(i)
        }
    } 
  }
  returnEvenNum(13,47)


//When would you use a conditional statement?
//Ans.  (d) when you want to loop through a group of statements.

//Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)
function firstFunction(num1, num2) {
    result = num1 * num2
    return result
}
firstFunction(3,8)

//Create a function with a function name printSum( ) and print the sum of two numbers.
function printSum(firstNum, SecondNum) {
    answer = firstNum + SecondNum
    return answer
}
printSum(13,61)

//Create a function that returns an array of the names of 10 of your course mates
function myPeersNames() {
    const names = ["Olayinka Bakare", "Victoria Abodunrin", "Victor Olorunsola",
                "Unyime Usen", "Segun Alofun", "Omokolade Abisoye", 
                "Oluwasegun Mesaiyete", "Okeyemi Henry", "Ojezele Edobo", "Foluso Ojo"]
    console.log(names)
}
myPeersNames()

//Add an element to the end of this array [1,2,4]
let myArray = [1,2,4]
myArray.push(8)
console.log(myArray)

//Remove the last element in this array [1,2,3,8]
let myNumbers = [1,2,3,8]
myNumbers.pop(8)
console.log(myNumbers)

//Remove the first element in this array [23.77,80,45]
let myShiftNumber = [23.77,80,45]
myShiftNumber.shift()
console.log(myShiftNumber)

// Add an element to the beginning of the array [[20,30,80],[10,50,55]]
let myUnshift = [[20,30,80],[10,50,55]]
myUnshift.unshift(70)
console.log(myUnshift)
