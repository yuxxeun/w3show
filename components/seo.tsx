"use client"

import { siteConfig } from "@/resources/config/site"
import { NextSeo } from "next-seo"

export default function Seo() {
	return (
		<>
			<NextSeo
				canonical={siteConfig.url}
				openGraph={{
					url: siteConfig.url,
					images: [
						{
							url: "/banner.png",
							width: 800,
							height: 600,
							alt: `${siteConfig.name} banner`,
							type: "image/jpeg",
						},
					],
					siteName: siteConfig.name,
				}}
				twitter={{
					handle: siteConfig.author,
					site: siteConfig.url,
					cardType: "summary_large_image",
				}}
			/>
		</>
	)
}
