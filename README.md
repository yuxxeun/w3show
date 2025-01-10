# w3show
A collection of great portfolio ideas for developers and designers to get inspired when creating their own.

## Submit your site

After cloning the project, you should install dependencies on the project directory:
```shell
bun install
```
Interesting to submit your site?
Simply add new `mdx` file into `content/portfolio` directory with `frontmatter` like example below: 

```md
author: Your name here
site: your-site.com
stack: ["HTML", "CSS", "JavaScript"]
repo: your-github-repo-url
image: /portfolio/image.jpg
```

But you can make it **automatically** with run bash script `portfolio.sh` to generate new mdx file.

```shell
1 chmod +x portfolio.sh
2 ./portfolio.sh
```

### Suggestion

Do you know a portfolio you'd like to see added but can't submit yourself? Mention it in this [issue](https://github.com/yuxxeun/w3show/issues), and the community will take care of it. You can also open a PR to add any suggested portfolios.
