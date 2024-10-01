
function clearScreen(){
    document.getElementById('input-box').value="";
}

//function to display
function display(value){
    document.getElementById("input-box").value+=value;
}
function calculate(){
   var initial=document.getElementById('input-box').value;
   var total=eval(initial);
    document.getElementById('input-box').value=total
}