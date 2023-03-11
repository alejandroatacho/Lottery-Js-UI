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

    if (fourthDigit >= 10) {
        fourthDigit = 0;
        thirdDigit += 1;
        if (thirdDigit >= 10) {
            thirdDigit = 0;
            secondDigit += 1;
            if (secondDigit >= 10) {
                secondDigit = 0;
                firstDigit += 1;
                if (firstDigit >= 10) {
                    firstDigit = 0;
                }
                values.slot1.innerHTML = firstDigit;
            }
            values.slot6.innerHTML = secondDigit;
        }
        values.slot11.innerHTML = thirdDigit;
    }

    values.slot15.innerHTML = (fourthDigit + 1 >= 10) ? 0 : (fourthDigit + 1);
    values.slot14.innerHTML = (fourthDigit + 2 >= 10) ? 0 : (fourthDigit + 2);
    values.slot13.innerHTML = (fourthDigit + 3 >= 10) ? 0 : (fourthDigit + 3);
    values.slot9.innerHTML = (fourthDigit + 4 >= 10) ? 0 : (fourthDigit + 4);
    values.slot5.innerHTML = (fourthDigit + 5 >= 10) ? 0 : (fourthDigit + 5);
    values.slot2.innerHTML = (fourthDigit + 7 >= 10) ? 0 : (fourthDigit + 7);
    values.slot3.innerHTML = (fourthDigit + 8 >= 10) ? 0 : (fourthDigit + 8);
    values.slot4.innerHTML = (fourthDigit + 9 >= 10) ? 0 : (fourthDigit + 9);
    values.slot12.innerHTML = (fourthDigit + 10 >= 10) ? 0 : (fourthDigit + 10);
    values.slot16.innerHTML = fourthDigit;
  }
}
