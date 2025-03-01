"use client"

import { siteConfig } from "@/resources/config/site"
import {
	IconColorSwatch,
	IconHeart,
	IconMap,
	IconMagic,
	IconPackageFill,
	IconPeople,
	IconBrandCopilot,
	IconCube,
} from "justd-icons"
import { usePathname } from "next/navigation"
import {
	Badge,
	Link,
	Separator,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarItem,
	SidebarLabel,
	SidebarRail,
	SidebarSection,
} from "ui"

export default function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
	const router = usePathname()
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<Link
					className="flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center"
					href="/"
				>
					<IconPackageFill className="size-5" />
					<SidebarLabel className="font-bold">{siteConfig.name}</SidebarLabel>
				</Link>
			</SidebarHeader>
			<Separator className="-mt-3.5 mb-1.5" />
			<SidebarContent>
				<SidebarSection>
					{navigation.map((item, index) => (
						<SidebarItem key={index} isCurrent={router === item.href} href={item.href}>
							{item.icon}
							<SidebarLabel>{item.label}</SidebarLabel>
						</SidebarItem>
					))}
				</SidebarSection>
			</SidebarContent>
			<Separator />
			<SidebarFooter>
				<SidebarSection>
					<SidebarItem isDisabled>
						<SidebarLabel className="flex items-center gap-2">
							<Badge
								intent="success"
								className="flex items-center gap-1.5 font-mono font-extrabold capitalize"
							>
								<IconBrandCopilot className="animate-pulse" />
								<span>All systems normal</span>
							</Badge>
						</SidebarLabel>
					</SidebarItem>
				</SidebarSection>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}

const navigation = [
	{ label: "Home", icon: <IconCube />, isCurrent: true, href: "/" },
	{ label: "Portfolio", icon: <IconColorSwatch />, isCurrent: false, href: "/portfolio" },
	{ label: "Contribution Guide", icon: <IconMap />, isCurrent: false, href: "/guide" },
	{ label: "Contributors", icon: <IconPeople />, isCurrent: false, href: "/contributors" },
	{ label: "Support", icon: <IconHeart />, isCurrent: false, href: "/support" },
	{ label: "Resources", icon: <IconMagic />, isCurrent: false, href: "/resources" },
]
