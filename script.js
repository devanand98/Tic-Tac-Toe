let statusDiv=document.querySelector('.status');
let resetDiv = document.querySelector('.reset');
let cellDivs = document.querySelectorAll('.gameCell');



//Game Variables
let gameIsLive = true;
let xIsNext = true;


//Event Handlers
let handleReset =  (e)=>{
    console.log(e);
};

let cellClick = (e)=>{
    let location = e.target.classList[1];
    console.log(location);

    if(e.target.classList[2]=== 'x' || e.target.classList[2]=== 'o' ){
        return
    }

    if( xIsNext ){
        e.target.classList.add('x');
        xIsNext = !xIsNext;
    }  else {
        e.target.classList.add('o');
        xIsNext = !xIsNext;
    }
};
// Event Listener
resetDiv.addEventListener('click',handleReset);


for( const cellDiv of cellDivs){
    cellDiv.addEventListener('click',cellClick);
}





