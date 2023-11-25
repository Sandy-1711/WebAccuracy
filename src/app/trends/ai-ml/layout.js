import Nav from "@/app/components/Nav/nav"
import Script from "next/script"

export const metadata = {
    title: 'AI-ML - Web Accuracy',
    description: '',
}
export default function AIML({ children }) {
    return (<>
        <Nav />
        {children}
    </>)
}