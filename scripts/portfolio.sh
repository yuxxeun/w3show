#!/bin/bash
mkdir -p content/portfolio

while true; do
  echo "Insert new portfolio name (without extension .mdx), example: jhon-doe"
  read FILE_NAME_INPUT

  FILE_NAME="content/portfolio/$FILE_NAME_INPUT.mdx"

  if [ -f "$FILE_NAME" ]; then
    echo -e "\033[31mA file with the name $FILE_NAME already exists. Please choose a different name.\033[0m"
    echo 
  else
    echo "---" > "$FILE_NAME"
    echo "author: Your name here" >> "$FILE_NAME"
    echo "twitter: your_twitter_username" >> "$FILE_NAME"
    echo "site: https://your_site_here" >> "$FILE_NAME"
    echo "stack: [HTML, JavaScript, CSS, whatever]" >> "$FILE_NAME"
    echo "repo: https://github.com/your_github_profile/repo" >> "$FILE_NAME"
    echo "image: /portfolio/your_image.jpg" >> "$FILE_NAME"
    echo "---" >> "$FILE_NAME"

    echo -e "✨ \033[32mSuccessfully created a new portfolio file: take a look at $FILE_NAME\033[0m"
    break  
  fi
done
