import { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		h1: (props: any) => <h1 className="mt-12 text-2xl font-bold my-4" {...props} />,
		h2: (props: any) => <h2 className="mt-12 text-xl font-semibold my-4" {...props} />,
		h3: (props: any) => <h3 className="mt-12 text-lg font-medium my-3" {...props} />,
		p: (props: any) => <p className="text-base text-muted-fg leading-relaxed" {...props} />,
		a: (props: any) => <a className="text-primary hover:underline no-underline" {...props} />,
		code: (props: any) => (
			<code
				className="bg-[var(--bg)] p-1 border border-[text-muted-fg] rounded-sm text-[var(--fg)] font-mono text-sm"
				{...props}
			/>
		),
		pre: (props: any) => (
			<pre className="bg-[var(--muted)] p-4 rounded-md overflow-x-auto my-4">
				<code className={`language-${props.className}`} {...props} />
			</pre>
		),
		blockquote: (props: any) => (
			<blockquote
				className="border-l-4 pl-4 border-[var(--primary)] italic text-[var(--muted)] my-6"
				{...props}
			/>
		),
		table: (props: any) => (
			<table className="min-w-full table-auto border-collapse border border-gray-300" {...props} />
		),
		th: (props: any) => <th className="py-2 px-4 border-b border-gray-300 bg-gray-100 text-left" {...props} />,
		td: (props: any) => <td className="py-2 px-4 border-b border-gray-300" {...props} />,
		tr: (props: any) => <tr {...props} />,
	}
}
