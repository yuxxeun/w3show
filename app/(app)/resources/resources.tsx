"use client"

import { Badge, buttonStyles, Card, Container, Link, Separator, Tooltip } from "@/components/ui"
import { IconBrandGithub, IconBrandX, IconChainLink, IconWindowVisit } from "justd-icons"
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
					<div
						className="relative border rounded-lg p-1.5 bg-bg dark:bg-secondary/30 backdrop-blur-3xl"
						key={frontmatter.title}
					>
						<Link target="_blank" href={frontmatter.site}>
							<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
								<div className="p-2">
									<div className="relative w-full rounded-xl shadow-lg overflow-hidden">
										<Image
											src={frontmatter.image || "https://github.com/basecamp.png"}
											alt="banner"
											layout="responsive"
											className="object-cover w-full h-full"
											height={786}
											width={1200}
										/>
									</div>
								</div>
								<Separator className="mt-5" />
								<Card.Header>
									<div className="flex gap-1 mb-4">
										{frontmatter.twitter && (
											<Link
												className={buttonStyles({
													appearance: "outline",
													size: "square-petite",
												})}
												href={
													frontmatter.twitter.startsWith("https://twitter.com/")
														? frontmatter.twitter
														: `https://twitter.com/${frontmatter.twitter}`
												}
												target="_blank"
											>
												<IconBrandX />
											</Link>
										)}
										{frontmatter.github && (
											<Link
												href={frontmatter.github}
												target="_blank"
												className={buttonStyles({
													appearance: "outline",
													size: "square-petite",
												})}
											>
												<IconBrandGithub />
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
												className={buttonStyles({
													appearance: "outline",
													size: "square-petite",
												})}
											>
												<IconWindowVisit />
											</Link>
										)}
									</div>
									<Card.Title>{frontmatter.title}</Card.Title>
									<Card.Description>{frontmatter.description}</Card.Description>
								</Card.Header>
								<Separator className="mb-5" />
								<Card.Footer className="flex flex-wrap gap-1">
									{frontmatter.category &&
										frontmatter.category.length > 0 &&
										frontmatter.category.map((category, index) => (
											<Badge key={index} shape="square">
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
