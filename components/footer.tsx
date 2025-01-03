import React from "react"
import Link from "next/link"

export function Footer() {
	return (
		<footer aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
				<div className="mt-16 border-slate-900/10 border-t pt-8 sm:mt-20  lg:mt-24">
					<p className="mt-8 text-muted-fg text-xs leading-5 md:order-1 md:mt-0">
						&copy; 2024 Next Starter Kit by{" "}
						<Link target="_blank" href="https://getjustd.com" className="font-semibold text-fg">
							justd
						</Link>
						, Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}
