"use client"

import { IconChainLink, IconCompass, IconDashboard, IconGallery, IconPackage, IconPerson } from "justd-icons"
import { usePathname } from "next/navigation"
import {
	Link,
	Sidebar,
	SidebarContent,
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
					<IconChainLink className="size-5" />
					<SidebarLabel className="font-medium">W3Show</SidebarLabel>
				</Link>
			</SidebarHeader>
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
			<SidebarRail />
		</Sidebar>
	)
}

const navigation = [
	{ label: "Home", icon: <IconDashboard />, isCurrent: true, href: "/" },
	{ label: "Portfolio", icon: <IconGallery />, isCurrent: false, href: "/portfolio" },
	{ label: "Guide", icon: <IconCompass />, isCurrent: false, href: "/guide" },
	{ label: "Contributors", icon: <IconPerson />, isCurrent: false, href: "/contributors" },
	{ label: "Resources", icon: <IconPackage />, isCurrent: false, href: "/resources" },
]
