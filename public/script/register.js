"use strict";

console.log("this is normal js");

let baseFunction = () => {
    alert("is jQuery move?");
}

let submitFunction = () => {
    let id_value = $("#id_value").val();
    let pw_value = $("#pw_value").val();
    let age_value = $("#age_value").val();

    $.ajax({
        url : '/login/register',
        type : 'post',
        data : { 
            id  : id_value,
            pw  : pw_value,
            age : age_value,
        }
    })

    .done((result) => {
        if(result === "already that id has exists")        
            alert(result);        
        else if(result === "you register successfully!")        
            window.location.href = "/success";        
    })

}


$(document).ready(baseFunction);