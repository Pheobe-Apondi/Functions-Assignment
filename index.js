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
     return arrNumbers.map((num) =>{
     if (num>0){
        return `${num} is positive`
     }else if(num<0){
        return `${num} is negative`
     } else{
        return `${num} is zero`
     }});

}
console.log(integers())



//Given an array of objects, where each object represents an employee with an id, name, and salary property, 
// write a function that returns a new array of employee objects sorted by their salary in ascending order.

function sortEmployeeDetails (employeeDetails){

    employeeDetails= [{id:5,employeeName:"Ann Hailey",salary:40000},
        {id:6,employeeName:"Sam Kembo",salary:20000},
        {id:7,employeeName:"Kelly Rowland",salary:60000},
        {id:8,employeeName:"Alice Keys",salary:15000}]

        return employeeDetails.sort((a,b) => (a.salary-b.salary))   


}

 
console.log(sortEmployeeDetails())

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function arrNums (arr4){
   arr4= [10,20,30,40]
   arr5 = []
   arr4.forEach(function(num) {
    arr5.push(num*2)
       
   });
     
return arr5}
 console.log(arrNums())

//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5.
//  Console the array with the new values

const manipulateData = (data) =>{

    for(let i=0; i<4 && i<data.length;i++){
        data[i] *=8
    }
    for(let i=data.length-2;i<data.length;i++){
        data[i] +=5
    }
  return data
}

console.log(manipulateData([10,20,30,40,50,60,60,70,80,90,100]))
