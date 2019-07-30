var app=new function(){
    var student=[];
    var mod="";
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
        };
        
        this.Edit = function (id) {
        mode = "edit";
        document.getElementById('btn').innerHTML = "Update";
        for (var i = 0; i < student.length; i++) {
        
        if (student[i].id == id) {
        // alert(id);
        document.getElementById('id').value = student[i].id;
        document.getElementById('name').value = student[i].name;
        }
        }
        };

        this.saveorupdate = function () {
                var id = document.getElementById('id').value;
                var name = document.getElementById('name').value;
                if (mode == "") {
                alert("save called");
                // {"id": 0, "name": "TeamIndia"}
                var newStudent = {"id": 0, "name": name};
                alert(newStudent);
                var url = "https://travis1.herokuapp.com/student/";
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                app.FetchAll();
                }
                }
                xhr.open("POST", url , true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.send(JSON.stringify(newStudent));
                app.FetchAll();
                }
                else {
                alert("update called");
                // alert("id" + id + "name " + name);
                var updateStudent = {"id": 0, "name": name};
                alert(updateStudent);
                var url = "https://travis1.herokuapp.com/student/";
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                app.FetchAll();
                }
                }
                xhr.open("PUT", url, true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.send(JSON.stringify(updateStudent));
                document.getElementById('btn').innerHTML = "Add";
                mode = "";
                app.FetchAll();
                }
                
                document.getElementById('id').value = "";
                document.getElementById('name').value = "";
                };
               

    };