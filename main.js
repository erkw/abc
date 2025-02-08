console.log({Developer: "Eric Kwan", date: new Date()})

let students = [
    {emplid: "1000", score : 95},
    {emplid: "2000", score : 85},
    {emplid: "3000", score : 75},
    {emplid: "4000", score : 65}];

    function getGPA(score) {
        let myGrade = "F";
    
        if (score > 92)
            myGrade = "A";
        else if (score > 82)
            myGrade = "B";
        else if (score > 70)
            myGrade = "C";
        else if (score < 70)
            myGrade = "D";
    
        return myGrade;
    }
    
    
    let grade = getGPA(students[0].score);
    students[0].letterGrade = grade;
    
    grade = getGPA(students[1].score);
    students[1].letterGrade = grade;
    
    grade = getGPA(students[2].score);
    students[2].letterGrade = grade;
    
    grade = getGPA(students[3].score);
    students[3].letterGrade = grade;
    

console.log({students});