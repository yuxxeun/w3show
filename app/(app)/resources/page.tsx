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
				title="Resources behind the code"
				description="A huge thanks to these powerful tools that make this project possible."
			/>
			<Container>
				<Resources allMdxData={allMdxData} />
			</Container>
		</div>
	)
}
