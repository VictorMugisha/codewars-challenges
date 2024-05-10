/*
 We will be receiving array of objects
*/
class Student {
    constructor(name, fives, tens, twenties) {
      this.name = name;
      this.fives = fives;
      this.tens = tens;
      this.twenties = twenties;
    }
  }
  
  function mostMoney(students) {
    // your code here
    let topStudent = ""
    let amounts = []
    for (let student of students) {
        let total = 0
        total += student.fives * 5 + student.tens * 10 + student.twenties * 20
        let amount = {
            stName: student.name,
            stMoney: total
        }
        amounts.push(amount)
    }
    
    let sortedStudents = amounts.sort((a, b) => b.stMoney - a.stMoney)
    
    let mostStudent = sortedStudents[0]
    let res = sortedStudents.every((student) => student.stMoney === mostStudent.stMoney && sortedStudents.length !== 1) ? "all" : mostStudent.stName
    
    console.log(res)
  }
  const andy = new Student("Andy", 0, 0, 2);
  const stephen = new Student("Stephen", 0, 4, 0);
  const eric = new Student("Eric", 8, 1, 0);
  const david = new Student("David", 2, 0, 1);
  const phil = new Student("Phil", 0, 2, 1);
  const cam = new Student("Cameron", 2, 2, 0);
  const geoff = new Student("Geoff", 0, 3, 0);
  
  // "What happens if one student has the most money?"
  mostMoney([andy, stephen, eric, david, phil])
  mostMoney([cam, geoff, andy, stephen, eric, david, phil])
  
  console.log("")
  mostMoney([andy])
  mostMoney([stephen])
      
  console.log("")
  // "What happens if all students have the same amount of money?"
  mostMoney([cam, geoff])
  mostMoney([david, cam, geoff])
  
  
  
  