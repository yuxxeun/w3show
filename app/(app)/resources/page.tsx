import { Header } from "@/components/header"
import { Container } from "@/components/container"
import type { Metadata } from "next"
import Resources from "./resources"
import { getAllResourcesMdxFiles } from "@/utils/resources"

export const metadata: Metadata = {
	title: "Resources",
}

export interface MdxData {
	title: string
	description: string
	twitter: string
	site: string
	github: string
	image: string
	category: string[]
}

export default async function Page() {
	const allMdxData = await getAllResourcesMdxFiles()

	return (
		<div className="py-6 mb-8">
			<Header
				title="Behind the Project"
				description="This documentation contains a set of guidelines to help you during the contribution process of this project."
			/>
			<Container>
				<Resources allMdxData={allMdxData} />
			</Container>
		</div>
	)
}
