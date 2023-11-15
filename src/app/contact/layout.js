import Nav from "../components/Nav/nav"

export const metadata = {
    title: 'Contact - Web Accuracy',
    description: 'Contact Us page',
}
export default function Layout({ children }) {
    return <>
        <Nav />
        {children}
    </>
}