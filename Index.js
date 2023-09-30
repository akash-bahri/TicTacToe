//
class Game {
    constructor(Player, DataArray, Counter) {
        this.Player = Player;
        this.DataArray = DataArray;
        this.Counter = Counter;
    }

    Analyze(GridVal) {
        
        var PlayerValue=this.Player;
        
        //document.getElementById("test").innerText=GridVal;
        this.Counter++;
        document.getElementById(GridVal).innerText=PlayerValue;
        document.getElementById(GridVal).disabled=true;
        document.getElementById(GridVal).style.backgroundColor="lightgrey";
        this.DataArray[GridVal] = PlayerValue;
        if (this.Counter<5) return false;
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
        //document.getElementById("test").innerText="checkwinner";
        if (this.DataArray[G1] == this.DataArray[G2] & this.DataArray[G2] == this.DataArray[G3] & this.DataArray[G1] != undefined)
            {
                document.getElementById(G1).style.backgroundColor="green";
                document.getElementById(G2).style.backgroundColor="green";
                document.getElementById(G3).style.backgroundColor="green";
                return true;
            }
        else return false;

    }

    Result(GridVal){
       // document.getElementById("test").innerText="result";
        if(this.Analyze(GridVal)){
            document.getElementById("result").innerText="WINNER IS: "+this.Player;
            

            var buttons=document.getElementsByClassName("button");
                for(var i = 0; i < buttons.length; i++) {
                        buttons[i].disabled = true;
}



        }
        else 
        {
            if(this.Player=='X')
            this.Player='O';
        else
            this.Player='X';
        document.getElementById("result").innerText="TURN : "+this.Player;
        }
    }

}

const NewGame = new Game('X',{},0);

