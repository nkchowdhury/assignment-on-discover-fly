document.getElementById('ticket-incrase').addEventListener('click',function(){
    
    const ticketInput = document.getElementById('ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount + 1;
    ticketInput.value = ticketNewCount;


})