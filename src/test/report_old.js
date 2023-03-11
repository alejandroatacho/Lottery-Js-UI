function generateReport() {
    // Get the target elements
    var column1 = document.querySelector(".lottery_ui_column_1").textContent;
    var column2 = document.querySelector(".lottery_ui_column_2").textContent;
    var column3 = document.querySelector(".lottery_ui_column_3").textContent;
    var column4 = document.querySelector(".lottery_ui_column_4").textContent;

    // Concatenate the text content of all columns
    var data = "Column 1: " + column1 + "\n" +
               "Column 2: " + column2 + "\n" +
               "Column 3: " + column3 + "\n" +
               "Column 4: " + column4 + "\n";

    // Create a Blob object with the data
    var blob = new Blob([data], { type: "text/plain;charset=utf-8" });

    // Create a link element and trigger a download
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "data.txt";
    a.click();
}
