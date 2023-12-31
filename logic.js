//Generate a number between 1 to 100
let randomInteger = Math.floor(Math.random() * 100 + 1);

document.getElementById("button").onclick = function(){
    //Get value from text and convert to int
    let number = parseInt(document.getElementById("num").value, 10);

    if (isNaN(number)) {
        alert('Please enter a valid number');
    } else {
        if (number === randomInteger) {
            //You win
            document.getElementById("name").innerHTML = "You Win";
            setTimeout(function() {
                location.reload();
            }, 2000);
        } else if (number < randomInteger) {
            //Too low
            document.getElementById("name").innerHTML = "Too Low";
        } else if (number > randomInteger) {
            //Too High
            document.getElementById("name").innerHTML = "Too High";
        }
    }
};
