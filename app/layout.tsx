import { Metadata } from "next"
import { PropsWithChildren, ReactNode } from "react"
import { Author } from "next/dist/lib/metadata/types/metadata-types"
import Navbar from "@/components/Navbar/Navbar"
import '../styles/globals.css'

interface RootLayoutProps extends PropsWithChildren{
    provider: ReactNode
}

export const metadata: Metadata = {
    title: "Get Done App",
    authors: {
        name: 'Lucas Emanuel'
    },
    description: "Website dedicated to help with focus"

}

const RootLayout = (props: RootLayoutProps) => {
  return (
    <html lang="en">
        <body>
            <Navbar></Navbar>
            {props.children}
        </body>
    </html>
  )
}

export default RootLayout