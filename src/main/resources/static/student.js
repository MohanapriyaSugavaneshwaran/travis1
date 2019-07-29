var app=new function(){
        var student="";

    this.fetchall=function(){
        var xhttp = new XMLHttpRequest();        
 xhttp.onreadystatechange = function () {
 
 if (this.readyState == 4 && this.status == 200) {
 student = JSON.parse(xhttp.responseText);
 app.printtable();
 }
 };
 xhttp.open("GET", "https://travis1.herokuapp.com/student/", true);
 xhttp.send();
 };

 this.printtable = function () {
        // console.log(student);
        var data = '';
        for (var i in student) {
        data += '<tr>';
        data += '<td>' + student[i].id + '</td>';
        data += '<td>' + student[i].name + '</td>';
        data += '<td><button onclick="app.Edit(' + student[i].id + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + student[i].name + ')">Delete</button></td>';
        data += '</tr>';
        data += '<br>';
        data += '<br>';
        }
        document.getElementById("student").innerHTML = data;
}

    }; 