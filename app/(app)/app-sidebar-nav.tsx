"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { siteConfig } from "@/resources/config/site"
import dayjs from "dayjs"
import { IconBrandGithub } from "justd-icons"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { buttonStyles, Link, Separator, SidebarNav, SidebarTrigger } from "ui"

export default function AppSidebarNav() {
	const pathname = usePathname()
	const [currentTime, setCurrentTime] = useState(dayjs().format("dddd, DD MMM YYYY hh:mm:ss"))

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(dayjs().format("dddd DD MMM YY / h:mm"))
		}, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<SidebarNav className="sticky top-0 z-50 bg-bg border-b">
			<span className="flex items-center gap-x-4">
				<SidebarTrigger className="-mx-2" />
				<Separator className="@md:block hidden h-6" orientation="vertical" />
					<p className="flex items-center gap-2 text-sm font-mono lg:text-md text-muted-fg font-bold">
						{currentTime} {dayjs().format("a")}
					</p>
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
