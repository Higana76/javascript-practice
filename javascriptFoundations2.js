// https://javascript.info/ifelse

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
//If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

// let name = prompt('What is the "official" name of Javascript?', '')

// if (name === "ECMAScript") {
//     alert("Right!") 
//     }
// else {
//     alert("You don't know? ECMASCript!")
//     }


// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.

// let num = prompt('Pick a number', '')

// if (num > 0) {
//     alert(1)
//     }

// else if (num < 0) {
//     alert(-1)
//     }

// else {
//     alert (0)
// }


// Rewrite this if using the conditional operator '?':

// let result = (a + b < 4) ? 'Below' : 'Over';



// Rewrite if..else using multiple ternary operators '?'.

// let message = (login == 'Employee') ? 'Hello' :
//               (login == 'Director') ? 'Greetings' :
//               (login == '')         ? 'No login' :
//               '';



// https://javascript.info/switch

//Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

// if (browser = 'Edge') {
//     alert("You've got the Edge!");
// }

// else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert('Okay we support these browsers too');
// }

// else alert ('We hope that this page looks ok!');


//Rewrite "if" into "switch"
// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert('0');
        break;
    
    case 1:
        alert('1');
        break;

    case 2:
    case 3:
        alert ('2,3');
        break;

}