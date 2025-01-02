"use client"

import { useEffect, useState } from "react"

import { ThemeSwitcher } from "@/components/theme-switcher"
import {
	IconArrowUpRight,
	IconBrandGithub,
	IconBrandJustd,
	IconChevronDown,
	IconColors,
	IconColorSwatch,
	IconCube,
	IconDashboard,
	IconFileLink,
	IconFolderLinkFill,
	IconGear,
	IconGuide,
} from "justd-icons"
import { usePathname } from "next/navigation"
import { buttonStyles, Link, Menu, Navbar } from "ui"

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
	const pathname = usePathname()

	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => setIsOpen(false), [pathname])
	return (
		<Navbar isSticky isOpen={isOpen} onOpenChange={setIsOpen} {...props}>
			<Navbar.Nav>
				<Navbar.Logo className="text-fg" href="/">
					<IconFolderLinkFill className="size-5" />
					<p className="text-lg font-bold ">
						WebShowCase
					</p>
				</Navbar.Logo>
				<Navbar.Section>
					<Navbar.Item isCurrent={pathname === "/"} href="/">
						<IconDashboard className="inline size-4 lg:hidden" />
						Home
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/portfolios"} href="/portfolios">
						<IconFileLink className="inline size-4 lg:hidden" />
						Portfolios
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/guide"} href="/guide">
						<IconGuide className="inline size-4 lg:hidden" />
						Guide
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/ontributors"} href="/contributors">
						<IconGear className="inline size-4 lg:hidden" />
						Contributors
					</Navbar.Item>
					<Menu>
						<Navbar.Item className="group">
							Resources
							<IconChevronDown className="ml-2 size-4 duration-200 group-data-pressed:rotate-180" />
						</Navbar.Item>
						<Menu.Content className="sm:min-w-48">
							<Menu.Item target="_blank" href="https://getjustd.com/components">
								<IconCube />
								Components
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/icons">
								<IconBrandJustd />
								Icons
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/themes">
								<IconColors />
								Themes
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/colors">
								<IconColorSwatch />
								Colors
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
						</Menu.Content>
					</Menu>
				</Navbar.Section>
				<Navbar.Section className="hidden sm:ml-auto lg:flex">
					<Navbar.Flex className="gap-1 md:gap-1td">
						<ThemeSwitcher />
						<Link
							aria-label="Goto GitHub Repository"
							className={buttonStyles({ appearance: "outline", size: "square-petite" })}
							target="_blank"
							href="https://github.com/justdlabs/next.js"
						>
							<IconBrandGithub />
						</Link>
					</Navbar.Flex>
				</Navbar.Section>
			</Navbar.Nav>
			<Navbar.Compact className="sticky top-0 z-10">
				<Navbar.Flex>
					<Navbar.Trigger className="-ml-2" />
				</Navbar.Flex>
				<Navbar.Flex>
					<Navbar.Flex className="gap-1">
						<ThemeSwitcher />
						<Link
							aria-label="Goto GitHub Repository"
							className={buttonStyles({ appearance: "outline", size: "square-petite" })}
							href="https://github.com/justdlabs/next.js"
						>
							<IconBrandGithub />
						</Link>
					</Navbar.Flex>
				</Navbar.Flex>
			</Navbar.Compact>
			{children}
		</Navbar>
	)
}
