import AdNav from "./AdNav";
export const metadata = {
    title: 'Ad Shooting and Photography - Web Accuracy',
    description: 'Welcome to Our Ad Shooting and Photography Services in Ranchi! |  Ranchi ad campaign | Professional ad photography | Creative ad visuals | Professional photoshoots',
}
export default function Adlayout({ children }) {
    return <div>
        <AdNav />
        {children}
    </div>
}