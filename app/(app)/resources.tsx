"use client"

import { IconBrandReactjs, IconCodeLines, IconHeart, IconPictureInPicture } from "justd-icons"
import { buttonStyles, Card, Heading, Tooltip } from "ui"

const resourceData = [
	{
		title: "The Best Resource",
		description: "Bunch inspiration in a single repository.",
		icon: <IconHeart />,
	},
	{
		title: "Technologies Used",
		description: "Discover the technologies used.",
		icon: <IconBrandReactjs />,
	},
	{
		title: "Portfolio Screenshot",
		description: "See portfolio looks like without visiting.",
		icon: <IconPictureInPicture />,
	},
	{
		title: "Source Code",
		description: "Portfolio source code available.",
		icon: <IconCodeLines />,
	},
]

export function Resources() {
	return (
		<>
			<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{resourceData.map((resource, index) => (
					<div className="relative" key={index}>
						<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
							<Card.Header>
								<div className="mb-4">
									<Tooltip>
										<Tooltip.Trigger
											className={buttonStyles({
												intent: "outline",
												size: "square-petite",
											})}
										>
											{resource.icon}
										</Tooltip.Trigger>
									</Tooltip>
								</div>
								<Card.Title>{resource.title}</Card.Title>
								<Card.Description>{resource.description}</Card.Description>
							</Card.Header>
						</Card>
					</div>
				))}
			</div>
		</>
	)
}
