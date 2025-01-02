import { Header } from "@/components/header"

import { Resources } from "./resources"

export default function Home() {
	return (
		<div className="py-6">
			<Header
				title="Repository of portfolio Inspiration"
				description="A curation of awesome portfolio website ideas for developers and designers to draw inspiration from."
			/>
			<Resources />
		</div>
	)
}
