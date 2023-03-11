#!/bin/bash

# Delete folder
echo "Deleting my compiler mistakes!"
sleep 1
rm -rf mobile.css mobile.css.map 2> /dev/null
if [ $? -eq 0 ]; then
  echo "Done!"
else
  echo "Failed to delete folders or missing folders exist."
fi
exit