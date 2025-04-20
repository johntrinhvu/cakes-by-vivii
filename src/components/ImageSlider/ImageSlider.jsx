import { useState } from "react";

const SlidingImages = ({ slides }) => {
    const [currentIndex , setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        if (currentIndex === 0) {
            setCurrentIndex(slides.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const goToNext = () => {
        if (currentIndex === slides.length - 1) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="h-full relative">
            <div className="absolute top-1/2 -translate-y-1/2 left-[32px] text-[45px] text-white z-1 cursor-pointer" onClick={goToPrevious}>❮</div>
            <div className="absolute top-1/2 -translate-y-1/2 right-[32px] text-[45px] text-white z-1 cursor-pointer" onClick={goToNext}>❯</div>
            <div 
                className="size-full bg-center bg-cover" 
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}></div>
        </div>
    );
}

export default SlidingImages;
