let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#m");



let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGmae =()=>{
    enableboxes();
    turnO=true;
   msgContainer.classList.add("msg");
   count = 0;

    
}

let count=0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("helo")
        if (turnO) {
            box.innerHTML = "O";
                        box.style.color= "#054498ff";

            turnO = false;
        }
        else {
            box.innerHTML = "X";
            box.style.color= "#ae2012";
            turnO = true;
        }
        box.disabled =true;
count++;
       let winner= checkWinner();
        
        if(count ===9 && ! winner){
            draw()
        }
    });
});


const enableboxes= ()=>{
  for(let box of boxes){
        box.disabled =false;
        box.innerText="";
  }
};

const disabledboxes= ()=>{
  for(let box of boxes){
        box.disabled =true;
  }
};
const showWinner= (winner)=>{
  msg.innerText = `Congratulations Winner is ${winner}`
  msgContainer.classList.remove("msg");
  disabledboxes();
}

const draw= ()=>{
  msg.innerText = `Match Draw`
  msgContainer.classList.remove("msg");
  disabledboxes();
}

const checkWinner= ()=>{
    for(let patterns of winPatterns){
        let pos1= boxes[patterns[0]].innerText;
        let pos2= boxes[patterns[1]].innerText;
        let pos3= boxes[patterns[2]].innerText;

        if(pos1 != "" && pos2 !="" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("win");
                showWinner(pos1);
            }

      
        }
        
    }
}




newGame.addEventListener("click", resetGmae);
resetbtn.addEventListener("click", resetGmae);