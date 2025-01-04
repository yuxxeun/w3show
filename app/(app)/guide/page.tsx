import { Header } from "@/components/header"
import { Container } from "@/components/container"
import type { Metadata } from "next"
import Welcome from "@/components/section/guide/content.mdx"

export const metadata: Metadata = {
	title: "Guide",
}

export default function Page() {
	return (
		<div className="py-6">
			<Header
				title="Contribution Guidelines"
				description="This documentation contains a set of guidelines to help you during the contribution process of this project."
			/>
			<Container>
				<Welcome />
			</Container>
		</div>
	)
}
