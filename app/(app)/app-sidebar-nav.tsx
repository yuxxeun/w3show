"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { siteConfig } from "@/resources/config/site"
import dayjs from "dayjs"
import { IconBrandGithub } from "justd-icons"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { Breadcrumbs, buttonStyles, Link, Separator, SidebarNav, SidebarTrigger } from "ui"

export default function AppSidebarNav() {
	const pathname = usePathname()
	const pathSegments = pathname.replace(/^\/+|\/+$/, "").split("/")
	const [currentTime, setCurrentTime] = useState(dayjs().format("dddd, DD MMM YYYY hh:mm:ss"))

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(dayjs().format("dddd DD MMM YYYY / h:mm:ss"))
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<SidebarNav className="sticky top-0 z-50 bg-bg border-b">
			<span className="flex items-center gap-x-4">
				<SidebarTrigger className="-mx-2" />
				<Separator className="@md:block hidden h-6" orientation="vertical" />
				<Breadcrumbs className="@md:flex hidden">
					{pathSegments.map((segment, index) => (
						<Breadcrumbs.Item key={index} href={`/${pathSegments.slice(0, index + 1).join("/")}`}>
							<p>
								{currentTime} {dayjs().format("a")}
							</p>
						</Breadcrumbs.Item>
					))}
				</Breadcrumbs>
			</span>

			<div className="ml-auto flex items-center gap-x-1">
				<ThemeSwitcher />
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
			</div>
		</SidebarNav>
	)
}
