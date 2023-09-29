//Array that will store all input values in the grid
const array = [];

//Function to check if user has input any wrong value
function valid(array) {

    for (i = 1; i < 10; i++) {
        if (array[i] === 'X' || array[i] === 'x' || array[i] === 'O' || array[i] === 'o' || array[i] == '')
            continue;
        else
            return false;
    }
    return true;
}

//Main function performing all actions and checking who won
function analyze() {

    //Reading values and storing in array
    for (let i = 1; i < 10; i++) {
        array[i] = document.getElementById(i).value;
        //console.log("2nd"+array[i]);
        array[i] = array[i].toUpperCase();
        //console.log("2nd: "+array[i]);
    }

    //Checking input validity
    if (valid(array) == false) {
        document.getElementById('display').innerText = 'INVALID INPUT \n Please Reset!';
        document.getElementById('submit').style.backgroundColor = 'grey';
        document.getElementById('submit').disabled = true;
        return;
    }

    //Horizontal winner
    for (let i = 1; i < 8; i = i + 3) {
        if (array[i] == array[i + 1] && array[i + 1] == array[i + 2]) {
            if (array[i] != '') {
                won(array[i], i, i + 1, i + 2);
                return;
            }
        }
    }

    //Vertical winner
    for (let i = 1; i < 4; i++) {
        if (array[i] == array[i + 3] && array[i] == array[i + 6]) {
            if (array[i] != '') {
                won(array[i], i, i + 3, i + 6);
                return;
            }
        }
    }

    //Diagonal winner
    if (array[1] == array[5] && array[5] == array[9]) {
        if (array[1] != '') {
            won(array[1], 1, 5, 9);
            return;
        }
    }

    if (array[3] == array[5] && array[5] == array[7]) {
        if (array[3] != '') {
            won(array[3], 3, 5, 7);
            return;
        }
    }

    //No winner
    document.getElementById('display').innerText = "No winners. \n But hey no losers either! \n Try again?"
    document.getElementById('submit').disabled = true;
    document.getElementById('submit').style.backgroundColor = 'grey';
}

//Function to Display winner and highlight fields
function won(winner, a, b, c) {
    document.getElementById('display').innerText = " WINNER IS : " + winner;
    document.getElementById('submit').style.backgroundColor = 'grey';
    document.getElementById('submit').disabled = true;
    document.getElementById(a).style.backgroundColor = 'palegreen';
    document.getElementById(b).style.backgroundColor = 'palegreen';
    document.getElementById(c).style.backgroundColor = 'palegreen';
}

//Function to Clear all fields and enable submit button
function reset() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).value = '';
        document.getElementById(i).style.backgroundColor = 'white';
        document.getElementById('display').innerText = '';
        document.getElementById('submit').disabled = false;
        document.getElementById('submit').style.backgroundColor = 'wheat';
    }

}
