"use client"

import { IconBrandGithub, IconBrandX, IconGlobe, IconPerson, IconWindowVisit } from "justd-icons"
import Image from "next/image"
import { Badge, buttonStyles, Card, Link, Separator } from "ui"
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
					className="relative h-fit border rounded-lg p-1.5 bg-bg dark:bg-secondary/30 backdrop-blur-3xl"
					key={frontmatter.fileName}
				>
					<Link target="_blank" href={frontmatter.repo} aria-label={frontmatter.site} />
					<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
						<div className="p-2">
							<div className="relative w-full rounded-xl shadow-lg overflow-hidden">
								<Image
									src={
										frontmatter.image ||
										"https://static.vecteezy.com/system/resources/previews/006/736/566/large_2x/illustration-file-not-found-or-404-error-page-free-vector.jpg"
									}
									alt="banner"
									className="object-cover object-center rounded-lg"
									height={730}
									width={1584}
								/>
							</div>
						</div>
						<Separator orientation="horizontal" className="mt-5" />
						<Card.Header>
							<div className="mt-1 w-fit space-y-1.5">
								<div>
									<Badge shape="circle" intent="success">
										<IconGlobe />
										{frontmatter.site}
									</Badge>
								</div>
								<div>
									<Badge shape="circle">
										<IconPerson />
										{frontmatter.author}
									</Badge>
								</div>
							</div>
						</Card.Header>
						<Card.Content>
							<div className="-mt-1 flex gap-1">
								{frontmatter.twitter && (
									<Link
										aria-label="Github Repository"
										className={buttonStyles({
											intent: "outline",
											size: "square-petite",
											className: "**:data-[slot=icon]:text-fg",
										})}
										target="_blank"
										href={`https://x.com/${frontmatter.twitter}`}
									>
										<IconBrandX />
									</Link>
								)}
								{frontmatter.repo && (
									<Link
										aria-label="Github Repository"
										className={buttonStyles({
											intent: "outline",
											size: "square-petite",
											className: "**:data-[slot=icon]:text-fg",
										})}
										target="_blank"
										href={frontmatter.repo}
									>
										<IconBrandGithub />
									</Link>
								)}

								{frontmatter.site && (
									<Link
										aria-label="Github Repository"
										className={buttonStyles({
											intent: "outline",
											size: "square-petite",
											className: "**:data-[slot=icon]:text-fg",
										})}
										target="_blank"
										href={frontmatter.site}
									>
										<IconWindowVisit />
									</Link>
								)}
							</div>
						</Card.Content>
						<Separator orientation="horizontal" />
						<Card.Footer className="flex flex-wrap gap-1">
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
