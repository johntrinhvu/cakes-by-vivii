import "./Home.css";

export default function Home() {
    return (
        <div className="mt-56 sm:mt-c1 md:mt-c2">
            {/* Cake section */}
            <section className="cake-slider-bg-color flex flex-col items-center justify-center h-[70vh]">
                <h3 className="text-[#554242] text-sm">image of cake</h3>
                <h4 className="text-[#554242] text-sm">(scrolling through)</h4>
            </section>

            {/* Welcome section */}
            <section className="flex flex-col md:flex-row md:justify-between h-[70vh]">
                <div className="mt-10 flex flex-col ml-4 md:ml-36 md:w-1/3">
                    <h1 className="tracking-wide text-4xl">welcome</h1>
                    <p className="text-base mt-6 mb-4">My baking journey began with a simple monochromatic green heart-shaped cake for my mom’s birthday. Baking started as a hobby to delight both family and friends during birthdays, anniversaries, and special occasions. My home kitchen became a cake bakery studio for my creativity with all the grace and support of my lovely partner.</p>
                    <p className="text-base mb-4">Soon, my cakes continued to travel through word of mouth beyond my friends and family. More friends and friends of their friends began to request my cakes which inspired to me to share my passion. I designed this website for ease to explore my cakes, customize, and order a cake tailored to your occasion.</p>
                    <p className="mb-4">Thank you for visiting! I hope our cakes will be a part of your special moments.</p>
                </div>

                <div className="mt-10 flex flex-col ml-4 md:ml-0 md:mr-36 md:w-1/3">
                    <h1 className="tracking-wide text-4xl">location</h1>
                    <p className="text-base mt-6 mb-4">Cake pickup  is local to the DMV region in the heart of Annandale, Virginia.</p>
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