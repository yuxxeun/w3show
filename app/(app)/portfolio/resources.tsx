"use client"

import { Container } from "@/components/container"
import {
	IconBrandGithub,
	IconBrandX,
	IconChainLink,
	IconGlobe,
	IconGlobe2,
	IconPerson,
	IconWindowVisit,
} from "justd-icons"
import Image from "next/image"
import { Badge, buttonStyles, Card, Link, Separator, Tooltip } from "ui"
import { MdxData } from "./page"

interface ResourcesProps {
	allMdxData: MdxData[]
}

export default function Resources({ allMdxData }: ResourcesProps) {
	if (!allMdxData || allMdxData.length === 0) {
		return <div>No resources available</div>
	}

	return (
		<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{allMdxData.map((frontmatter) => (
				<div
					className="relative border rounded-lg p-1.5 bg-bg dark:bg-secondary/30 backdrop-blur-3xl"
					key={frontmatter.fileName}
				>
					<Link target="_blank" href={frontmatter.repo} aria-label={frontmatter.site} />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
						<div className="p-2">
							<div className="relative w-full aspect-[16/9] rounded-xl shadow-lg overflow-hidden">
								<Image
									src={frontmatter.image || "https://github.com/basecamp.png"}
									alt="banner"
									className="object-cover object-top rounded-lg"
									height={786}
									width={1200}
								/>
							</div>
						</div>
						<Separator />
						<Card.Header>
							<div className="mt-1 w-fit space-y-2">
								<div>
									<Badge shape="circle" intent="success" className="">
										<IconGlobe />
										{frontmatter.site}
									</Badge>
								</div>
								<div>
									<Badge className="">
										<IconPerson />
										{frontmatter.author}
									</Badge>
								</div>
							</div>
						</Card.Header>
						<Card.Content>
							<div className="-mt-3 flex gap-1">
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
											<Tooltip.Content>Follow creator on X</Tooltip.Content>
										</Tooltip>
									</Link>
								)}
								{frontmatter.repo && (
									<Link href={frontmatter.repo} target="_blank">
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
											<Tooltip.Content>Repository</Tooltip.Content>
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
												aria-label="Follow me"
												className={buttonStyles({
													appearance: "outline",
													size: "square-petite",
												})}
											>
												<IconWindowVisit />
											</Tooltip.Trigger>
											<Tooltip.Content>View website</Tooltip.Content>
										</Tooltip>
									</Link>
								)}
							</div>
						</Card.Content>
						<Separator />
						<Card.Footer className="mt-5 flex flex-wrap gap-1">
							{frontmatter.stack.map((stackItem, index) => (
								<Badge key={index} shape="square">
									{stackItem}
								</Badge>
							))}
						</Card.Footer>
					</Card>
				</div>
			))}
		</div>
	)
}
