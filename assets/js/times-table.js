let multiplier = document.getElementById("multiplier");
const displayContainer = document.getElementById("results");


multiplier.addEventListener("change", () =>{
    //select the value

    let selectedValue = multiplier.value;

    //then update display
    display(selectedValue)
})

function display(value){
    let min = 1;
    let max = 12;
    let resultsStr = ``;
    for (let i = min; i <= max; i ++){
        resultsStr += `<p>${i} x ${value} = ${i * value}</p><br>`
    }

    displayContainer.innerHTML = resultsStr;
}

function populateDD(max,min=1){
    let optionStr = ''
    for (let i = min; i <= max; i++){
       optionStr += `<option>${i}</option>`
    }
     multiplier.innerHTML = optionStr
}


populateDD(100);
display(1);