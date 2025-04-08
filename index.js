//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order

function arrangeElements (arr1){
    let arr2 = arr1.map(word => word.toLowerCase().split("").reverse().join(""))
    arr3 = arr2.sort()
    console.log(arr3)
    let descendingArray = arr3.sort((a,b) => (a>b))
    return descendingArray
}
arrangeElements(["red","yellow","green","blue","orange"])

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
const integers = (arrNumbers)  => {

    arrNumbers = [10,20,0,-20,0,60,-45,-56,0]
     return arrNumbers.map((num,index) =>{
     if (num>0){
        return `${index} is positive`
     }else if(num<0){
        return `${index} is negative`
     } else{
        return `${index} is zero`
     }});

}
console.log(integers())



//Given an array of objects, where each object represents an employee with an id, name, and salary property, 
// write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortEmployeeDetails (employeeDetails){
   return employeeDetails.sort((a,b) => (a>b))


}

let employees = [{}]

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function arrNums (arr4){
   
   return  arr4.forEach(num => num*num)
 
     
}



console.log(arrNums([10,20,30,40]))
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5.
//  Console the array with the new values

const manipulateData = (data) =>{
        const manipulatedData = []

}
