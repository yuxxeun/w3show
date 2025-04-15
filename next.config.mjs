import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["md", "mdx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
			},
			{
				protocol: "https",
				hostname: "raw.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "static.vecteezy.com",
			},
			{
				protocol: "https",
				hostname: "intentui.com",
			},
		],
	},
}

const withMDX = createMDX({
	extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
