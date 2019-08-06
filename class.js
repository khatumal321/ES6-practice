var subject1 = +prompt("Enter your English marks");
var subject2 = +prompt("Enter your Chemistry marks");
var subject3 = +prompt("Enter your physics marks");
var subject4 = +prompt("Enter your maths marks");
var subject5 = +prompt("Enter your urdu marks");

class AllSubject {
    constructor(subject1 , subject2 , subject3 , subject4 , subject5) {
        this.subject1 = subject1;
        this.subject2 = subject2;
        this.subject3 = subject3;
        this.subject4 = subject4;
        this.subject5 = subject5;
    }
    funcPerc() {
        let totalSubject = subject1 + subject2 + subject3 + subject4 + subject5;
        let percentage = (totalSubject / 500) * 100;
        let marks1 = "";
        if(percentage > 80) {
            marks1 = "Congratulation your grade is A+";
        }
        else if(percentage >= 70 && percentage < 80 ) {
            marks1 = "Congratulation your grade is A" + "  " + percentage + "%";
        }
       else if(percentage >= 60 && percentage < 70 ) {
            marks1 = "Congratulation your grade is B" + "  " + percentage + "%";
        }
       else if(percentage >= 50 && percentage < 60 ) {
            marks1 = "Congratulation your grade is C" + "  " + percentage + "%";
        }
        else{
            marks1 = "<h1>" + "Sorry! you are fail" + "  " + percentage + "%" + "</h1>";
        }
        return marks1;

    }
}



let data = new AllSubject(subject1 , subject2 , subject3 , subject4 , subject5);
document.write("<h1 id='css'>" + data.funcPerc() +"</h1>");