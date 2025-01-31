import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/" className="transform text-center footer-text-color">
            <h1 className="text-2xl font-bold tracking-wide text-3xl sm:text-4xl md:text-[40px] kurale-regular">CAKES</h1>
            <p className="lavishly-yours-regular text-4xl sm:text-[40px] md:text-5xl">by vivii</p>
        </Link>
    );
}