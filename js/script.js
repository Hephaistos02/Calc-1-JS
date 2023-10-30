textbox=document.getElementById('textbox')
const btnclick=(value)=>{
    textbox.value+=value
}

function myFunctionClear(){
    const clr= document.getElementById('textbox').value;
    document.getElementById('textbox').value=""
}

function myFunctionDelete(){
    textbox.value=textbox.value.toString().slice(0,-1)
}
function myFunctionResult(){
    textbox.value=eval(textbox.value)

}