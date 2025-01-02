import { Header } from "@/components/header"
import type { Metadata } from "next"
import { Container } from "@/components/container"
import ContainerMdx from "./container"

export const metadata: Metadata = {
	title: "Guide",
}

export default function Page() {
	return (
		<div className="py-6">
			<Header
				title="Guide"
				description="A set of guidelines to help you during the contribution process of this project."
			/>
			<Container>
				<ContainerMdx/>
			</Container>
		</div>
	)
}
