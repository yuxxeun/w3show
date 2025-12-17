#!/bin/bash
mkdir -p content/resources

while true; do
  echo "Insert new resources name (without extension .mdx), example: jhon-doe"
  read FILE_NAME_INPUT

  FILE_NAME="content/resources/$FILE_NAME_INPUT.mdx"

  if [ -f "$FILE_NAME" ]; then
    echo -e "\033[31mA file with the name $FILE_NAME already exists. Please choose a different name.\033[0m"
    echo 
  else
    echo "---" > "$FILE_NAME"
    echo "title: \"Your Title Here\"" >> "$FILE_NAME"
    echo "description: \"Your description here\"" >> "$FILE_NAME"
    echo "twitter: \"your_twitter_handle\"" >> "$FILE_NAME"
    echo "site: \"https://your_site_here\"" >> "$FILE_NAME"
    echo "github: \"https://github.com/your_github_profile/repo\"" >> "$FILE_NAME"
    echo "image: \"https://github.com/your_github_profile.png\"" >> "$FILE_NAME"
    echo "category: [\"Your Category\"]" >> "$FILE_NAME"
    echo "---" >> "$FILE_NAME"

    echo -e "✨ \033[32mSuccessfully created a new resources file: take a look at $FILE_NAME\033[0m"
    break  
  fi
done
