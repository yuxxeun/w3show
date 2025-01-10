"use client"

import { IconSearch } from "justd-icons"
import { usePathname } from "next/navigation"
import { Breadcrumbs, Button, Separator, SidebarNav, SidebarTrigger } from "ui"

export default function AppSidebarNav() {
	const pathname = usePathname()

	const pathSegments = pathname.replace(/^\/+|\/+$/, "").split("/")

	return (
		<SidebarNav className="sticky top-0 z-50">
			<span className="flex items-center gap-x-4">
				<SidebarTrigger className="-mx-2" />
				<Separator className="@md:block hidden h-6" orientation="vertical" />
				<Breadcrumbs className="@md:flex hidden">
					{pathSegments.map((segment, index) => (
						<Breadcrumbs.Item key={index} href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
							{segment.charAt(0).toUpperCase() + segment.slice(1)}
						</Breadcrumbs.Item>
					))}
				</Breadcrumbs>
			</span>

			<div className="ml-auto flex items-center gap-x-2">
				<Button appearance="plain" aria-label="Search..." size="square-petite">
					<IconSearch />
				</Button>
			</div>
		</SidebarNav>
	)
}
