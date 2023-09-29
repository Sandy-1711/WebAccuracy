import DigitalNav from "./DigitalNav";

export default function DigitalLayout({children}) {
    return <div>
        <DigitalNav />
        {children}
    </div>
}