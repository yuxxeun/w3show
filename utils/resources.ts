import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content/resources")

export function getAllResourcesMdxFiles() {
	const fileNames = fs.readdirSync(contentDirectory)

	const allMdxData = fileNames.map((fileName) => {
		const fullPath = path.join(contentDirectory, fileName)
		const fileContent = fs.readFileSync(fullPath, "utf8")
		const { data } = matter(fileContent)
		return {
			fileName,
			title: data.title || "",
			description: data.description || "",
			twitter: data.twitter || "",
			site: data.site || "",
			github: data.github || "",
			image: data.image || "",
			category: data.category || [],
		}
	})

	return allMdxData
}
