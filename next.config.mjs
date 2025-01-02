/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const nextConfig = {
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
			},
		],
	},
}

const withMDX = createMDX({
	extension: /\.mdx$/,
	remarkPlugins: [remarkGfm],
	rehypePlugins: [],
})

  export default withMDX(nextConfig)
