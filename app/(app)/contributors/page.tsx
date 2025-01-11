import { Header } from "@/components/header"
import type { Metadata } from "next"
import Resources from "./resources"
import { getAllContributorsMdxFiles } from "@/utils/contributors"

export const metadata: Metadata = {
	title: "Portfolio",
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
		<div className="py-6 mb-8">
			<Header
				title="Contributors"
				description="Shoutout to these wonderful people for contributing to this project."
			/>
			<Resources allMdxData={allMdxData} />
		</div>
	)
}
