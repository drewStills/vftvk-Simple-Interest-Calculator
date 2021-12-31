
//gets the principal,rate,years,interest and actual year from user
function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
//Tells the user what their expected interest rate wu=ill be along with what they inputted
    document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>%,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";
//If user inputs a zero or negative number this will alert them to only use positive numbers
    if (principal <=0) {
            alert("Enter a positive number");
            document.getElementById("principal").focus();
            return false;
          }
}
//displays rate on the slider bar
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}