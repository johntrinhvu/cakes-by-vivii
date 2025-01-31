// this is the title of each page component
import "./Title.css";

export default function Title({ titleOfPage }) {
    return (
        <div className="mt-56 w-full flex flex-col items-center justify-center">
            <h1 className="text-black py-7 sm:mt-5 md:mt-12 md:mb-4 tracking-wide sm:tracking-wider md:tracking-widest text-2xl sm:text-3xl md:text-4xl">{titleOfPage}</h1>
            <span className="block w-full top-rectangle mb-2.5 h-1.5 shadow-md shadow-zinc-400"></span>
        </div>
    );
}