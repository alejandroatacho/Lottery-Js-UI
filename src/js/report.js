function generateReport() {
    // Get the target elements
    var slotsNormal = document.querySelectorAll(".lottery_ui_column_1 div, .lottery_ui_column_2 div, .lottery_ui_column_3 div, .lottery_ui_column_4 div");
    var slotsMirror = document.querySelectorAll(".lottery_ui_column_1_mirror div, .lottery_ui_column_2_mirror div, .lottery_ui_column_3_mirror div, .lottery_ui_column_4_mirror div");
    
    // Concatenate the text content of all normal slots
    var dataNormal = "Normal Slots\n";
    for (var i = 0; i < slotsNormal.length; i++) {
        dataNormal += "Slot " + (i + 1) + ": " + slotsNormal[i].textContent + "\n";
    }
    
    // Concatenate the text content of all mirror slots
    var dataMirror = "Mirror Slots\n";
    for (var i = 0; i < slotsMirror.length; i++) {
        dataMirror += "Slot " + (i + 17) + ": " + slotsMirror[i].textContent + "\n";
    }
    
    // Concatenate the data for normal and mirror slots
    var data = dataNormal + "\n" + dataMirror;
    
    // Create a Blob object with the combined data
    var blob = new Blob([data], { type: "text/plain;charset=utf-8" });
    
    // Create a link element and trigger a download
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.txt";
    a.click();
}
