// first-class ticket handler

 document.getElementById('first-ticket-incrase').addEventListener('click',function(){

    firstTicketChange(true)


})


document.getElementById('first-ticket-decrase').addEventListener('click',function(){

    firstTicketChange(false)
    
})

function firstTicketChange(isIncrase){

    const firstTicketInput = document.getElementById('first-ticket-count');
    const firstTicketCount = parseInt(firstTicketInput.value);
   
    let firstTicketNewCount = firstTicketCount;
    if(isIncrase == true ){
        firstTicketNewCount = firstTicketCount + 1;

    }
    if(isIncrase == false && firstTicketCount >0 ){
        firstTicketNewCount = firstTicketCount - 1;

    }
    firstTicketInput.value = firstTicketNewCount;
    const firstTicketTotal = firstTicketNewCount * 150;

    calculateSubTotal()


}







//economy ticket handler
document.getElementById('economy-ticket-incrase').addEventListener('click',function(){

    economyTricketChange(true)

})

document.getElementById('economy-ticket-decrase').addEventListener('click', function(){
    economyTricketChange(false)

})

function economyTricketChange(isIncrase){

    const economyTicketInput = document.getElementById('economy-ticket-count');
    const economyTicketCount = parseInt(economyTicketInput.value);
    let economyTicketNewCount = economyTicketCount;
    if(isIncrase == true ){
        economyTicketNewCount = economyTicketCount + 1;
    }
    if(isIncrase == false && economyTicketCount > 0){
    economyTicketNewCount = economyTicketCount - 1;
    }
    economyTicketInput.value = economyTicketNewCount;
    const economyTicketTotal = economyTicketNewCount * 100;
    calculateSubTotal()
}

//total calculate
function calculateSubTotal(){
    const firstTicketInput = document.getElementById("first-ticket-count");
    const firstTicketCount = parseInt(firstTicketInput.value);

    const economyTicketInput = document.getElementById("economy-ticket-count");
    const economyTicketCount = parseInt(economyTicketInput.value);

    const subTotalPrice = firstTicketCount * 150 + economyTicketCount * 100 ;

    document.getElementById('sub-total-price').innerText = "$" + subTotalPrice ;


    const tenPercentVat = subTotalPrice *0.1;
    document.getElementById('vat-count').innerText = "$" + tenPercentVat ;


    const total = subTotalPrice + tenPercentVat;
    document.getElementById('total').innerText = "$" + total ;
    


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