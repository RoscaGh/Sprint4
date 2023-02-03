const n=10;
let myNumber=initArray(n);

var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
x.setAttribute("class", "wr3");
document.getElementById("myDiv").appendChild(x);

// =============For statement ============
addRow("myTable");
addCell("myTable","For");
for(i=0;i<myNumber.length;i++){
        addCell("myTable",myNumber[i]);
}
// ====================While Stetement==================
addRow("myTable");
addCell("myTable","While");
i=0;
while(i<myNumber.length){
        addCell("myTable",myNumber[i++]);
}
// ==================For of stetement ==================
addRow("myTable");
addCell("myTable","For of");
i=0;
for (const i of myNumber) {
        addCell("myTable",i);
}
// =============Foreach =======================
addRow("myTable");
addCell("myTable","Foreach");
i=0;
myNumber.forEach(element => {
        addCell("myTable",element);
});
// ===========Color problem============
const colors=["green", "red", "yellow", "orange","blue"];
console.log(`const colors=["green", "red", "yellow", "orange","blue"]`);
console.log(getColorIndex("green"));
x = document.createElement("TABLE");
x.setAttribute("id", "myColors");
x.setAttribute("class", "wr3");
document.getElementById("divColors").appendChild(x);
addRow("myColors");
addCell("myColors","Array Colors");
        for (const color of colors) {
                addCell("myColors",color);                
        }
// =================FUNCTION ===================
function showColor(){
        color=document.getElementById("lcolor").value;
        var ix=getColorIndex(color);
        document.getElementById("Show_color").innerHTML=ix;
}
function getColorIndex(color){
    for (const key in colors) {
        if (colors[key]==color) return key;
    }
    return -1;
}
function initArray(n){
    var myArray=[];
    for(i=0;i<n;i++)
    myArray[i]=Math.round(Math.random()*100);
    return myArray;
}
function addRow(myTable){
        var y = document.createElement("TR");
        document.getElementById(myTable).appendChild(y);
}
function addCell(myTable,data){
        var rows=document.getElementById(myTable).getElementsByTagName('tr');;
        var lastrow = rows[rows.length - 1];
        var dt = document.createElement("TD");
        var tx = document.createTextNode(data);
        dt.appendChild(tx);
        lastrow.appendChild(dt);
}
function addHead(myTable,data){
        var rows=document.getElementById(myTable).getElementsByTagName('tr');;
        var lastrow = rows[rows.length - 1];
        var dt = document.createElement("TH");
        var tx = document.createTextNode(data);
        dt.appendChild(tx);
        lastrow.appendChild(dt);
}