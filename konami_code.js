const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]



function init() {
  let index = 0;
//   // Write your JavaScript code inside the init() function
    document.body.addEventListener('keydown', (event) => {
    const key = parseInt(event.which || event.detail);

    if (key === code[index]) {
      index++;

      if (index === code.length) {
        
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    };
  })

}


// const input = document.querySelector('input');

// input.addEventListener('keydown', function (e) {
//   if (e.which === 71) {
//     console.log('default prevented');
//     return e.preventDefault();
//   } else {
//     console.log('Not a "g"');
//   }
// });

// Key codes for A, B, and C keys.
// const alphabet = [65, 66, 67];

// Keep track of index outside of the event handler.
// let index = 0;

// // This is the function that would be invoked by the event listener.
// function onKeyDownHandler(e) {
//   // const key = parseInt( e.which);

//   if (key === alphabet[index]) {
//     index++;

//     if (index === alphabet.length) {
//       alert("Hurray!");

//       index = 0;
//     }
//   } else {
//     index = 0;
//   }
// }