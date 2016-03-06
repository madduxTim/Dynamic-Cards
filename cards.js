var create = document.getElementById("createButton");
var del = document.getElementsByClassName("deleteButton"); /* this is an array */
var input = document.getElementById("textInput");
var outputArea = document.getElementById("outputArea");
var card = document.getElementsByClassName("card"); /* this is an array */

create.addEventListener("click", createCard);
function createCard() {
    var output = "<div class='card'><section><p class='text'>" + input.value + "</p></section><input type='button' class='deleteButton' value='Delete'></div>"; 
    outputArea.innerHTML += output;
    for (var i = 0; i<del.length; i++ ) {
    del[i].addEventListener('click', deleteCard);
    }
};

function deleteCard () {
    if (this.parentNode.parentNode) {
      this.parentNode.parentNode.removeChild(this.parentNode);
    }
};