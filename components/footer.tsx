"use client"

import { siteConfig } from "@/resources/config/site"
import { IconPackage, IconPackageFill } from "justd-icons"
import { Container, Link } from "ui"
import dayjs from "dayjs"

const navigation = {
	supports: [
		{ name: "Github Star", href: "https://github.com/yuxxeun/w3show" },
		{ name: "Github Sponsor", href: "https://github.com/sponsors/yuxxeun" },
	],
	resources: [
		{ name: "Icons", href: "https://getjustd.com/icons" },
		{ name: "UI Component", href: "https://getjustd.com" },
		{ name: "RAC", href: "https://react-spectrum.adobe.com/index.html" },
	],
	labs: [
		{ name: "Github", href: "https://github.com/yuxxeun/w3show" },
		{ name: "X / Formerly Twitter", href: "https://x.com/yuxxeun" },
	],
	legal: [{ name: "MIT", href: "https://github.com/yuxxeun/w3show/blob/main/LICENSE" }],
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
								<ul className="mt-6 space-y-4">
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
								<ul className="mt-6 space-y-4">
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
								<h3 className="font-semibold text-fg text-sm leading-6">Labs</h3>
								<ul className="mt-6 space-y-4">
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
								<ul className="mt-6 space-y-4">
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

			<div className="-mt-28 -mb-20 sm:-mt-32 relative z-10 flex h-[14rem] flex-col items-center justify-center overflow-hidden text-center">
				<div className="absolute h-32 w-full bg-linear-to-b sm:w-1/2 lg:w-1/4 dark:from-bg dark:via-fg dark:to-bg dark:blur-xl" />
				<strong className="relative z-10 inline-flex from-bg to-muted font-bold text-[7rem] text-fg leading-none sm:text-[10rem] dark:bg-linear-to-b dark:bg-clip-text dark:text-bg dark:[text-shadow:1px_1px_0_var(--fg),_-1px_-1px_0_var(--fg),_1px_-1px_0_var(--fg),_-1px_1px_0_var(--fg),_1px_0_0_var(--fg),_-1px_0_0_var(--fg),_0_1px_0_var(--fg),_0_-1px_0_var(--fg)]">
					W3SHOW
				</strong>
			</div>

			<Container className="relative z-20 space-y-1.5 border-t bg-bg py-6 text-center text-muted-fg text-sm **:[a]:font-semibold **:[a]:text-fg **:[strong]:font-semibold **:[strong]:text-fg">
				<p>
					<strong>
						{siteConfig.name} &copy; {dayjs().format("YYYY")}
					</strong>{" "}
					- This project’s crafted with 💙 by <Link href={siteConfig.links.twitter}>{siteConfig.author}</Link>
					. Peep the Source Code on <Link href={siteConfig.repo}>GitHub</Link>.
				</p>

				<p>
					Cooked up with{" "}
					<Link href="https://nextjs.org" target="_blank">
						Next.js
					</Link>
					,
					<Link href="https://tailwindcss.com" target="_blank">
						Tailwind CSS
					</Link>
					, and{" "}
					<Link href="https://react-spectrum.adobe.com/react-aria/components.html" target="_blank">
						RAC
					</Link>
					.
				</p>
				<p>
					Hosted on{" "}
					<Link href="https://vercel.com" target="_blank">
						Vercel
					</Link>
					. The source code's got the{" "}
					<Link href="https://github.com/justdlabs/justd/blob/main/LICENSE">MIT</Link> license.
				</p>
			</Container>
		</footer>
	)
}
