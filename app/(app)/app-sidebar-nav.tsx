"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { siteConfig } from "@/resources/config/site"
import { CommandEmpty, CommandSeparator } from "cmdk"
import dayjs from "dayjs"
import {
	IconBrandGithub,
	IconBrandX,
	IconCircleInfo,
	IconCube,
	IconDashboard,
	IconHeart,
	IconPackage,
	IconSearch,
	IconVoice,
} from "justd-icons"
import { usePathname } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import { Breadcrumbs, Button, buttonStyles, CommandMenu, Link, Menu, Separator, SidebarNav, SidebarTrigger } from "ui"

export default function AppSidebarNav() {
	const inputRef = useRef<HTMLInputElement>(null)
	const pathname = usePathname()

	const pathSegments = pathname.replace(/^\/+|\/+$/, "").split("/")

	const [currentTime, setCurrentTime] = useState(dayjs().format("dddd, DD MMM YYYY h:mm:ss a"))

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(dayjs().format("dddd DD MMM YYYY / h:mm:ss"))
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	const [isOpen, setIsOpen] = useState(false)

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setIsOpen((open: boolean) => !open)
			}
		}

		document.addEventListener("keydown", down)

		return () => document.removeEventListener("keydown", down)
	}, [])

	const pages = [
		{ id: 1, name: "Home", icon: IconDashboard, href: "/" },
		{ id: 2, name: "Product Finder", icon: IconPackage, href: "/product-finder" },
		{ id: 3, name: "About", icon: IconCircleInfo, href: "/about" },
		{ id: 4, name: "Became Supporter", icon: IconHeart, href: "/support" },
		{ id: 5, name: "Changelog", icon: IconVoice, href: "/changelog" },
	]

	return (
		<SidebarNav className="sticky top-0 z-50 bg-bg border-b">
			<span className="flex items-center gap-x-4">
				<SidebarTrigger className="-mx-2" />
				<Separator className="@md:block hidden h-6" orientation="vertical" />
				<Breadcrumbs className="@md:flex hidden">
					{pathSegments.map((segment, index) => (
						<Breadcrumbs.Item key={index} href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
							{/* {segment.charAt(0).toUpperCase() + segment.slice(1)} /  */}
							{currentTime}
						</Breadcrumbs.Item>
					))}
				</Breadcrumbs>
			</span>

			<div className="ml-auto flex items-center gap-x-1">
				<>
					<Button
						onPress={() => setIsOpen((open: boolean) => !open)}
						size="small"
						appearance="outline"
						className="h-9"
					>
						<IconSearch />

						<span className="text-muted-fg">Search...</span>

						<Menu.Keyboard className="-mr-2" keys="⌘K" />
					</Button>
					<CommandMenu isOpen={isOpen} onOpenChange={setIsOpen}>
						<CommandMenu.Input ref={inputRef} autoFocus placeholder="Quick search..." />
						<CommandMenu.List>
							<CommandMenu.Section heading="Pages">
								{pages.map((page) => (
									<>
										<CommandMenu.Item key={page.id} className="mt-1">
											<Link
												onPress={() => setIsOpen(false)}
												href={page.href}
												className="w-full flex items-center"
											>
												<page.icon /> {page.name}
											</Link>
										</CommandMenu.Item>
										<CommandSeparator />
									</>
								))}
							</CommandMenu.Section>
						</CommandMenu.List>
						<CommandEmpty className="grid place-content-center">
							<div className="text-center">
								<IconCube className="inline" />
								<p className="mt-2">No results found.</p>
							</div>
						</CommandEmpty>
					</CommandMenu>
					<Link
						aria-label="Github Repository"
						className={buttonStyles({
							appearance: "outline",
							size: "square-petite",
							className: "**:data-[slot=icon]:text-fg",
						})}
						target="_blank"
						href={siteConfig.repo}
					>
						<IconBrandGithub />
					</Link>
				</>
			</div>
		</SidebarNav>
	)
}
