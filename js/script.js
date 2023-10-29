function myFunction1(){
   
    var num= document.getElementById('one').innerHTML;
    document.getElementById('textbox').value+=num;
    }
function myFunction2(){
    var num= document.getElementById('two').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction3(){
    var num= document.getElementById('three').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction4(){
    var num= document.getElementById('four').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction5(){
    var num= document.getElementById('five').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction6(){
    var num= document.getElementById('six').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction7(){
    var num= document.getElementById('seven').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction8(){
    var num= document.getElementById('eight').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction9(){
    var num= document.getElementById('nine').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction0(){
    var num= document.getElementById('zero').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunction00(){
    var num= document.getElementById('doublezero').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunctionDot(){
    var num= document.getElementById('dot').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunctionPlus(){
    var num= document.getElementById('plus').innerHTML;
    document.getElementById('textbox').value+=num;
    
}

// function myFunctionEqual(){
//     var num= document.getElementById('equal').innerHTML;
//     document.getElementById('textbox').value+=num;
    
// }
function myFunctionMinus(){
    var num= document.getElementById('minus').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunctionDivide(){
    var num= document.getElementById('divide').innerHTML;
    document.getElementById('textbox').value+=num;
    
}
function myFunctionStar(){
    var num= document.getElementById('star').innerHTML;
    document.getElementById('textbox').value+=num;
    
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