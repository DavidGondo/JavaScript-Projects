let answer= document.getElementById("equal");
let screen= document.getElementById("screen");
let buttons = document.querySelectorAll(" .button ");

// function for displaying button value
function display(values){
    screen.value+= values;
    return values;
}

// function for clearing the screen
function deleted(){
    screen.value=" ";
    return screen.value;
}

// function for deleting one character from screen
function del(){
    screen.value=screen.value.slice(0,-1);
}

// function for computing any operation on the screen
function calculate(){
    try{
        screen.value=eval(screen.value);
    }catch (err) {
        alert("ERROR 505") ;
    }

}


function evaluated(){
    // console.log(screen.value);
    let ans1=screen.value;
    var ans=eval(ans1);
    console.log(ans);
    return ans;
}




