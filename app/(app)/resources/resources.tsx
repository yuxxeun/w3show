"use client"

import { Badge, buttonStyles, Card, Container, Link, Tooltip } from "@/components/ui"
import { IconBrandGithub, IconBrandX, IconChainLink } from "justd-icons"
import Image from "next/image"
import { MdxData } from "./page"

interface ResourcesProps {
	allMdxData: MdxData[]
}

export default function Resources({ allMdxData }: ResourcesProps) {
	return (
		<Container>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{allMdxData.map((frontmatter) => (
					<div className="relative" key={frontmatter.title}>
						{/* Make the card clickable, wrapping the Card component in a Link */}
						<Link target="_blank" href={frontmatter.site}>
							<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
								<div className="p-2">
									<div className="relative w-full aspect-[16/9] rounded-xl shadow-lg overflow-hidden">
										<Image
											src={frontmatter.image || "https://github.com/basecamp.png"}
											alt="banner"
											className="object-cover object-top"
											height={786}
											width={1200}
										/>
									</div>
								</div>
								<Card.Header>
									<div className="flex gap-1 mb-4">
										{frontmatter.twitter && (
											<Link
												href={
													frontmatter.twitter.startsWith("https://twitter.com/")
														? frontmatter.twitter
														: `https://twitter.com/${frontmatter.twitter}`
												}
												target="_blank"
											>
												<Tooltip delay={0}>
													<Tooltip.Trigger
														aria-label="Follow me"
														className={buttonStyles({
															appearance: "outline",
															size: "square-petite",
														})}
													>
														<IconBrandX />
													</Tooltip.Trigger>
													<Tooltip.Content>Follow @{frontmatter.twitter} on X</Tooltip.Content>
												</Tooltip>
											</Link>
										)}
										{frontmatter.github && (
											<Link href={frontmatter.github} target="_blank">
												<Tooltip delay={0}>
													<Tooltip.Trigger
														aria-label="View github profile"
														className={buttonStyles({
															appearance: "outline",
															size: "square-petite",
														})}
													>
														<IconBrandGithub />
													</Tooltip.Trigger>
													<Tooltip.Content>View GitHub profile</Tooltip.Content>
												</Tooltip>
											</Link>
										)}

										{frontmatter.site && (
											<Link
												href={
													frontmatter.site.startsWith("http")
														? frontmatter.site
														: `https://${frontmatter.site}`
												}
												target="_blank"
											>
												<Tooltip delay={0}>
													<Tooltip.Trigger
														aria-label="View website"
														className={buttonStyles({
															appearance: "outline",
															size: "square-petite",
														})}
													>
														<IconChainLink />
													</Tooltip.Trigger>
													<Tooltip.Content>View Website</Tooltip.Content>
												</Tooltip>
											</Link>
										)}
									</div>
									<Card.Title>{frontmatter.title}</Card.Title>
									<Card.Description>{frontmatter.description}</Card.Description>
								</Card.Header>
								<Card.Footer className="flex flex-wrap gap-1">
									{/* Display categories as badges */}
									{frontmatter.category &&
										frontmatter.category.length > 0 &&
										frontmatter.category.map((category, index) => (
											<Badge key={index} shape="circle">
												{category}
											</Badge>
										))}
								</Card.Footer>
							</Card>
						</Link>
					</div>
				))}
			</div>
		</Container>
	)
}
