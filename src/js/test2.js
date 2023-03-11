function container() {
  const input = document.getElementById('myInput').value;
  const slots = [];
  for (let i = 1; i <= 16; i++) {
    slots.push(document.getElementById(`slot_${i}`));
  }
  return { input, slots };
}

function showAlert() {
  console.log(values.input);
}

function updateSlots(slots, start, end, value) {
  for (let i = start; i <= end; i++) {
    const slotValue = (value + i - start) % 10;
    slots[i].innerHTML = slotValue;
  }
}

function submitInput() {
  const { input, slots } = container();
  if (input.length !== 4 || isNaN(parseInt(input))) {
    alert('Please enter a 4-digit number');
  } else {
    const digits = input.toString().split('').map(Number);
    const fourthDigit = digits[3];
    slots[0].innerHTML = digits[0];
    slots[5].innerHTML = digits[1];
    slots[10].innerHTML = digits[2];
    slots[15].innerHTML = fourthDigit;
    if (fourthDigit === 9) {
      updateSlots(slots, 14, 16, 1);
      updateSlots(slots, 12, 13, 2);
      updateSlots(slots, 8, 11, 3);
      updateSlots(slots, 4, 7, 4);
    } else if (fourthDigit === 0) {
      updateSlots(slots, 14, 16, 1);
      updateSlots(slots, 12, 13, 2);
      updateSlots(slots, 8, 11, 3);
      updateSlots(slots, 4, 7, 4);
      slots[11].innerHTML = 0;
    } else {
      updateSlots(slots, 14, 16, fourthDigit + 1);
      updateSlots(slots, 12, 13, fourthDigit + 2);
      updateSlots(slots, 8, 11, fourthDigit + 3);
      updateSlots(slots, 4, 7, fourthDigit + 4);
    }
  }
}
