let boxs = document.querySelectorAll(".box");

let reset = document.querySelector(".resetBtn");

reset.disabled = true;

let turnO = true;



let clickCount = 0;
let maxClick = 9;
    
let drawMsg =() => { 
    alert("its a draw");
}

const winPattn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        clickCount++;
        console.log(clickCount);
        if(turnO === true){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        cheakWinner();
    });
});

const cheakWinner = () => {
        for(pattern of winPattn){
            let pos1Val = boxs[pattern[0]].innerText;
            let pos2Val = boxs[pattern[1]].innerText;
            let pos3Val = boxs[pattern[2]].innerText;
           
            let draw = () => {
                if(pos1Val != pos2Val && pos2Val === pos3Val){
                    alert("draw");
                    reset.disabled = false;
                }
            }

            if(pos1Val != "" && pos2Val != "" && pos3Val  != "")
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            alert("Winner is " + pos1Val);
            reset.disabled = false;
            boxs.forEach((box) => {
                box.disabled = false;
            });
        }
            if(clickCount === maxClick) {
                draw();
            }
     
    }
     
}
