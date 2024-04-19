function insert(num) {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}
function clean() {
    document.getElementById('result').innerHTML = "";
}

function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length-1);
}

function calculate() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        var evaluationResult = eval(result);
        document.getElementById('result').innerHTML = evaluationResult;
    }
    else {   
    document.getElementById('result').innerHTML = "Nothing to do...";
}

}
