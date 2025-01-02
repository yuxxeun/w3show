import { Container } from "@/components/container"
import { Header } from "@/components/header"
import { Resources } from "@/components/portfolios/resources"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Portfolios",
}

export default function Page() {
	return (
		<div className="py-6">
			<Header
				title="Portfolios"
				description="Have any questions or need assistance? Feel free to reach out to us anytime. We’re here to help you with anything you need."
			/>
			<Container>
				<Resources />
			</Container>
		</div>
	)
}
