import { Header } from "@/components/header"
import { Container } from "@/components/container"
import type { Metadata } from "next"
import Welcome from "@/components/section/support/content.mdx"
import { Badge, DescriptionList, Heading, Link } from "@/components/ui"
import { siteConfig } from "@/resources/config/site"
import { IconHeart, IconHotDrinkCup, IconStar, IconStarLines } from "justd-icons"

export const metadata: Metadata = {
	title: "Support",
}

export default function Page() {
	return (
		<div className="py-6">
			<Header
				title="Support Guidelines"
				description="This documentation contains a set of guidelines to help you during the contribution process of this project."
			/>
			<Container>
				<div>
					<Heading className="sm:text-lg">Supported Platform</Heading>

					<DescriptionList>
						<DescriptionList.Term className="flex items-center gap-2">
							<IconStar className="fill-warning" />
							Github Stars
						</DescriptionList.Term>
						<DescriptionList.Details>
							<Link href="#" target="_blank">
								<Badge className="hover:text-black dark:hover:text-white">{siteConfig.repo}</Badge>
							</Link>
						</DescriptionList.Details>
						<DescriptionList.Term className="flex items-center gap-2">
							<IconHeart className="fill-danger" />
							Github Sponsor
						</DescriptionList.Term>
						<DescriptionList.Details>
							<Link href={siteConfig.supportedPlatform.bmac} target="_blank">
								<Badge className="hover:text-black dark:hover:text-white">
									{siteConfig.supportedPlatform.gh_sponsor}
								</Badge>
							</Link>
						</DescriptionList.Details>
						<DescriptionList.Term className="flex items-center gap-2">
							<IconHotDrinkCup className="fill-accent-fg" />
							Buy Me a Coffee
						</DescriptionList.Term>
						<DescriptionList.Details>
							<Link href={siteConfig.supportedPlatform.bmac} target="_blank">
								<Badge className="hover:text-black dark:hover:text-white">
									{siteConfig.supportedPlatform.bmac}
								</Badge>
							</Link>
						</DescriptionList.Details>
					</DescriptionList>
				</div>
				{/* <Welcome /> */}
			</Container>
		</div>
	)
}
