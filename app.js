let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-button");
let msg= document.querySelector(".winnermsg"); 
let newgamebtn= document.querySelector(".newgame");
let msgContainer= document.querySelector(".winnercontainer");

let turn0= true;

let winningpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Box has been clicked");
        if(turn0){
            box.innerText="O";
            turn0= false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    })
})

const enablegame= ()=>{
    turn0=true;
    for(let boxy of boxes){
        boxy.disabled = false;
        boxy.innerText="";
    }
    
}

const disableboxes = ()=>{
    for(let boxy of boxes){
        boxy.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText= `Congratulation the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
    

}

let checkwinner = ()=>{
    for(let winner of winningpattern){
        let pos1val=boxes[winner[0]].innerText;
        let pos2val=boxes[winner[1]].innerText;
        let pos3val=boxes[winner[2]].innerText;
        
         if(pos1val!= "" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Wohoooo winner");
                showWinner(pos1val);
            }
         }


    }

 resetbtn.addEventListener("click",enablegame);

}


