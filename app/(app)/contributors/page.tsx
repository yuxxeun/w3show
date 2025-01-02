import { Resources } from "@/components/contributors/resources"
import { Header } from "@/components/header"
import { Container } from "@/components/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Contributors",
}

export default function Page() {
	return (
		<div className="py-6">
			<Header
				title="Contributors member"
				description="A list of contributors who have helped build this project."
			/>
			<Container>
				<Resources/>
			</Container>
		</div>
	)
}
