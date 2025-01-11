"use client"

import { Container } from "@/components/container"
import {
	IconBook,
	IconBrandGithub,
	IconBrandX,
	IconBug,
	IconChainLink,
	IconColorPalette,
	IconComputer,
	IconWindowVisit,
} from "justd-icons"
import Image from "next/image"
import { buttonStyles, Card, Link, Tooltip } from "ui"
import { MdxData } from "./page"

interface ResourcesProps {
	allMdxData: MdxData[]
}

const mapRoleToIcon = (role: string) => {
	switch (role) {
		case "📖":
			return <IconBook />
		case "💻":
			return <IconComputer />
		case "🎨":
			return <IconColorPalette />
		case "🐛":
			return <IconBug />
		default:
			return null
	}
}

const mapRoleToText = (role: string) => {
	switch (role) {
		case "📖":
			return "Documentation"
		case "💻":
			return "Code"
		case "🎨":
			return "Styling"
		case "🐛":
			return "Bug Fixing"
		default:
			return "Unknown Role"
	}
}

export default function Resources({ allMdxData }: ResourcesProps) {
	if (!allMdxData || allMdxData.length === 0) {
		return <div>No resources available</div>
	}

	return (
		<Container>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{allMdxData.map((frontmatter) => (
					<div
						className="relative border rounded-lg p-1.5 bg-bg dark:bg-secondary/30 backdrop-blur-3xl"
						key={frontmatter.fileName}
					>
						<Link target="_blank" href={frontmatter.github} aria-label={frontmatter.site} />
						<Card className="inset-ring inset-ring-fg/10 inset-shadow-fg/10 inset-shadow-xs border-0 bg-bg dark:inset-ring-fg/5 dark:bg-secondary/30">
							<div className="p-2">
								<div className="relative w-full max-w-screen-md rounded-xl shadow-lg overflow-hidden">
									<Image
										src={
											frontmatter.image ||
											"https://static.vecteezy.com/system/resources/previews/006/736/566/large_2x/illustration-file-not-found-or-404-error-page-free-vector.jpg"
										}
										alt="banner"
										className="object-cover w-full h-auto rounded-lg"
										width={1200}
										height={786}
									/>
								</div>
							</div>
							<Card.Header>
								<div className="flex gap-1 mb-4">
									{frontmatter.twitter && (
										<Link
											aria-label="Github Repository"
											className={buttonStyles({
												appearance: "outline",
												size: "square-petite",
												className: "**:data-[slot=icon]:text-fg",
											})}
											target="_blank"
											href={`https://x.com/${frontmatter.twitter}`}
										>
											<IconBrandX />
										</Link>
									)}
									{frontmatter.github && (
										<Link
											aria-label="Github Repository"
											className={buttonStyles({
												appearance: "outline",
												size: "square-petite",
												className: "**:data-[slot=icon]:text-fg",
											})}
											target="_blank"
											href={frontmatter.github}
										>
											<IconBrandGithub />
										</Link>
									)}

									{frontmatter.site && (
										<Link
											aria-label="Github Repository"
											className={buttonStyles({
												appearance: "outline",
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
								<Card.Title>{frontmatter.author}</Card.Title>
							</Card.Header>
							<Card.Footer className="flex flex-wrap gap-1">
								{frontmatter.role &&
									frontmatter.role.length > 0 &&
									frontmatter.role.map((roleItem: string, index: number) => (
										<Tooltip key={index} delay={0}>
											<Tooltip.Trigger
												aria-label={`Role: ${roleItem}`}
												className={buttonStyles({
													appearance: "outline",
													size: "square-petite",
												})}
											>
												{mapRoleToIcon(roleItem)}
											</Tooltip.Trigger>
											<Tooltip.Content>{mapRoleToText(roleItem)}</Tooltip.Content>
										</Tooltip>
									))}
							</Card.Footer>
						</Card>
					</div>
				))}
			</div>
		</Container>
	)
}
