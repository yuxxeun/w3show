import { Header } from "@/components/header"
import type { Metadata } from "next"
import Resources from "./resources"
import { getAllContributorsMdxFiles } from "@/utils/contributors"
import Seo from "@/components/seo"

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Shoutout to these wonderful people for contributing to this project.",
}

export interface MdxData {
	author: string
	role: []
	twitter: string
	site: string
	github: string
	image: string
	fileName: string
}

export default async function Page() {
	const allMdxData = await getAllContributorsMdxFiles()

	return (
		<>
			<Seo />
			<div className="py-6 mb-8">
				<Header
					title="Contributors"
					description="Shoutout to these wonderful people for contributing to this project."
				/>
				<Resources allMdxData={allMdxData} />
			</div>
		</>
	)
}
