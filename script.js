const cells = document.querySelectorAll(".cell")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn") 




const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = [
    "", "","",
    "", "","",
    "", "","",
]; 








let currentPlayer = "X"; 


let running = "false";



function initGame(){
    togglePlayer();
    
    
    
    restartBtn.addEventListener("click", restart);
    
    running = true; 


}

// setup for creating an event listener for clicking of each "cell" or created div 

initGame();
   








function togglePlayer(){
        cells.forEach(cell => {
             cell.addEventListener('click', () =>{
        
            
            currentPlayer = (currentPlayer == "X") ? "O" : "X";
            
            cell.innerText = currentPlayer;
    
            
            
    
    })
})
}     

function restart(){
    cells.forEach(cell => cell.textContent = "");
}



/* function checkForWin(){
    const allCells = document.querySelectorAll(".cell"); 
    
    const winCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]

    winCombo.forEach(array => {
        const circleWins = array.every(cell => 
            allCells[]
        )
    })
} */



/* function checkForWin(){
    let roundWin = false; 

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i]; 
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWin = true; 
            break; 
        }
    }

    if(roundWin){
        statusText.innerText = `${currentPlayer} wins`;
        running = false; 
    }else if (!options.includes("")){
        statusText.innerText = "Draw";
    }
}       */





