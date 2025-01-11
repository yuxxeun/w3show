#!/bin/bash
mkdir -p content/contributors

while true; do
  echo "Insert new contributors name (without extension .mdx), example: jhon-doe"
  read FILE_NAME_INPUT

  FILE_NAME="content/contributors/$FILE_NAME_INPUT.mdx"

  if [ -f "$FILE_NAME" ]; then
    echo -e "\033[31mA file with the name $FILE_NAME already exists. Please choose a different name.\033[0m"
    echo 
  else
    echo "---" > "$FILE_NAME"
    echo "author: Your Name" >> "$FILE_NAME"
    echo "role: [📖, 💻, 🎨, 🐛]" >> "$FILE_NAME"
    echo "twitter: your_twitter" >> "$FILE_NAME"
    echo "site: https://your_site" >> "$FILE_NAME"
    echo "github: https://github.com/your_github" >> "$FILE_NAME"
    echo "image: https://github.com/your_username.png" >> "$FILE_NAME"
    echo "---" >> "$FILE_NAME"

    echo -e "✨ \033[32mSuccessfully created a new contributors file: take a look at $FILE_NAME\033[0m"
    break  
  fi
done
