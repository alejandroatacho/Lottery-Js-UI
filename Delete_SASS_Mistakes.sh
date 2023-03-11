#!/bin/bash

# Delete folder
cd src/style
echo "Deleting my compiler mistakes!"
sleep 1
rm -rf mobile.css mobile.css.map 2> /dev/null
if [ $? -eq 0 ]; then
  echo "Done!"
else
  echo "Failed to delete files or missing files exist."
fi
exit