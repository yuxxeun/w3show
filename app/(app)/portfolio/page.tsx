import { Header } from "@/components/header"
import type { Metadata } from "next"
import Resources from "./resources"
import { getAllPortfolioMdxFiles } from "@/utils/portfolio"
import { Container } from "@/components/ui"
import Seo from "@/components/seo"

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Discover an inspiring collection of exceptional web projects from the best developers and designers.",
}

export interface MdxData {
	author: string
	twitter: string
	site: string
	stack: string[]
	repo: string
	image: string
	fileName: string
}

export default async function Page() {
	const allMdxData = await getAllPortfolioMdxFiles()

	return (
		<>
			<Seo />
			<div className="py-6 mb-8">
				<Header
					title="Portfolio"
					description="Discover an inspiring collection of exceptional web projects from the best developers and designers."
				/>
				<Container>
					<Resources allMdxData={allMdxData} />
				</Container>
			</div>
		</>
	)
}
