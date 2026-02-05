import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
// import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata = {
    title: "10enconta",
    description: "Contabilidad Guatemala",

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },

    manifest: "/site.webmanifest",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="light" suppressHydrationWarning>
            <body
                className={`${geistSans.className} ${geistMono.className} antialiased`}>
                <GoogleAnalytics />
                <div
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                    }}>
                    {/* <Navbar /> */}
                    <main style={{ flexGrow: 1 }}>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
