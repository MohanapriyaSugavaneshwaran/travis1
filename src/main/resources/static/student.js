var app=new function(){

    this.fetchall=function(){
        var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function () {
 
 if (this.readyState == 4 && this.status == 200) {
 countries = JSON.parse(xhttp.responseText);
 app.printtable();
 }
 };
 xhttp.open("GET", "http://zigwheels.herokuapp.com/api/teams/", true);
 xhttp.send();
 };

    };