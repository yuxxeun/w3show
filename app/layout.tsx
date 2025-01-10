import { Providers } from "@/components/providers"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { Toast } from "ui"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"

const fontSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-sans",
})
const fontMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-mono",
})

export const metadata: Metadata = {
	title: {
		template: "%s / w3show",
		default: "w3show",
	},
	description: "Portfolio of collection of web development.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true} className={`${fontSans.variable} ${fontMono.variable}`}>
			<body className="min-h-svh antialiased">
				<Toast />
				<Providers>
					{children}
					<Analytics />
				</Providers>
			</body>
		</html>
	)
}
