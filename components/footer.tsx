"use client"

import { siteConfig } from "@/resources/config/site"
import { IconPackageFill } from "@intentui/icons"
import { Container, Link } from "ui"
import dayjs from "dayjs"

const navigation = {
	supports: [
		{ name: "Github Star", href: "https://github.com/yuxxeun/w3show" },
		{ name: "Nih Buat Jajan", href: "https://www.nihbuatjajan.com/yuxxeun" },
	],
	resources: [
		{ name: "Adobe React Aria", href: "https://react-spectrum.adobe.com/index.html" },
		{ name: "Intent UI", href: "https://intentui.com" },
		{ name: "Icons", href: "https://intentui.com/icons" },
	],
	labs: [
		{ name: "Github", href: "https://github.com/yuxxeun/w3show" },
		{ name: "X (Twitter)", href: "https://x.com/yuxxeun" },
		{ name: "Instagram", href: "https://instagram.com/yuxxeun" },
	],
	legal: [{ name: "MIT License", href: "https://github.com/yuxxeun/w3show/blob/main/LICENSE" }],
}

export function Footer() {
	return (
		<footer aria-labelledby="footer-heading" className="border-t text-bg-fg">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="relative z-20 mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:pt-16 lg:pb-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<IconPackageFill className="size-7" />
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="font-semibold text-fg text-sm leading-6">Resources</h3>
								<ul className="mt-4 space-y-2">
									{navigation.resources.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-muted-fg text-sm leading-6 data-hovered:text-fg"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="font-semibold text-fg text-sm leading-6">Support</h3>
								<ul className="mt-4 space-y-2">
									{navigation.supports.map((item) => (
										<li key={item.name}>
											<Link
												target="_blank"
												href={item.href}
												className="text-muted-fg text-sm leading-6 data-hovered:text-fg"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="font-semibold text-fg text-sm leading-6">Extra</h3>
								<ul className="mt-4 space-y-2">
									{navigation.labs.map((item) => (
										<li key={item.name}>
											<Link
												target="_blank"
												href={item.href}
												className="text-muted-fg text-sm leading-6 data-hovered:text-fg"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="font-semibold text-fg text-sm leading-6">Legal</h3>
								<ul className="mt-4 space-y-2">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<Link
												target="_blank"
												href={item.href}
												className="text-muted-fg text-sm leading-6 data-hovered:text-fg"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="relative z-10 flex flex-col items-center justify-center text-center h-[14rem] sm:h-[18rem] overflow-hidden -mt-24 sm:-mt-32 mb-[-6rem]">
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted to-background dark:via-muted/20 dark:to-background blur-xl" />

				<strong className="relative z-10 text-8xl sm:text-[10rem] lg:text-[12rem] font-extrabold tracking-tight uppercase text-foreground dark:text-white">
					{siteConfig.name}
				</strong>
			</div>

			<Container className="relative z-20 space-y-2 border-t bg-bg py-8 text-center text-sm text-muted-fg [&_a]:font-semibold [&_strong]:font-semibold">
				<p>
					Powered by <Link href="https://nextjs.org" target="_blank">Next.js</Link>,{" "}
					<Link href="https://intentui.com" target="_blank">Intent UI</Link>, and{" "}
					<Link href="https://vercel.com" target="_blank">Vercel</Link>.
				</p>
				<p>
					Source code on{" "}
					<Link href="https://github.com/yuxxeun/w3show" target="_blank">GitHub</Link> • MIT License {dayjs().year()}
				</p>
			</Container>
		</footer>
	)
}
