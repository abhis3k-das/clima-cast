import type { PropsWithChildren } from "react"
import Header from "./Header";

const Layout = ({children} : PropsWithChildren) => {
    return (
        <div className="bg-linear-to-br from-background to-muted">
            <Header/>
            <main className="min-h-screen container mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="border-t background-blur py-12 supports-backdrop-filter:bg-background/60">
                <div className="container mx-auto px-4 text-center">
                    <p>Made by Abhisek</p>
                </div>
            </footer>
        </div>
    )
}

export default Layout;