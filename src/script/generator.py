from bs4 import BeautifulSoup
import os

file_path = "index.html"
report_save_path =""
if os.path.exists(file_path):
    with open(file_path, "r") as file:
        soup = BeautifulSoup(file, "html.parser")

        # Extract the data you need from the HTML
        data_1 = soup.find("div", {"class": "lottery_ui_column_1"}).text
        data_2 = soup.find("div", {"class": "lottery_ui_column_2"}).text
        data_3 = soup.find("div", {"class": "lottery_ui_column_3"}).text
        data_4 = soup.find("div", {"class": "lottery_ui_column_4"}).text

        # Format the data and write it to a file
        with open("report.txt", "w") as file:
            file.write("Report:\n")
            file.write("Column 1: " + data_1 + "\n")
            file.write("Column 2: " + data_2 + "\n")
            file.write("Column 3: " + data_3 + "\n")
            file.write("Column 4: " + data_4 + "\n")

        # Display the report
        with open("report.txt", "r") as file:
            print(file.read())
else:
    print("File not found:", file_path)
