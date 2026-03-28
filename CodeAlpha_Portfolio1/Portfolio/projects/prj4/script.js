let display=document.getElementById("display");

function appendValue(value){
    if(display.value.length<20)
    {
    display.value+=value;
    }
}
function clearDisplay(){
    display.value="";
}
function deleteLast(){
    display.value=display.value.slice(0,-1);
}
function percentage(){
    display.value=display.value/100;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
    display.value=eval(display.value);
}

document.addEventListener("keydown",
    function(event){
        let key=event.key;
        if(!isNaN(key) || key==="+" || key==="-" || key==="*" || key==="/" || key===".")
        {
            event.preventDefault();
            appendValue(key);
        }
        
        else if(key==="%")
        {
            event.preventDefault();
            percentage();
        }

        else if(key==="Enter")
        {
            event.preventDefault();
            calculate();
        }

        else if(key==="Backspace")
        {
            event.preventDefault();
            deleteLast();
        }

        else if(key==="Escape")
        {
            event.preventDefault();
            clearDisplay();
        }
    }
);
