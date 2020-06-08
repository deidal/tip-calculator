//Calculate Tip
function calculateTip() {
  var totalBill = document.getElementById("totalBill").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("numPeople").value;

  //validate input
  if (totalBill === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  var total = (totalBill * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};













// function calculateTip() {
// var totalBill = document.getElementbyId("totalBill").value;
// var serviceQual = document.getElementbyId("serviceQual").value;
// var numPeople = document.getElementbyId("numPeople").value;

  
// //validating  number
// if (totalBill === ""|| serviceQual == 0){
//   alert("Please enter values");
//   return;
// } 
// if(numPeople === "" || numPeople <= 1){
//   numPeople =1;
//   document.getElementById("each").style. display = "none";
// } else {
//     document.getElementById("each").style.display = "block";
//   }
  
//  //calculate the tip
//  var total = (totalBill * serviceQual) / numPeople;
//   total = Math.round(total*100)/100;
//   total = total.toFixed(2);
  
// document.getElementById("totalTip").style.display = "block";

// document.getElementById("tip").innerHTML = total; }

// document.getELementById("totalTip").style.display = "none";

// document.getELementById("each").style.display = "none";
 
// document.getElementById("calculate").onclick = function() {
//   calculateTip();
// };