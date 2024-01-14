let boxes = document.querySelectorAll(".box");
let newgamebutton = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let resetgame1 = document.querySelector(".res");
let turnO = true; //playerX and playerO
//if true -> playerO
//if false -> playerX

const winning_pattern = 
[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const resetgame = () =>{
    turnO = true;
    msgcontainer.classList.add("hide");
    enableboxes();

}

newgamebutton.addEventListener("click", resetgame);

resetgame1.addEventListener("click", resetgame);

boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        if(turnO === true){
            box.innerText = 'O';
            event.target.style.color = "red"; // Set inner text color to red for 'O'
            turnO = false;
        }
        else{
            box.innerText = 'X';
            event.target.style.color = "black"; // Set inner text color to red
            turnO = true;
        }
        box.disabled = true; //It does not allow to change the element//Note it down
        checkWinner();
    })
})

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, ${winner} is WINNER`
    msgcontainer.classList.remove("hide");
}

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}

const checkWinner = () => {

    for(let pattern of winning_pattern){
        //Mapping of each individual button to index pf winning pattern
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        // console.log("Pattern Completed")

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value===pos2value && pos2value===pos3value){
                console.log("WINNER", pos1value)
                showWinner(pos1value);
                disableboxes();
            }
        }
    }

}

