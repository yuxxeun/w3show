"use client"

import { Container } from "@/components/container"
import { IconBrandGithub, IconBrandX, IconChainLink, IconHeart } from "justd-icons"
import Image from "next/image"
import { buttonStyles, Card, Link, Tooltip, Badge } from "ui"

const resourceData = [
	{
		title: "The Best Resource",
		description: "Over 130+ inspiration in a single repository",
		icon: <IconHeart />,
		link: "https://github.com/basecamp",
		tooltip: "View GitHub profile",
	},
	{
		title: "GitHub Repository",
		description: "Explore amazing open-source projects",
		icon: <IconBrandGithub />,
		link: "https://github.com",
		tooltip: "View GitHub profile",
	},
	{
		title: "Design Inspiration",
		description: "Get creative design ideas for your next project",
		icon: <IconBrandX />,
		link: "https://www.behance.net",
		tooltip: "Visit Behance",
	},
]

export function Resources() {
	return (
		<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
			{resourceData.map((resource, index) => (
				<div className="relative" key={index}>
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
						<Card.Header>
							<div className="mb-4">
								<Link href={resource.link} target="_blank">
									<Tooltip delay={0}>
										<Tooltip.Trigger
											aria-label={resource.tooltip}
											className={buttonStyles({
												appearance: "outline",
												size: "square-petite",
											})}
										>
											{resource.icon}
										</Tooltip.Trigger>
										<Tooltip.Content>{resource.tooltip}</Tooltip.Content>
									</Tooltip>
								</Link>
							</div>
							<Card.Title>{resource.title}</Card.Title>
							<Card.Description>{resource.description}</Card.Description>
						</Card.Header>
					</Card>
				</div>
			))}
		</div>
	)
}
