let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if(turnO){
            box. innerText =  "O";
            turnO = false;
        }
        else{
            box. innerText =  "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for( box of boxes){
        box.disabled = true;

    }
};
const enabledBoxes = () => {
    for( box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

// const checkWinner = () => {
//     for (let pattern of winpatterns){
//         let pos1val = boxes[pattern[0]].innerText
//         let pos2val = boxes[pattern[1]].innerText
//         let pos3val = boxes[pattern[2]].innerText

//         if(pos1val != "" && pos2val != "" && pos3val != ""){
//             if(pos1val==pos2val && pos2val==pos3val){
                
//                 showWinner(pos1val);
                
//             }
//         }
//     } 
    
// };

const checkWinner = () => {
    let winnerFound = false;

    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            winnerFound = true;
            break;
        }
    }

    // Agar winner nahi mila aur sabhi boxes fill ho chuke hain
    if (!winnerFound) {
        let allFilled = [...boxes].every(box => box.innerText !== "");
        if (allFilled) {
            msg.innerText = "😅 It's a draw!";
            msgContainer.classList.remove("hide");
        }
    }
};
    



newGameBtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);

