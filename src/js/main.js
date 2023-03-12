function container() {
  var input = document.getElementById('myInput').value;
  const error = document.getElementById("error_1");
  // Base Slots
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
// Mirror Slots
const slot1_mirror= document.getElementById("slot_1_mirror");
const slot2_mirror= document.getElementById("slot_2_mirror");
const slot3_mirror= document.getElementById("slot_3_mirror");
const slot4_mirror= document.getElementById("slot_4_mirror");
const slot5_mirror= document.getElementById("slot_5_mirror");
const slot6_mirror= document.getElementById("slot_6_mirror");
const slot7_mirror= document.getElementById("slot_7_mirror");
const slot8_mirror= document.getElementById("slot_8_mirror");
const slot9_mirror= document.getElementById("slot_9_mirror");
const slot10_mirror = document.getElementById("slot_10_mirror");
const slot11_mirror = document.getElementById("slot_11_mirror");
const slot12_mirror = document.getElementById("slot_12_mirror");
const slot13_mirror = document.getElementById("slot_13_mirror");
const slot14_mirror = document.getElementById("slot_14_mirror");
const slot15_mirror = document.getElementById("slot_15_mirror");
const slot16_mirror = document.getElementById("slot_16_mirror");
// Flip Slots
const slot1_flip= document.getElementById("slot_1_flip");
const slot2_flip= document.getElementById("slot_2_flip");
const slot3_flip= document.getElementById("slot_3_flip");
const slot4_flip= document.getElementById("slot_4_flip");
const slot5_flip= document.getElementById("slot_5_flip");
const slot6_flip= document.getElementById("slot_6_flip");
const slot7_flip= document.getElementById("slot_7_flip");
const slot8_flip= document.getElementById("slot_8_flip");
const slot9_flip= document.getElementById("slot_9_flip");
const slot10_flip = document.getElementById("slot_10_flip");
const slot11_flip = document.getElementById("slot_11_flip");
const slot12_flip = document.getElementById("slot_12_flip");
const slot13_flip = document.getElementById("slot_13_flip");
const slot14_flip = document.getElementById("slot_14_flip");
const slot15_flip = document.getElementById("slot_15_flip");
const slot16_flip = document.getElementById("slot_16_flip");

// Slot answers
const slot1_answer = document.getElementById("slot_base_answer_1");
const slot2_answer = document.getElementById("slot_base_answer_2");
const slot3_answer = document.getElementById("slot_base_answer_3");
const slot4_answer = document.getElementById("slot_base_answer_4");

const slot5_answer = document.getElementById("slot_mirror_answer_1");
const slot6_answer = document.getElementById("slot_mirror_answer_2");
const slot7_answer = document.getElementById("slot_mirror_answer_3");
const slot8_answer = document.getElementById("slot_mirror_answer_4");

const slot9_answer = document.getElementById("slot_flip_answer_1");
const slot10_answer = document.getElementById("slot_flip_answer_2");
const slot11_answer = document.getElementById("slot_flip_answer_3");
const slot12_answer = document.getElementById("slot_flip_answer_4");

return { 
  input, 
  error, 
  slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12, slot13, slot14, slot15, slot16,
  slot1_mirror, slot2_mirror, slot3_mirror, slot4_mirror, slot5_mirror, slot6_mirror, slot7_mirror, slot8_mirror, slot9_mirror, slot10_mirror, slot11_mirror, slot12_mirror, slot13_mirror, slot14_mirror, slot15_mirror, slot16_mirror
   ,slot1_flip, slot2_flip, slot3_flip, slot4_flip, slot5_flip, slot6_flip, slot7_flip, slot8_flip, slot9_flip, slot10_flip, slot11_flip, slot12_flip, slot13_flip, slot14_flip, slot15_flip, slot16_flip,
   slot1_answer, slot2_answer, slot3_answer, slot4_answer,
slot5_answer, slot6_answer, slot7_answer, slot8_answer,
slot9_answer, slot10_answer, slot11_answer, slot12_answer
};
}
// document.getElementById("myInput").addEventListener("keyup", function(event) {
//   event.preventDefault();
//   if (event.keyCode === 13) {
//     submitInput();
//   }
// });

// this section is for users Enter button to work on input field yarrrrr this code sucks but it works
document.getElementById("myInput").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.key === "Enter") {
    submitInput();
  }
});
function submitClear() {
  document.getElementById("myInput").value = "";
  location.reload();
}


function submitInput() {
  const values = container();
document.querySelector('.lottery_answers_ui').style.display = "block";
document.querySelector('.lottery_base_grid').style.display = "block";
document.querySelector('.lottery_mirror_grid').style.display = "block";
document.querySelector('.lottery_flip_grid').style.display = "block";
document.querySelector('.lottery_answers').style.display = "block";
document.querySelector('.lottery_answers_ui').style.display = "flex";
document.querySelector('.lottery_input').style.marginTop = "75px";

  function baseGrid(){
  if (values.input.length !== 4 || isNaN(parseInt(values.input))) {
    // alert('Please enter a 4-digit number');
    values.error.innerHTML = "Error, Please enter a 4-digit number! ";
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
            values.slot14.innerHTML =  1;
            values.slot13.innerHTML =  2;
            values.slot9.innerHTML =  3;
            values.slot5.innerHTML =  4;
            values.slot2.innerHTML =  5;
            values.slot3.innerHTML = 6;
            values.slot4.innerHTML = 7;
            values.slot8.innerHTML =  8;
           values.slot12.innerHTML = 9;
           values.slot10.innerHTML = 0;
           values.slot7.innerHTML = 1;
            
   
         }
      else if (fourthDigit === 0) {
            
            values.slot15.innerHTML =  1;
            values.slot14.innerHTML =2;
            values.slot13.innerHTML =3;
            values.slot9.innerHTML =4;
            values.slot5.innerHTML = 5;
            values.slot2.innerHTML =6;
            values.slot3.innerHTML =7;
            values.slot4.innerHTML =8;
            values.slot8.innerHTML =9;
            values.slot12.innerHTML = 0;
            values.slot10.innerHTML = 1;
            values.slot7.innerHTML = 2;
      }
      else {
        values.slot15.innerHTML = (fourthDigit + 1) % 10;
        values.slot14.innerHTML = (fourthDigit + 2) % 10;
        values.slot13.innerHTML = (fourthDigit + 3) % 10;
        values.slot9.innerHTML = (fourthDigit + 4) % 10;
        values.slot5.innerHTML = (fourthDigit + 5) % 10;
        values.slot2.innerHTML = (fourthDigit + 6) % 10;
        values.slot3.innerHTML = (fourthDigit + 7) % 10;
        values.slot4.innerHTML = (fourthDigit + 8) % 10;
        values.slot8.innerHTML = (fourthDigit + 9) % 10;
        values.slot12.innerHTML = (fourthDigit + 0) % 10;
        values.slot10.innerHTML = (fourthDigit + 1) % 10;
        values.slot7.innerHTML = (fourthDigit + 2) % 10;
      }
      
    }
    
  }
  function mirror5Grid(){
    if (values.input.length !== 4 || isNaN(parseInt(values.input))) {
    values.error.innerHTML = "Error, Please enter a 4-digit number!";
    } else if (values.input.length === 4) {
    var firstDigit = parseInt(values.input[0]) + 5;
    var secondDigit = parseInt(values.input[1]) + 5;
    var thirdDigit = parseInt(values.input[2]) + 5;
    var fourthDigit = parseInt(values.input[3]) + 5;
    if (firstDigit > 9) {
      firstDigit = firstDigit % 10;
    }
    if (secondDigit > 9) {
      secondDigit = secondDigit % 10;
    }
    if (thirdDigit > 9) {
      thirdDigit = thirdDigit % 10;
    }
    if (fourthDigit > 9) {
      fourthDigit = fourthDigit % 10;
    }
    
    values.slot1_mirror.innerHTML = firstDigit; 
    values.slot6_mirror.innerHTML = secondDigit; 
    values.slot11_mirror.innerHTML = thirdDigit; 
    values.slot16_mirror.innerHTML = fourthDigit; 
    values.slot15_mirror.innerHTML = (fourthDigit + 1) % 10;
    values.slot14_mirror.innerHTML = (fourthDigit + 2) % 10;
    values.slot13_mirror.innerHTML = (fourthDigit + 3) % 10;
    values.slot9_mirror.innerHTML = (fourthDigit + 4) % 10;
    values.slot5_mirror.innerHTML = (fourthDigit + 5) % 10;
    values.slot2_mirror.innerHTML = (fourthDigit + 6) % 10;
    values.slot3_mirror.innerHTML = (fourthDigit + 7) % 10;
    values.slot4_mirror.innerHTML = (fourthDigit + 8) % 10;
    values.slot8_mirror.innerHTML = (fourthDigit + 9) % 10;
    values.slot12_mirror.innerHTML = (fourthDigit + 0) % 10;
    values.slot10_mirror.innerHTML = (fourthDigit + 1) % 10;
    values.slot7_mirror.innerHTML = (fourthDigit + 2) % 10;
    }
    }
    function flipGrid(){
      if (values.input.length !== 4 || isNaN(parseInt(values.input))) {
      values.error.innerHTML = "Error, Please enter a 4-digit number!";
      } else if (values.input.length === 4) {
      var firstDigit = parseInt(values.input[0]) + 3;
      var secondDigit = parseInt(values.input[1]) + 3;
      var thirdDigit = parseInt(values.input[2]) + 3;
      var fourthDigit = parseInt(values.input[3]) + 3;
      if (firstDigit > 9) {
        firstDigit = firstDigit % 10;
      }
      if (secondDigit > 9) {
        secondDigit = secondDigit % 10;
      }
      if (thirdDigit > 9) {
        thirdDigit = thirdDigit % 10;
      }
      if (fourthDigit > 9) {
        fourthDigit = fourthDigit % 10;
      }
      
      values.slot1_flip.innerHTML = firstDigit; 
      values.slot6_flip.innerHTML = secondDigit; 
      values.slot11_flip.innerHTML = thirdDigit; 
      values.slot16_flip.innerHTML = fourthDigit; 
      values.slot15_flip.innerHTML = (fourthDigit + 1) % 10;
      values.slot14_flip.innerHTML = (fourthDigit + 2) % 10;
      values.slot13_flip.innerHTML = (fourthDigit + 3) % 10;
      values.slot9_flip.innerHTML = (fourthDigit + 4) % 10;
      values.slot5_flip.innerHTML = (fourthDigit + 5) % 10;
      values.slot2_flip.innerHTML = (fourthDigit + 6) % 10;
      values.slot3_flip.innerHTML = (fourthDigit + 7) % 10;
      values.slot4_flip.innerHTML = (fourthDigit + 8) % 10;
      values.slot8_flip.innerHTML = (fourthDigit + 9) % 10;
      values.slot12_flip.innerHTML = (fourthDigit + 0) % 10;
      values.slot10_flip.innerHTML = (fourthDigit + 1) % 10;
      values.slot7_flip.innerHTML = (fourthDigit + 2) % 10;
      }
      }
      function lotteryAnswers() {
        const values = container();
      
        if (values.input.length !== 4 || isNaN(parseInt(values.input))) {
          values.error.innerHTML = "Error, Please enter a 4-digit number!";
        } else {
       
          
          values.slot1_answer.innerHTML = values.slot1.innerHTML + "" + values.slot6.innerHTML + "" + values.slot11.innerHTML + "" + values.slot16.innerHTML;
          values.slot2_answer.innerHTML = values.slot13.innerHTML + "" + values.slot10.innerHTML + "" + values.slot7.innerHTML + "" + values.slot4.innerHTML;
          values.slot3_answer.innerHTML = values.slot5.innerHTML + "" + values.slot6.innerHTML + "" + values.slot7.innerHTML + "" + values.slot8.innerHTML;
          values.slot4_answer.innerHTML = values.slot9.innerHTML + "" + values.slot10.innerHTML + "" + values.slot11.innerHTML + "" + values.slot12.innerHTML;

          values.slot5_answer.innerHTML = values.slot1_mirror.innerHTML + "" + values.slot6_mirror.innerHTML + "" + values.slot11_mirror.innerHTML + "" + values.slot16_mirror.innerHTML;
          values.slot6_answer.innerHTML = values.slot13_mirror.innerHTML + "" + values.slot10_mirror.innerHTML + "" + values.slot7_mirror.innerHTML + "" + values.slot4_mirror.innerHTML;
          values.slot7_answer.innerHTML = values.slot5_mirror.innerHTML + "" + values.slot6_mirror.innerHTML + "" + values.slot7_mirror.innerHTML + "" + values.slot8_mirror.innerHTML;
          values.slot8_answer.innerHTML = values.slot9_mirror.innerHTML + "" + values.slot10_mirror.innerHTML + "" + values.slot11_mirror.innerHTML + "" + values.slot12_mirror.innerHTML;
          
          values.slot9_answer.innerHTML = values.slot1_flip.innerHTML + "" + values.slot6_flip.innerHTML + "" + values.slot11_flip.innerHTML + "" + values.slot16_flip.innerHTML;
          values.slot10_answer.innerHTML = values.slot13_flip.innerHTML + "" + values.slot10_flip.innerHTML + "" + values.slot7_flip.innerHTML + "" + values.slot4_flip.innerHTML;
          values.slot11_answer.innerHTML = values.slot5_flip.innerHTML + "" + values.slot6_flip.innerHTML + "" + values.slot7_flip.innerHTML + "" + values.slot8_flip.innerHTML;
          values.slot12_answer.innerHTML = values.slot9_flip.innerHTML + "" + values.slot10_flip.innerHTML + "" + values.slot11_flip.innerHTML + "" + values.slot12_flip.innerHTML;
          
        }
      }
    
    baseGrid();
    mirror5Grid();
    flipGrid();
    lotteryAnswers();
    }