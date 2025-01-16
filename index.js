document.getElementById("principal").value = 0;
document.getElementById("interest").value = 0;
document.getElementById("years").value = 0;


function calculate(){
    const principal = document.getElementById("principal");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const total = document.getElementById("amount");
    
    let amount  = Number(principal.value);
    let intrate = Number(interest.value);
    let time = Number(years.value);


    if(amount < 0 || isNaN(amount)){
        amount = 0;
        principal.value = 0;
    }
    if(intrate < 0|| isNaN(intrate)){
        intrate = 0;
        interest.value = 0;
    }
    if(time < 0|| isNaN(time)){
        time = 0;
        years.value = 0;
    }
    const result = amount * Math.pow((1 + intrate / 1), 1 * time)

    total.textContent = result.toLocaleString(undefined, {style:"currency", currency:"EUR"});
}