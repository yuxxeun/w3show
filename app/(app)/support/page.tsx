import { Header } from "@/components/header"
import { Container } from "@/components/container"
import type { Metadata } from "next"
import Welcome from "@/components/section/support/content.mdx"
import { Badge, DescriptionList, Heading, Link } from "@/components/ui"
import { siteConfig } from "@/resources/config/site"
import { IconHeart, IconMoneybag, IconStar } from "justd-icons"

export const metadata: Metadata = {
	title: "Support",
	description: "The proper way to support the project.",
}

export default function Page() {
	return (
		<>
			<div className="py-6 mb-8">
				<Header title="Support Guidelines" description="The proper way to support the project." />
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
									<Badge intent="success" className="hover:text-black dark:hover:text-white">
										{siteConfig.repo}
									</Badge>
								</Link>
							</DescriptionList.Details>
							<DescriptionList.Term className="flex items-center gap-2">
								<IconHeart className="fill-danger" />
								Github Sponsor
							</DescriptionList.Term>
							<DescriptionList.Details>
								<Link href={siteConfig.supportedPlatform.gh_sponsor} target="_blank">
									<Badge intent="success" className="hover:text-black dark:hover:text-white">
										{siteConfig.supportedPlatform.gh_sponsor}
									</Badge>
								</Link>
							</DescriptionList.Details>
							<DescriptionList.Term className="flex items-center gap-2">
								<IconMoneybag className="fill-warning" />
								Paypal
							</DescriptionList.Term>
							<DescriptionList.Details>
								<Link href={siteConfig.supportedPlatform.paypal} target="_blank">
									<Badge intent="success" className="hover:text-black dark:hover:text-white">
										{siteConfig.supportedPlatform.paypal}
									</Badge>
								</Link>
							</DescriptionList.Details>
						</DescriptionList>
					</div>
					<Welcome />
				</Container>
			</div>
		</>
	)
}
