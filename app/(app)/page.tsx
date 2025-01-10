import { Resources } from "./resources"
import { Hero } from "@/components/hero"
import { Container } from "@/components/ui"

export default function Home() {
	return (
		<div className="py-6">
			<div className="space-y-12 my-6">
				<Hero />
				<Container>
					<Resources />
				</Container>
			</div>
		</div>
	)
}
