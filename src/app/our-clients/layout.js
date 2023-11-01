import Nav from "../components/Nav/nav"

export const metadata = {
    title: 'Clients - Web Accuracy',
    description: ''
}
export default function ClientLayout({ children }) {
    return <>
        <Nav />
        {children}
    </>

}