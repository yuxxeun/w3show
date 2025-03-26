"use client"

import { IconMoon, IconSun } from "justd-icons"
import { useTheme } from "next-themes"
import { Button } from "ui"

export function ThemeSwitcher() {
	const { resolvedTheme, setTheme } = useTheme()

	return (
		<Button
			intent="outline"
			size="square-petite"
			aria-label="Switch theme"
			onPress={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
		>
			<IconSun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
			<IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}
