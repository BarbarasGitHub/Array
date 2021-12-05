

var array1 = ["start, mijn, array"];



// vooraan array = unshift

function myFunction1() {
    array1.unshift("aaa");
    document.getElementById("aaa").innerHTML = array1;
}

// vooraan array weg = shift

function myFunction2() {
    array1.shift();
    document.getElementById("wegvooraan").innerHTML = array1;

}
// achteraan array = push
function myFunction3() {
    array1.push("zzz");
    document.getElementById("zzz").innerHTML = array1;

}

// achteraan array weg = pop

function myFunction4() {
    array1.pop()
    document.getElementById("wegachteraan").innerHTML = "De Array is: " + array1;
}

// lengte weergeven

// function Lengte () {
//     document.getElementById("wegachteraan").innerHTML = "De lengte is " + array1.length;
// }
