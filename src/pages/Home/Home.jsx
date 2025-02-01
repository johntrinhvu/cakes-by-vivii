import "./Home.css";
import SlidingImages from "../../components/ImageSlider/ImageSlider";
import Cake1 from "../../assets/cake.jpg";
import Cake2 from "../../assets/cake2.jpeg";
import Cake3 from "../../assets/cake3.jpg";
import Cake4 from "../../assets/cake4.jpg";
import Cake5 from "../../assets/cake5.jpg";

export default function Home() {
    // Cake Images
    const image = [
        {url: Cake1, title: 'Cake 1'},
        {url: Cake2, title: 'Cake 2'},
        {url: Cake3, title: 'Cake 3'},
        {url: Cake4, title: 'Cake4'},
        {url: Cake5, title: 'Cake5'}
    ]

    return (
        <div className="mt-56 sm:mt-c1 md:mt-c2">
            {/* Cake section */}
            <section className="cake-slider-bg-color flex flex-col items-center justify-center h-[90vh]">
                <div className="size-full mx-auto">
                    <SlidingImages slides={ image } />
                </div>
            </section>

            {/* Welcome section */}
            <section className="flex flex-col sm:flex-row justify-between items-start px-6 sm:px-12 md:px-20 gap-10 py-14">
                <div className="flex flex-col sm:w-1/2">
                    <h1 className="tracking-wide text-4xl mb-4">welcome</h1>
                    <p className="text-base mt-10 mb-4">My baking journey began with a simple monochromatic green heart-shaped cake for my mom’s birthday. Baking started as a hobby to delight both family and friends during birthdays, anniversaries, and special occasions. My home kitchen became a cake bakery studio for my creativity with all the grace and support of my lovely partner.</p>
                    <p className="text-base mb-4">Soon, my cakes continued to travel through word of mouth beyond my friends and family. More friends and friends of their friends began to request my cakes which inspired to me to share my passion. I designed this website for ease to explore my cakes, customize, and order a cake tailored to your occasion.</p>
                    <p className="">Thank you for visiting! I hope our cakes will be a part of your special moments.</p>
                </div>

                <div className="flex flex-col sm:w-1/2">
                    <h1 className="tracking-wide text-4xl mb-4">location</h1>
                    <p className="text-base mt-10 mb-4">Cake pickup  is local to the DMV region in the heart of Annandale, Virginia.</p>
                    <p className="text-base">Delivery is unavailable at this time.</p>
                </div>
            </section>

            <section className="bg-[#E4D8E7] flex flex-col sm:flex-row h-[70vh]">
                <div>

                </div>
            </section>
        </div>
    );
}
