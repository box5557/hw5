/* Q3 

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


function getResults(students) {
    function filterStudents(student) {
      return student.lastName[0] === "C";
    }
  
    function mapResults(student) {
      function getMinScore(scores) {
        return scores.reduce(function(min, score) {
          return score < min ? score : min;
        });
      }
  
      function getMaxScore(scores) {
        return scores.reduce(function(max, score) {
          return score > max ? score : max;
        });
      }
  
      function getAvgScore(scores) {
        var total = scores.reduce(function(sum, score) {
          return sum + score;
        }, 0);
  
        return total / scores.length;
      }
  
      return {
        firstName: student.firstName,
        lastName: student.lastName,
        minScore: getMinScore(student.scores),
        maxScore: getMaxScore(student.scores),
        avgScore: getAvgScore(student.scores),
      };
    }
  
    return students.filter(filterStudents).map(mapResults);
  }
  
  var cLastNameResults = getResults(studentList);
  
  console.log(cLastNameResults);