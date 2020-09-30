var students_list=[];
function submitting(){
    for(var i=1; i<5; i++){
    var names=document.getElementById(i+"_name").value;
    console.log(names);
    students_list.push(names);
    }
    console.log(students_list);
    var names_list_1=[];
    for(var j=0; j<students_list.length; j++){
        names_list_1.push("<h4> Name - " + students_list[j] + "</h4>");
        console.log(names_list_1);
    }
    document.getElementById("names_display").innerHTML=names_list_1;
    var names_list_2=names_list_1.join("");
    console.log(names_list_2);
    document.getElementById("names_display_2").innerHTML=names_list_2;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students_list.sort();
    console.log(students_list);
    var names_list_3=[];
    for(var k=0; k<students_list.length; k++){
        names_list_3.push("<h4> Name - " + students_list[k] + "</h4>");
        console.log(names_list_3);
    }
    document.getElementById("names_display_2").innerHTML=names_list_3.join("");
}