/* Q4

*/


//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

//extra credit
for (let i = 0; i < studentList.length; i++) {
  for (let j = 0; j < studentList[i].scores.length; j++) {
    studentList[i].scores[j] += 5;
  }
}

for (let i = 0; i < studentList.length; i++) {
  let _sum = 0;
  for (let j = 0; j < studentList[i].scores.length; j++) {
    _sum += studentList[i].scores[j];
  }
  const _avg = _sum / studentList[i].scores.length;
  studentList[i].scores.push(_avg);
}

for (let i = 0; i < studentList.length; i++) {
  const _firstName = studentList[i].firstName;
  const _lastName = studentList[i].lastName;
  const _scores = studentList[i].scores;
  console.log("Full name: " + _lastName + ", " + _firstName + "\nUpdated scores are: " + _scores.join(", "))
}