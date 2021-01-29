document.getElementById('ticket-incrase').addEventListener('click',function(){

    handleTricketChange(true)

})

document.getElementById('ticket-decrase').addEventListener('click', function(){
    handleTricketChange(false)

})

function handleTricketChange(isIncrase){

    const ticketInput = document.getElementById('ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrase == true ){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrase == false && ticketCount > 0){
    ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    const ticketTotal = ticketNewCount * 100;
}




// document.getElementById('ticket-incrase').addEventListener('click',function(){
    
//     const ticketInput = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount + 1;
//     ticketInput.value = ticketNewCount;
//     const ticketTotal = ticketNewCount * 100;


// })

// document.getElementById('ticket-decrase').addEventListener('click', function(){

//     const ticketInput = document.getElementById('ticket-count');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketNewCount = ticketCount - 1;
//     ticketInput.value = ticketNewCount;
//     const ticketTotal = ticketNewCount * 100;

// })