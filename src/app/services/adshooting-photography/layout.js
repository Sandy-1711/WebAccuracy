import AdNav from "./AdNav";

export default function Adlayout({ children }) {
    return <div>
        <AdNav />
        {children}
    </div>
}