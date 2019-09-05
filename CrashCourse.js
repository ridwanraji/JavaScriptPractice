// HIGHER ORDER FUNCTION

// A function that returns a function
function createmultiplier(multiplier) {
    return function(x) {
      return x * multiplier
    }
  }
  
  let doubleMe = createmultiplier(2)
  
  document.write(doubleMe(10) + "<br>")
  
  // A function that takes a function
  let colors = ["red", "orange", "yellow", "green"]
  
  colors.forEach(saysomething)
  
  function saysomething(color) {
    return document.write("Color " + color + " is a nice color <br>")
  }
  
  // RETURNS AND MUTATORS
  
  // array object data
  let student = [
    {name:"Ridwan", age: 17, level: "4th year"},
    {name:"Emmanuel", age: 18, level: "3rd year"},
    {name:"Collins", age: 15, level: "2nd year"},
    {name:"Abdul", age: 22, level: "4th year"},
    {name:"Shayla", age: 27, level: "1st year"},
    {name:"Mariam", age: 18, level: "4th year"},
    {name:"Tamara", age: 19, level: "3rd year"}
  ]
  
  // Working with map() function
  
  // will return an array of only names of student
  let ourtest = student.map(onlyname)
  
  function onlyname(x){
    return x.name
  }
  console.log(ourtest)
  
  // working with filter() function
  
  // will return an array object of studenta whose age is less than 22 and are in 4th year
  let sectest = student.filter(byage).filter(by4ylevel)
  
  // will return an array of names of student wwhose age is less than 22 and are in 4th year
  let sectest2 = student.filter(byage).filter(by4ylevel).map(onlyname)
  
  
  function byage(x) {
    return x.age <= 22
  }
  
  function by4ylevel(x) {
    return x.level == "4th year"
  }
  
  console.log(sectest)
  console.log(sectest2)
  
  function goodStanding() {
    console.log(this.name + " is in goodstanding.")
  }
  
  
  
  