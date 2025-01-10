"use client"

import { useEffect, useState } from "react"

import { ThemeSwitcher } from "@/components/theme-switcher"
import {
	IconApple,
	IconArrowUpRight,
	IconBrandGithub,
	IconBrandJustd,
	IconBrandLayers,
	IconBrandParanoid,
	IconChevronDown,
	IconDashboard,
	IconPackage,
	IconTelephone,
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
				<Navbar.Logo className="text-fg items-stretch" href="/">
					<IconBrandLayers className="size-5" />
					<span className="font-bold">w3show</span>
				</Navbar.Logo>
				<Navbar.Section>
					<Navbar.Item isCurrent={pathname === "/"} href="/" className="lg:hidden">
						<IconDashboard className="inline size-4 md:hidden" />
						Home
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/portfolio"} href="/portfolio">
						<IconApple className="inline size-4 md:hidden" />
						Portfolios
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/guide"} href="/guide">
						<IconApple className="inline size-4 md:hidden" />
						Contribution Guide
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/contributors"} href="/contributors">
						<IconTelephone className="inline size-4 md:hidden" />
						Contributors
					</Navbar.Item>
					<Menu>
						<Navbar.Item className="group">
							<IconPackage className="inline size-4 md:hidden" />
							Resources
							<IconChevronDown className="ml-2 size-4 duration-200 group-data-pressed:rotate-180" />
						</Navbar.Item>
						<Menu.Content className="sm:min-w-48">
							<Menu.Item target="_blank" href="https://getjustd.com/icons">
								<IconBrandGithub />
								Repository
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/">
								<IconBrandJustd />
								UI Components
								<IconArrowUpRight className="ml-auto" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://getjustd.com/icons">
								<IconBrandParanoid />
								Icons
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
			<Navbar.Compact>
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
