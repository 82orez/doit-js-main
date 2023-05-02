class Lecture {
  constructor(hasTutor, lecID, members) {
    this.hasTutor = hasTutor;
    this.lecID = lecID;
    this.members = members;
  }
}

function getStudents(classRoom) {
  let {hasTutor, lecID, members} = classRoom;
  let tutor, students;
  hasTutor ? [tutor,...students] = members : [...students] = members; 
  return students;
}

let class1 = new Lecture(false, 'L001', ["Ahn", "Han", "Park"]);
let class2 = new Lecture(true, 'L002', ["Lee", "Choi", "Kim"]);

console.log(`강의 : ${class1.lecID}, 수강생 : ${getStudents(class1)}`);
console.log(`강의 : ${class2.lecID}, 수강생 : ${getStudents(class2)}`);