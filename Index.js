//
class Game {
    constructor(Player, DataArray, Counter) {
        this.Player = Player;
        this.DataArray = DataArray;
        this.Counter = Counter;
    }

    Result(GridVal) {
        
        if (this.Analyze(GridVal)) {
            if(this.Player=='X')
                document.getElementById("result").innerText = "WINNER IS: " + Player1.name;
            else
                document.getElementById("result").innerText = "WINNER IS: " + Player2.name;
            var buttons = document.getElementsByClassName("button");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true;
            }
        }
        else this.SwitchPlayer();
    }

    Analyze(GridVal) {

        //var PlayerValue = this.Player;
        this.Counter++;
        document.getElementById(GridVal).innerText = this.Player;
        document.getElementById(GridVal).disabled = true;
        document.getElementById(GridVal).style.backgroundColor = "lightgrey";
        this.DataArray[GridVal] = this.Player;
        if (this.Counter < 5) return false;
        if (this.CheckWinner(1, 2, 3)) return true;
        if (this.CheckWinner(4, 5, 6)) return true;
        if (this.CheckWinner(7, 8, 9)) return true;
        if (this.CheckWinner(1, 4, 7)) return true;
        if (this.CheckWinner(2, 5, 8)) return true;
        if (this.CheckWinner(3, 6, 9)) return true;
        if (this.CheckWinner(1, 5, 9)) return true;
        if (this.CheckWinner(3, 5, 7)) return true;

        return false;
    }

    CheckWinner(G1, G2, G3) {
        if (this.DataArray[G1] == this.DataArray[G2] & this.DataArray[G2] == this.DataArray[G3] & this.DataArray[G1] != undefined) {
            document.getElementById(G1).style.backgroundColor = "rgb(69, 200, 119)";
            document.getElementById(G2).style.backgroundColor = "rgb(69, 200, 119)";
            document.getElementById(G3).style.backgroundColor = "rgb(69, 200, 119)";
            return true;
        }
        else return false;

    }

   

    SwitchPlayer() {
        var Playername="X";
        if (this.Player == 'X')
        {
            this.Player = 'O';
            if(document.getElementById("player2").value=="")
            Player2.name = "O";
            else    
            Player2.name = document.getElementById("player2").value;            
            Playername = Player2.name;           

        }
            
        else
        {
            this.Player = 'X';
            if(document.getElementById("player1").value=="")
            Player1.name = "X";
            else
            Player1.name = document.getElementById("player1").value;
            Playername = Player1.name;
        }
        if (this.Counter == 9) {
            document.getElementById("result").innerText = "DRAW";
            var buttons = document.getElementsByClassName("button");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "rgb(150, 117, 121)";
            }

        }
        else
            document.getElementById("result").innerText = "TURN : " + Playername;
    }

    Reset() {
        var buttons = document.getElementsByClassName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].innerText = "";
            buttons[i].disabled = false;
            buttons[i].style.backgroundColor = "white";
        }
        this.Player = 'X';
        this.DataArray = {};
        this.Counter = 0;
        document.getElementById("result").innerText = "TURN : " + this.Player;
        document.getElementById("player1").value = "";
        document.getElementById("player2").value = "";
    }

}

class Player {
    constructor(name) {
        this.name = name;
    }
}

const NewGame = new Game('X', {}, 0);
document.getElementById("reset").addEventListener("click", function () {
    NewGame.Reset();
});
const Player1 = new Player('X');
const Player2 = new Player('O');

