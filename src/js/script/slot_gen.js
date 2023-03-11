// 
function submitInput() {
    var input = document.getElementById('myInput').value;
    var slots = [];
    for (let i = 1; i <= 16; i++) {
        slots.push(document.getElementById(`slot_${i}`));
        console.log(slots[i] + " " + i)
        if (slots[i] === 9)
        {
            slots[i].innerHTML = input;
          }
    }
    return { input, slots };
}

// function submitInput() {
//     if (values.input.length !== 4 || isNaN(parseInt(values.input))) {
//         alert('Please enter a 4-digit number');
//     } else {
//         var digits = values.input.toString().split('');
//         var firstDigit = parseInt(digits[0]);
//         var secondDigit = parseInt(digits[1]);
//         var thirdDigit = parseInt(digits[2]);
//         var fourthDigit = parseInt(digits[3]);
//         // console.log(values.input);
//         values.slot1.innerHTML = firstDigit;
//         values.slot6.innerHTML = secondDigit;
//         values.slot11.innerHTML = thirdDigit;
//         values.slot16.innerHTML = fourthDigit;
//         if (fourthDigit === 9) {
            
//             values.slot15.innerHTML = 0;
//             values.slot14.innerHTML = (fourthDigit - fourthDigit) + 1;
//             values.slot13.innerHTML = (fourthDigit - fourthDigit) + 2;
//             values.slot9.innerHTML = (fourthDigit - fourthDigit) + 3;
//             values.slot5.innerHTML = (fourthDigit - fourthDigit) + 4;
//             values.slot2.innerHTML = (fourthDigit - fourthDigit) + 5;
//             values.slot3.innerHTML = (fourthDigit - fourthDigit) + 6;
//             values.slot4.innerHTML = (fourthDigit - fourthDigit) + 7;
//             values.slot8.innerHTML = (fourthDigit - fourthDigit) + 8;
//             values.slot12.innerHTML = (fourthDigit - fourthDigit) + 9;
            
   
//         }
//         else if (fourthDigit === 0) {
            
//             values.slot15.innerHTML = (fourthDigit - fourthDigit) + 1;
//             values.slot14.innerHTML = (fourthDigit - fourthDigit) + 2;
//             values.slot13.innerHTML = (fourthDigit - fourthDigit) + 3;
//             values.slot9.innerHTML = (fourthDigit - fourthDigit) + 4;
//             values.slot5.innerHTML = (fourthDigit - fourthDigit) + 5;
//             values.slot2.innerHTML = (fourthDigit - fourthDigit) + 6;
//             values.slot3.innerHTML = (fourthDigit - fourthDigit) + 7;
//             values.slot4.innerHTML = (fourthDigit - fourthDigit) + 8;
//             values.slot8.innerHTML = (fourthDigit - fourthDigit) + 9;
//             values.slot12.innerHTML = (fourthDigit - fourthDigit) + 0;
//         }
//         else {
//             values.slot15.innerHTML = fourthDigit + 1;
//             values.slot14.innerHTML = fourthDigit + 2;
//             values.slot13.innerHTML = fourthDigit + 3;
//             values.slot9.innerHTML = fourthDigit + 4;
//             values.slot5.innerHTML = fourthDigit + 5;
//             values.slot2.innerHTML = fourthDigit + 7;
//             values.slot3.innerHTML = fourthDigit + 8;
//             values.slot4.innerHTML = fourthDigit + 9;
//             values.slot12.innerHTML = fourthDigit + 10;
       
//         }
    
//     }
// }
