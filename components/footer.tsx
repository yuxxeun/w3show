import React from "react"

import { IconBrandGithub, IconBrandTwitter } from "justd-icons"
import Link from "next/link"
import dayjs from "dayjs"

const navigation = {
	social: [
		{
			name: "GitHub",
			href: "#",
			icon: <IconBrandGithub />,
		},
	],
}

export function Footer() {
	return (
		<footer aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
				<div className="mt-16 border-slate-900/10 border-t pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
					<div className="flex space-x-6 md:order-2">
						{navigation.social.map((item) => (
							<Link
								aria-label={item.name}
								key={item.name}
								href={item.href}
								className="text-muted-fg hover:text-fg [&>svg]:h-5 [&>svg]:w-5 [&>svg]:stroke-[1.5]"
							>
								<span className="sr-only">{item.name}</span>
								{item.icon}
							</Link>
						))}
					</div>
					<p className="mt-8 text-muted-fg text-xs leading-5 md:order-1 md:mt-0">
						&copy; {dayjs().format("YYYY")} {""}
						<span className="font-semibold text-fg">w3show</span>, MIT License.
					</p>
				</div>
			</div>
		</footer>
	)
}
