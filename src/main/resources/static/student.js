var app=new function(){
    var student=[];
    var mode="";
    this.fetchall=function(){
        var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
 
 if (this.readyState == 4 && this.status == 200) {
 student = JSON.parse(xhttp.responseText);
 app.printtable();
 }
 };
 xhttp.open("GET", "http://localhost:8080/student/", true);
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
                var newstudent = {"id": 0, "name": name};
                alert(newstudent);
                var url = "http://localhost:8080/student/";
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                app.FetchAll();
                }
                }
                xhr.open("POST", url , true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.send(JSON.stringify(newstudent));
                app.FetchAll();
                }
                else {
                alert("update called");
                // alert("id" + id + "name " + name);
                var updatestudent = {"id": 0, "name": name};
                alert(updatestudent);
                var url = "http://localhost:8080/student/";
                var xhr = new XMLHttpRequest();
                xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == "200") {
                app.FetchAll();
                }
                }
                xhr.open("PUT", url, true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                xhr.send(JSON.stringify(updatestudent));
                document.getElementById('btn').innerHTML = "Add";
                mode = "";
                app.FetchAll();
                }
                
                document.getElementById('id').value = "";
                document.getElementById('name').value = "";
                };

    };