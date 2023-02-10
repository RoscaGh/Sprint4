// ==============Solution for Object task ==================
let student={   FName: "John",
                LName: "Smith",
                AvgScore: 8.7};
console.log("6. Object student ");
console.log(`${student.FName} ${student.LName} - ${student.AvgScore}`);
//=================Solution for array of object =========================
let students=[  { FName: "John", LName: "Smith", AvgScore: 8.7},
                { FName: "Chilaru", LName: "Ion", AvgScore: 3.45},
                { FName: "Babuci", LName: "Vasile", AvgScore: 5.67},
                { FName: "Prepelița", LName: "Iana", AvgScore: 2.22},
                { FName: "Burac", LName: "Aliona", AvgScore: 9.80},
                { FName: "Chipăruș", LName: "Maxim", AvgScore: 2.75},
                { FName: "Bostan", LName: "Virgil", AvgScore: 4.35},
                { FName: "Curichere", LName: "Eugen", AvgScore: 5.00},
                { FName: "Alexei", LName: "Teofil", AvgScore: 10.00},
                { FName: "Țurcanu", LName: "Daniel", AvgScore: 9.47}];
let aboveGPA = [];
let belowGPA = [];
// Select students with AVG>=5
students.forEach(std => {
    if(std.AvgScore>=5)
    aboveGPA.push(std);
});
// Select student with AVG<5
students.forEach(std => {
    if(std.AvgScore<5)
    belowGPA.push(std);
});
createTabel("tab1","allStudent",students);
createTabel("tab2","aboveStudent",aboveGPA);
createTabel("tab3","belowStudent",belowGPA);


function createTabel(tab1,tabData,students){
var mdiv=document.createElement("DIV");
mdiv.setAttribute("id",tab1);
mdiv.setAttribute("class","std");
document.getElementById("stud").appendChild(mdiv);
var tb = document.createElement("TABLE");
tb.setAttribute("id", tabData);
mdiv.appendChild(tb);
tb.setAttribute("class","student");
addRow(tabData);
addHead(tabData,"First name");
addHead(tabData,"Last name");
addHead(tabData,"Average");
students.forEach(std => {
    addRow(tabData);
    for (const key in std) {
        if (std.hasOwnProperty.call(std, key)) {
            addCell(tabData,std[key]);
            
        }
    }
});
}