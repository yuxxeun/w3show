import { AppNavbar } from "@/app/(app)/app-navbar"
import { Footer } from "@/components/footer"
import { SidebarInset, SidebarProvider } from "@/components/ui"
import AppSidebar from "./app-sidebar"
import AppSidebarNav from "./app-sidebar-nav"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="">
			<SidebarProvider>
				<AppSidebar collapsible="dock" />
				<SidebarInset>
					<AppSidebarNav />
					<div className="p-4">
						{children}
						<Footer />
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	)
}
