function inputamount(input){
    const InputField = document.getElementById(input);
    const amountinputfieldtxt = InputField.value;
    const amountinputfield = parseFloat(amountinputfieldtxt);
    InputField.value = '';
    return amountinputfield ;
}

function outputAmount(Output,amountinputfield){
    const outputfield = document.getElementById(Output);
    const amountOutputFieldtxt = outputfield.innerText;
    const amountOutputField = parseFloat(amountOutputFieldtxt);
    outputfield.innerText = amountOutputField + amountinputfield;
}
function tottalBalance (amountinputfield,isadd){
    const balanceOutputField = document.getElementById("total-balance");
    const balanceOutputtxt = balanceOutputField.innerText;
    const balanceOutput = parseFloat(balanceOutputtxt);
    if (isadd == true){
        balanceOutputField.innerText = balanceOutput + amountinputfield ;
    }
    else{
        balanceOutputField.innerText = balanceOutput - amountinputfield ;
    }
}
function previousamount(){
    const balanceOutputField = document.getElementById("total-balance");
    const balanceOutputtxt = balanceOutputField.innerText;
    const balanceOutput = parseFloat(balanceOutputtxt);
    return balanceOutput;
}


document.getElementById('deposit-btn').addEventListener('click', function(){
    // const InputField = document.getElementById("deposit-input" );
    // const amountinputfieldtxt = InputField.value;
    // const amountinputfield = parseFloat(amountinputfieldtxt);
    // const outputfield = document.getElementById("deposit-amount");
    // const amountOutputFieldtxt = outputfield.innerText;
    // const amountOutputField = parseFloat(amountOutputFieldtxt);
    // outputfield.innerText = amountOutputField + amountinputfield;

    // const balanceOutputField = document.getElementById("total-balance");
    // const balanceOutputtxt = balanceOutputField.innerText;
    // const balanceOutput = parseFloat(balanceOutputtxt);
    // balanceOutputField.innerText = balanceOutput + amountinputfield ;
    const amountinputfield = inputamount("deposit-input" );
    if( amountinputfield > 0){
        outputAmount("deposit-amount",amountinputfield);
        tottalBalance(amountinputfield,true);
    }

})
document.getElementById('withdrow-btn').addEventListener('click',function(){
    const currentamount = previousamount();
    const amountInputfield = inputamount("withdrow-input");
    if( amountInputfield > 0 && amountInputfield < currentamount){
        outputAmount("withdrow-amount", amountInputfield);
        tottalBalance(amountInputfield,false);
    }
    if (amountInputfield > currentamount){
        alert("Deactive");
    }
})