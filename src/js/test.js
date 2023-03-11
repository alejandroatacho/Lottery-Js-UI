function container() {
  var input = document.getElementById('myInput').value;
  const slot1 = document.getElementById("slot_1");
  const slot2 = document.getElementById("slot_2");
  const slot3 = document.getElementById("slot_3");
  const slot4 = document.getElementById("slot_4");
  const slot5 = document.getElementById("slot_5");
  const slot6 = document.getElementById("slot_6");
  const slot7 = document.getElementById("slot_7");
  const slot8 = document.getElementById("slot_8");
  const slot9 = document.getElementById("slot_9");
  const slot10 = document.getElementById("slot_10");
  const slot11 = document.getElementById("slot_11");
  const slot12 = document.getElementById("slot_12");
  const slot13 = document.getElementById("slot_13");
  const slot14 = document.getElementById("slot_14");
  const slot15 = document.getElementById("slot_15");
  const slot16 = document.getElementById("slot_16");
  return { input, slot1,slot2,slot3,slot4,slot5,slot6,slot7,slot8,slot9,slot10,slot11,slot12,slot13,slot14,slot15,slot16 };
}

function showAlert() {
  console.log(values.input);
}

function submitInput() {
  const values = container();
  if (values.input.length !== 4 || isNaN(parseInt(values.input))) {
    alert('Please enter a 4-digit number');
  } else {
    var digits = values.input.toString().split('');
    var firstDigit = parseInt(digits[0]);
    var secondDigit = parseInt(digits[1]);
    var thirdDigit = parseInt(digits[2]);
    var fourthDigit = parseInt(digits[3]);
    // console.log(values.input);
    values.slot1.innerHTML = firstDigit; 
    values.slot6.innerHTML = secondDigit; 
    values.slot11.innerHTML = thirdDigit; 
      values.slot16.innerHTML = fourthDigit; 
         if (fourthDigit === 9) {
            
            values.slot15.innerHTML = 0;
            values.slot14.innerHTML = (fourthDigit - fourthDigit) + 1;
            values.slot13.innerHTML = (fourthDigit - fourthDigit) + 2;
            values.slot9.innerHTML = (fourthDigit - fourthDigit) + 3;
            values.slot5.innerHTML = (fourthDigit - fourthDigit)+ 4;
            values.slot2.innerHTML = (fourthDigit - fourthDigit) + 5;
            values.slot3.innerHTML = (fourthDigit - fourthDigit) + 6;
            values.slot4.innerHTML = (fourthDigit - fourthDigit) + 7;
            values.slot8.innerHTML = (fourthDigit - fourthDigit) + 8;
            values.slot12.innerHTML = (fourthDigit - fourthDigit) + 9;
            
   
         }
      else if (fourthDigit === 0) {
            
            values.slot15.innerHTML = (fourthDigit - fourthDigit) + 1;
            values.slot14.innerHTML = (fourthDigit - fourthDigit) + 2;
            values.slot13.innerHTML = (fourthDigit - fourthDigit) + 3;
            values.slot9.innerHTML = (fourthDigit - fourthDigit) + 4;
            values.slot5.innerHTML = (fourthDigit - fourthDigit)+ 5;
            values.slot2.innerHTML = (fourthDigit - fourthDigit) + 6;
            values.slot3.innerHTML = (fourthDigit - fourthDigit) + 7;
            values.slot4.innerHTML = (fourthDigit - fourthDigit) + 8;
            values.slot8.innerHTML = (fourthDigit - fourthDigit) + 9;
            values.slot12.innerHTML = (fourthDigit - fourthDigit) + 0;
      }
         else {
             values.slot15.innerHTML = fourthDigit + 1;
             values.slot14.innerHTML = fourthDigit + 2;
             values.slot13.innerHTML = fourthDigit + 3;
             values.slot9.innerHTML = fourthDigit + 4;
             values.slot5.innerHTML = fourthDigit + 5;
             values.slot2.innerHTML = fourthDigit + 7;
             values.slot3.innerHTML = fourthDigit + 8;
             values.slot4.innerHTML = fourthDigit + 9;
             values.slot12.innerHTML = fourthDigit + 10;
       
      }
    
  }
}
