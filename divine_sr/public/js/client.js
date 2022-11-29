

window.onload = function(){
let inputField = document.getElementById("input");
let sendButton = document.getElementById("send");


// Get user input
sendButton.addEventListener("click", getInput)

function getInput(){
    console.log(inputField.value);


// SEND TO NODE SERVER
    $.get(
        "/inputVars",
        {paramOne : inputField.value},
       // if we get a response from the server .... 
        function(response) {
           console.log(response);
        }); //get
}


}

