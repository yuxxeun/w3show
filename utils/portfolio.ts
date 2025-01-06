import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content/portfolio")

export function getAllPortfolioMdxFiles() {
	const fileNames = fs.readdirSync(contentDirectory)

	const allMdxData = fileNames.map((fileName) => {
		const fullPath = path.join(contentDirectory, fileName)
		const fileContent = fs.readFileSync(fullPath, "utf8")
		const { data } = matter(fileContent)
		return {
			fileName,
			author: data.author || "",
			twitter: data.twitter || "",
			site: data.site || "",
			stack: data.stack || [],
			repo: data.repo || "",
			image: data.image || "",
		}
	})

	return allMdxData
}
